import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductGallery } from "@/components/products/ProductGallery";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Precision-machined components and certified material stock — valve bodies, hydraulic cylinders, carbon-fibre structures, machined assemblies and surface-treated parts. Built to spec in Sitiawan, Perak.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <Section pad="tight">
        <ProductGallery />
      </Section>
      <CtaBand eyebrow="Get Started" title="Need a part built to spec?" ctaLabel="Request a quote" />
    </>
  );
}
