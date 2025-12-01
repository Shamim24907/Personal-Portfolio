import React from "react";

export default function Skills() {
  const skills = ["PostgreSQL", "Express.js", "React.js", "Node.js"];

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto">
      <h2 className="section-title">My <span>Skills</span></h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill}
            className="glass-card-base p-6 rounded-xl text-center 
                       hover:bg-[#A41F13]/20 hover:scale-105 
                       transition duration-300 shadow-[0_0_10px_#A41F13,0_0_15px_#292F36]"
          >
            <h3 className="text-xl font-bold text-[#A41F13]">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
