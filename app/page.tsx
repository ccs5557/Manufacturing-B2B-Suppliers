import { Hero } from "@/components/sections/Hero";
import { AdvancedComponents } from "@/components/sections/AdvancedComponents";
import { ProductionOptimized } from "@/components/sections/ProductionOptimized";
import { MaterialScience } from "@/components/sections/MaterialScience";
import { Consultation } from "@/components/sections/Consultation";

export default function Home() {
  return (
    <>
      <Hero />
      <AdvancedComponents />
      <ProductionOptimized />
      <MaterialScience />
      <Consultation />
    </>
  );
}
