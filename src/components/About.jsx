import React from "react";
import GlassCard from "./shared/GlassCard";
import NeonButton from "./shared/NeonButton";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard className="md:col-span-2 space-y-6 h-full">
          <h3 className="text-3xl font-bold text-[#A41F13]">The Core Philosophy</h3>
          <p className="text-[#FAF5F1]/90 text-lg leading-relaxed">
            I craft full-stack web apps using PERN Stack. I focus on clean, scalable, and performant code, translating complex problems into simple, elegant solutions with modern UI design.
          </p>
          <div className="pt-4">
            <a href="#projects" className="block">
              <NeonButton primary={false} className="btn-sm">
                Explore Journey
              </NeonButton>
            </a>
          </div>
        </GlassCard>

        <GlassCard className="space-y-4 h-full">
          <h3 className="text-3xl font-bold text-[#A41F13]">Tech Stack</h3>
          <ul className="text-[#FAF5F1] space-y-2 pt-2 text-lg font-medium">
            <li><span className="text-[#A41F13] mr-2">✦</span> PostgreSQL</li>
            <li><span className="text-[#A41F13] mr-2">✦</span> Express.js</li>
            <li><span className="text-[#A41F13] mr-2">✦</span> React.js</li>
            <li><span className="text-[#A41F13] mr-2">✦</span> Node.js</li>
            <li><span className="text-[#A41F13] mr-2">✦</span> Tailwind CSS</li>
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
