"use client";

import { useEffect, useRef } from "react";

// Fixed, site-wide ambient flow field. Raw WebGL (no Three.js): one full-screen
// triangle + a slow fractal-noise fragment shader in near-black steel tones —
// tuned subtle so text stays readable over it. Sits behind all content; the
// body's solid bg-surface is the fallback if WebGL is unavailable.
const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_scroll;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i = 0; i < 5; i++){ v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  float m = min(u_res.x, u_res.y);
  // Page-anchored coordinate (scroll-linked) so the field scrolls WITH the
  // content instead of staying pinned to the screen. Scaled by the shorter
  // side so cloud density is consistent in any aspect ratio.
  vec2 frag = vec2(gl_FragCoord.x, u_scroll + (u_res.y - gl_FragCoord.y));
  vec2 p = frag / m * 3.0;
  float t = u_time * 0.045;
  float n = fbm(p + vec2(t, t * 0.6) + fbm(p - t) * 0.6);
  vec3 base  = vec3(0.039, 0.039, 0.043);   // surface #0a0a0b
  vec3 steel = vec3(0.26, 0.265, 0.295);
  vec3 col = mix(base, steel, smoothstep(0.36, 0.92, n) * 0.48);
  col += vec3(0.05, 0.042, 0.032) * pow(smoothstep(0.75, 1.0, n), 2.0); // faint warm glints
  float vig = smoothstep(1.35, 0.45, length(uv - 0.5));
  col *= 0.78 + 0.22 * vig;
  gl_FragColor = vec4(col, 1.0);
}
`;

export function AmbientBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return; // fall back to the body's solid bg-surface

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uScroll = gl.getUniformLocation(prog, "u_scroll");

    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (seconds: number) => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, seconds);
      gl.uniform1f(uScroll, window.scrollY * dpr);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      draw(0); // single static frame, no animation loop
      return () => window.removeEventListener("resize", resize);
    }

    let raf = 0;
    const start = performance.now();
    const loop = () => {
      draw((performance.now() - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(loop); // pause while tab hidden
    };
    loop();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
