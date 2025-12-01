import React from "react";
import { ArrowRight, Github, Linkedin, Facebook } from "lucide-react";
import GlassCard from "./shared/GlassCard";
import NeonButton from "./shared/NeonButton";

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-20 min-h-screen flex items-center justify-center text-center md:text-left">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        
        <div className="space-y-6">
          <p className="text-xl text-[#FAF5F1]">Hi, I'm</p>
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight text-[#FAF5F1]">
            Shamim
          </h1>
          <h2 className="text-3xl text-[#A41F13] font-medium">
            A PERN Stack Web Developer
          </h2>
          <p className="text-[#FAF5F1]/80 max-w-lg leading-relaxed">
            I build full-stack web applications using PostgreSQL, Express, React, and Node.js with modern UI/UX and performance optimizations.
          </p>

          <div className="flex gap-4 pt-6 justify-center md:justify-start">
            <a href="https://github.com/Shamim24907?tab=repositories" target="_blank" className="social-icon-btn"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/shamim-ahmmed-762418329/" target="_blank" className="social-icon-btn"><Linkedin size={24} /></a>
            <a href="https://www.facebook.com/shamim.ahmmed.724358/" target="_blank" className="social-icon-btn"><Facebook size={24} /></a>
          </div>

          <div className="pt-6">
            <a href="/assets/Shamim-hossain-sagor.pdf" target="_blank">
              <NeonButton primary={true}>
                Hire Me <ArrowRight className="ml-2" size={20} />
              </NeonButton>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="glass-card-base p-2 rounded-3xl inline-block">
            <img
              src="/assets/profile.png"
              alt="Shamim"
              className="w-48 h-48 rounded-full object-cover border-4 border-[#A41F13] shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
