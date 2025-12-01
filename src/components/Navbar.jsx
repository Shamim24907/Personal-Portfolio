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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#292F36] shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-3xl font-extrabold tracking-wider text-[#A41F13]">
          PORTFOLIO
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 text-lg font-medium">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#FAF5F1] hover:text-[#A41F13] transition duration-300 transform hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A41F13] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile/Tablet Menu Button */}
        <button className="lg:hidden text-[#FAF5F1]" onClick={() => setIsDrawerOpen(true)}>
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile/Tablet Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#A41F13] shadow-2xl transition-transform duration-300 transform z-60 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="p-6">
          <button
            className="absolute top-4 right-4 text-[#FAF5F1] hover:text-[#292F36] transition-colors"
            onClick={() => setIsDrawerOpen(false)}
          >
            <X size={24} />
          </button>

          <ul className="mt-16 space-y-4">
            {NAV_LINKS.map((item) => (
              <li key={item.name}>
<a
  href={item.href}
  onClick={() => setIsDrawerOpen(false)}
  className="block py-4 px-6 rounded-lg bg-[#292F36] text-[#FAF5F1] font-semibold text-xl text-center
             hover:bg-[#FAF5F1] hover:text-[#A41F13] hover:scale-105 transition-all duration-300 shadow-md"
>
  {item.name}
</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-[#292F36]/70 z-50 lg:hidden"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </header>
  );
}
