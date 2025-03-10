
import MouseEffect from '../../hooks/MouseEffect';
import ScrollReveal from '../../hooks/ScrollReveal';
import Hero from '../../components/FrontEnd/Home/Hero';
import Features from '../../components/FrontEnd/Home/features';
import Services from '../../components/FrontEnd/Home/services';
import WorkShowcase from '../../components/FrontEnd/Home/work-showcase';
import Stats from '../../components/FrontEnd/Home/stats';
import Testimonials from '../../components/FrontEnd/Home/testimonials';
import CTA from '../../components/FrontEnd/Home/cta'; 
export default function Home() {
  return (
    <>
      <MouseEffect  />
      <ScrollReveal>
        <Hero />
        <Features />
        <Services />
        <WorkShowcase />
        <Stats />
        <Testimonials />
        <CTA />
      </ScrollReveal>
    </>
  );
}
