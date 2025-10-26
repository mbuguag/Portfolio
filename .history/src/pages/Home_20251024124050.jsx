import React from "react";
import Hero from "../components/Hero/Hero";  // adjust path if your Hero is inside /components/Hero
import Skills from "../components/Skills";   // import Skills component

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />  {/* 👈 This shows your Skills section on the homepage */}
    </>
  );
}
