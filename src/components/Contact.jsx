import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import GlassCard from "./shared/GlassCard";
import NeonButton from "./shared/NeonButton";

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto">
      <h2 className="section-title">Get <span>In Touch</span></h2>

      <div className="grid md:grid-cols-2 gap-10">
        <GlassCard className="space-y-8">
          <h3 className="text-3xl font-bold text-[#A41F13]">Contact Details</h3>
          <p className="text-[#FAF5F1]/80">
            Ready to start a project? Send me a message or find me on social media.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail size={24} className="text-[#A41F13]" />
              <p className="text-[#FAF5F1] text-lg">shamim.dev@example.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={24} className="text-[#A41F13]" />
              <p className="text-[#FAF5F1] text-lg">+880 1234 567 890</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin size={24} className="text-[#A41F13]" />
              <p className="text-[#FAF5F1] text-lg">Dhaka, Bangladesh</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <form className="space-y-4">
            <h3 className="text-3xl font-bold text-[#A41F13] mb-4">Send Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-[#292F36]/70 border-[#A41F13]/40 text-[#FAF5F1] shadow-inner"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-[#292F36]/70 border-[#A41F13]/40 text-[#FAF5F1] shadow-inner"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="textarea textarea-bordered w-full bg-[#292F36]/70 border-[#A41F13]/40 text-[#FAF5F1] shadow-inner"
              required
            ></textarea>
            <div className="pt-2">
              <NeonButton primary={false} className="w-full">
                Send Message
              </NeonButton>
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
