import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Qualifications from "../components/Qualifications";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Qualifications />
      <Projects />
      <Contact />
    </main>
  );
}
