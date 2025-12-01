import React from "react";

const GlassCard = ({ children, className = "" }) => {
  const neonShadow = "shadow-[0_0_10px_#A41F13,0_0_15px_#A41F13]";
  const neonBorder = "border-[1px] border-opacity-30 border-[#A41F13]";

  return (
    <div
      className={`
        glass-card-base rounded-2xl p-8 transition duration-500 ease-in-out
        bg-[#292F36]/80
        hover:bg-[#292F36]/60
        ${neonBorder}
        ${neonShadow}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
