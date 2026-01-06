import AboutOrg from "@/components/about-org";
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutOrg />
      <Services />
      <Projects />
      <CTA />
    </>
  );
}
