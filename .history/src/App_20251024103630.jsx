import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

