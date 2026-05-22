'use client';

import { useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import FloatInput from '../../components/FloatInput';
import HoverButton from '../../components/HoverButton';
import Contact3DElement from '../../components/Contact3DElement';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Aura mappings and initial blueprinting typically require 4-6 weeks. Full spatial manifestation ranges from 6 to 18 months, depending on the scale and gravitational complexity of the project."
    },
    {
      question: "Do you take international commissions?",
      answer: "Yes. While our primary coordinates are in Paris, we suspend spaces globally for select clients. Virtual staging and material curation can be managed across any timezone."
    },
    {
      question: "What is the minimum budget for a full curation?",
      answer: "To ensure absolute creative freedom and the highest quality material sourcing, our full spatial transformations begin at €150,000, excluding structural renovations."
    }
  ];

  return (
    <div className="py-40 px-4 max-w-5xl mx-auto">
      
      {/* Hero Header */}
      <div className="text-center mb-24">
        <span className="text-lg mb-3 block" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>Establish Connection</span>
        <h1 className="text-5xl md:text-7xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Transmit Your Aura</h1>
        <p className="text-sm md:text-base font-light max-w-lg mx-auto" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.7)' }}>
          Ready to suspend gravity in your space? Send us your coordinates, and let us map a luminous retreat tailored entirely to you.
        </p>
      </div>

      {/* 3D Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
        <ScrollReveal>
          <Contact3DElement />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="dark-glass p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#e1a2aa]/20 relative overflow-hidden group">
            {/* GenZ Glow effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-[#e1a2aa]/5 via-transparent to-[#fac7cf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-2xl" />

            {submitted ? (
              <div className="text-center py-16 space-y-6 relative z-10">
                <span className="text-5xl animate-bounce block" style={{ color: '#e1a2aa' }}>✦</span>
                <h3 className="text-3xl" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Signal Received</h3>
                <p className="text-sm font-light" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.8)' }}>
                  A senior spatial curator will align with your coordinates and reach out within 24 hours to begin the mapping phase.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10">
                <h3 className="text-2xl mb-8" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Initialize Project</h3>
                <FloatInput label="Designation (Name)" id="contact-name" />
                <FloatInput label="Frequency (Email Address)" id="contact-email" type="email" />
                <FloatInput label="Spatial Volume (e.g., Living, Studio)" id="contact-space" />
                <FloatInput label="Desired Aesthetic Aura" id="contact-aura" />
                
                <div className="mt-10 flex justify-end">
                  <HoverButton type="submit">
                    Commence Uplink
                  </HoverButton>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* The Process Timeline */}
      <div className="mb-32">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>The Manifestation Sequence</h2>
            <div className="w-12 h-[1px] mx-auto mt-4" style={{ backgroundColor: 'rgba(225, 162, 170, 0.4)' }}></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#e1a2aa]/30 to-transparent -z-10" />

          {[
            { step: "01", title: "Aura Mapping", desc: "We analyze your current spatial coordinates and personal frequency to establish the foundational aesthetic." },
            { step: "02", title: "Blueprint Simulation", desc: "Creating a fully interactive 3D manifestation of the proposed space, testing light, shadow, and material suspension." },
            { step: "03", title: "Physical Ascent", desc: "Our curators and architects physically transform the space, defying gravity with bespoke installations." }
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 200}>
              <div className="flex flex-col items-center text-center p-6 group cursor-default">
                <div className="w-24 h-24 rounded-full border border-[#e1a2aa]/20 flex items-center justify-center bg-[#0c090a] mb-6 group-hover:border-[#e1a2aa] group-hover:shadow-[0_0_30px_rgba(225, 162, 170,0.2)] transition-all duration-500 relative">
                  <span className="text-2xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>{item.step}</span>
                  {/* Orbiting dot */}
                  <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-[#fac7cf] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-xl mb-3" style={{ fontFamily: '"Playfair Display", serif', color: '#e1a2aa' }}>{item.title}</h4>
                <p className="text-sm font-light leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.7)' }}>
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto mb-24">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Transmission Inquiries</h2>
            <div className="w-12 h-[1px] mx-auto mt-4" style={{ backgroundColor: 'rgba(225, 162, 170, 0.4)' }}></div>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div 
                className="border-b border-[#e1a2aa]/20 pb-4 cursor-pointer group"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center py-4">
                  <h4 className="text-lg group-hover:text-[#e1a2aa] transition-colors" style={{ fontFamily: '"Playfair Display", serif', color: activeFaq === index ? '#e1a2aa' : '#fcdfd9' }}>
                    {faq.question}
                  </h4>
                  <span className="text-2xl font-light transform transition-transform duration-300" style={{ color: '#e1a2aa', transform: activeFaq === index ? 'rotate(45deg)' : 'rotate(0)' }}>
                    +
                  </span>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: activeFaq === index ? '200px' : '0', opacity: activeFaq === index ? 1 : 0 }}
                >
                  <p className="text-sm font-light pb-4 leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.7)' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

    </div>
  );
}
