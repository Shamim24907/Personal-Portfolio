import React from "react";
import { ArrowRight, Code, Zap, Globe } from "lucide-react";
import GlassCard from "./shared/GlassCard";
import NeonButton from "./shared/NeonButton";

const PROJECT_DATA = [
  { title: "E-Commerce System", tags: "React, Next.js, Redux", icon: Zap },
  { title: "Task Manager App", tags: "Vue.js, Firebase, DaisyUI", icon: Code },
  { title: "Data Visualization", tags: "React, D3.js, Tailwind", icon: Globe },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto">
      <h2 className="section-title">Latest <span>Projects</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECT_DATA.map((project, i) => (
          <GlassCard key={i} className="flex flex-col justify-between group">
            <div className="space-y-4">
              <project.icon
                size={48}
                className="text-[#A41F13] mb-4 shadow-[0_0_10px_#A41F13] rounded-lg"
              />
              <h3 className="text-2xl font-bold text-[#FAF5F1] group-hover:text-[#A41F13] transition duration-300">
                {project.title}
              </h3>
              <p className="text-[#FAF5F1]/70 text-sm italic">{project.tags}</p>
              <p className="text-[#FAF5F1]/80">
                Detailed summary of the modern UI, high-performance logic, and futuristic design implementation.
              </p>
            </div>
            <div className="mt-6 flex justify-start">
              <NeonButton primary={true} className="btn-sm">
                View Case <ArrowRight className="ml-2" size={16}/>
              </NeonButton>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
