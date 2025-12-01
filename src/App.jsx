import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // <-- Import added

export default function App() {
  return (
    <div className="min-h-screen font-primary bg-[#292F36] text-[#FAF5F1]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer /> {/* <-- Footer component used here */}
    </div>
  );
}
