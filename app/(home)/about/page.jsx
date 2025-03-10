import MouseEffect from "@/hooks/MouseEffect";
import ScrollReveal from "@/hooks/ScrollReveal";
import AboutHero from "@/components/FrontEnd/About/AboutHero";
import OurMission from "@/components/FrontEnd/About/OurMission";
import OurValues from "@/components/FrontEnd/About/OurValues"; 
import OurTeam from "@/components/FrontEnd/About/OurTeam";
import OurProcess from "@/components/FrontEnd/About/OurProcess";
import Clients from "@/components/FrontEnd/About/Clients";
// import CTA from "@/components/About/CTA";

export const metadata = {
  title: "About Us | Alberow - Web Development & Marketing Agency",
  description: "Learn about Alberow, our mission, values, and the team behind our exceptional digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <MouseEffect />
      <ScrollReveal>
        <AboutHero />
        <OurMission />
        <OurValues />
        <OurTeam />
        <OurProcess />
        <Clients />
        {/* <CTA /> */}
      </ScrollReveal>
    </>
  );
}
