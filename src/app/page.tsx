import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Services from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import Process from "@/components/sections/Process";
import Company from "@/components/sections/Company";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <Showcase />
      <Process />
      <Company />
      <FAQ />
      <Contact />
    </>
  );
}
