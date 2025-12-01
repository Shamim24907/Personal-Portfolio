import React from "react";

const NeonButton = ({ children, primary = true, className = "" }) => (
  <button
    className={`
      btn btn-lg rounded-full text-base font-bold tracking-widest uppercase
      transition duration-300 transform hover:scale-[1.05]
      ${primary
        ? 'bg-[#A41F13] text-[#FAF5F1] shadow-[0_0_10px_#A41F13] hover:shadow-[0_0_20px_#A41F13]'
        : 'bg-transparent border border-[#A41F13] text-[#A41F13] shadow-[0_0_10px_#A41F13] hover:shadow-[0_0_20px_#A41F13]'
      }
      ${className}
    `}
  >
    {children}
  </button>
);

export default NeonButton;
