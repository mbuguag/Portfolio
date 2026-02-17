import Skills from "../pages/Skills";
import Hero from "../components/Hero";
import HomeHighlights from "../components/HomeHighlights";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeHighlights />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
