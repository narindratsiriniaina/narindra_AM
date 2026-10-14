import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Training from "./components/sections/Training";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ScrollReveal from "./components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal delay="short"><About /></ScrollReveal>
      <ScrollReveal delay="medium"><Services /></ScrollReveal>
      <ScrollReveal delay="short"><Training /></ScrollReveal>
      <Projects />
      <ScrollReveal delay="medium"><Contact /></ScrollReveal>
      <ScrollReveal delay="short"><Footer /></ScrollReveal>
    </>
  );
}
