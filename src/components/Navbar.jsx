import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#292F36]/90 backdrop-blur-sm shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="text-3xl font-extrabold tracking-wider text-[#A41F13]">
          PORTFOLIO
        </a>

        <nav className="hidden md:flex gap-8 text-lg font-medium">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#FAF5F1] hover:text-[#A41F13] transition duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A41F13] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button className="btn btn-ghost md:hidden text-[#A41F13]" onClick={() => setIsDrawerOpen(true)}>
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#292F36] shadow-2xl transition-transform duration-300 transform z-[60] ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button className="absolute top-4 right-4 text-[#FAF5F1] hover:text-[#A41F13]" onClick={() => setIsDrawerOpen(false)}>
            <X size={24} />
          </button>

          <ul className="menu mt-16 p-4 w-full text-[#FAF5F1] space-y-4">
            {NAV_LINKS.map((item) => (
              <li key={item.name} onClick={() => setIsDrawerOpen(false)}>
                <a href={item.href} className="text-xl hover:text-[#A41F13] rounded-lg">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isDrawerOpen && <div className="fixed inset-0 bg-[#292F36]/70 z-50" onClick={() => setIsDrawerOpen(false)}></div>}
    </header>
  );
}
