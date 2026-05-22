import ScrollReveal from '../../components/ScrollReveal';

export const metadata = {
  title: 'About | LUMIÈRE INTÉRIEUR',
  description: 'The studio behind the float. Who we are.',
};

export default function AboutPage() {
  return (
    <div className="py-40 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-24">
        <span className="text-lg mb-3 block" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>Our Origin</span>
        <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>The Studio Behind the Float</h1>
        <div className="w-12 h-[1px] mx-auto mt-6" style={{ backgroundColor: 'rgba(225, 162, 170, 0.4)' }}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Orbital About Component */}
        <div className="flex justify-center items-center">
          <ScrollReveal>
            <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              
              {/* Outer Orbit Path Ring */}
              <div className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border pointer-events-none" style={{ borderColor: 'rgba(225, 162, 170, 0.1)' }}></div>
              
              {/* Center Founder Image */}
              <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden z-20 border-2 shadow-2xl relative" style={{ borderColor: 'rgba(225, 162, 170, 0.4)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800" 
                  alt="Studio Founder portrait" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 mix-blend-multiply opacity-25" style={{ backgroundColor: '#e1a2aa' }} />
              </div>

              {/* Stat Bubble 1 */}
              <div className="absolute w-full h-full animate-orbit" style={{ animationDuration: '15s', animationDelay: '0s' }}>
                <div 
                  data-cursor="hover"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[85px] h-[85px] md:w-[95px] md:h-[95px] rounded-full backdrop-blur-md border shadow-lg flex flex-col items-center justify-center text-center animate-counter-orbit pulse-glow-hover"
                  style={{ animationDuration: '15s', animationDelay: '0s', backgroundColor: 'rgba(5, 5, 5, 0.4)', borderColor: 'rgba(225, 162, 170, 0.3)' }}
                >
                  <span className="text-lg font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>15</span>
                  <span className="text-[10px]" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>Years Exp</span>
                </div>
              </div>

              {/* Stat Bubble 2 */}
              <div className="absolute w-full h-full animate-orbit" style={{ animationDuration: '15s', animationDelay: '-5s' }}>
                <div 
                  data-cursor="hover"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[85px] h-[85px] md:w-[95px] md:h-[95px] rounded-full backdrop-blur-md border shadow-lg flex flex-col items-center justify-center text-center animate-counter-orbit pulse-glow-hover"
                  style={{ animationDuration: '15s', animationDelay: '-5s', backgroundColor: 'rgba(5, 5, 5, 0.4)', borderColor: 'rgba(225, 162, 170, 0.3)' }}
                >
                  <span className="text-lg font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>200+</span>
                  <span className="text-[10px]" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>Spaces</span>
                </div>
              </div>

              {/* Stat Bubble 3 */}
              <div className="absolute w-full h-full animate-orbit" style={{ animationDuration: '15s', animationDelay: '-10s' }}>
                <div 
                  data-cursor="hover"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[85px] h-[85px] md:w-[95px] md:h-[95px] rounded-full backdrop-blur-md border shadow-lg flex flex-col items-center justify-center text-center animate-counter-orbit pulse-glow-hover"
                  style={{ animationDuration: '15s', animationDelay: '-10s', backgroundColor: 'rgba(5, 5, 5, 0.4)', borderColor: 'rgba(225, 162, 170, 0.3)' }}
                >
                  <span className="text-lg font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>12</span>
                  <span className="text-[10px]" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>Awards</span>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>

        {/* Description Text */}
        <div className="space-y-6">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ fontFamily: '"DM Sans", sans-serif', color: '#e1a2aa' }}>Who We Are</span>
            <h2 className="text-3xl" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>We Float Above Conventions</h2>
            <p className="text-sm md:text-base font-light leading-relaxed mt-4" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.85)' }}>
              Founded in 2011 by director Madeleine Céleste, LUMIÈRE INTÉRIEUR is a collective of visionary designers, material architects, and spatial curators. Based globally, we craft environments that elevate mood and sense of gravity.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mt-4" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.8)' }}>
              Every material we place, every light pocket we carve, is calibrated to inspire feeling of flight and release. We invite our clients to let go of gravity and live in the luxury of suspension.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="p-6 rounded-[20px] border flex gap-4 items-center" style={{ backgroundColor: 'rgba(5, 5, 5, 0.3)', borderColor: 'rgba(225, 162, 170, 0.2)' }}>
              <div className="text-2xl" style={{ color: '#e1a2aa' }}>“</div>
              <p className="text-lg italic leading-snug" style={{ fontFamily: '"Dancing Script", cursive', color: '#fcdfd9' }}>
                LUMIÈRE INTÉRIEUR brought an ethereal lightness to our home we never thought possible. A masterclass in suspension.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* The Collective */}
      <div className="py-32 max-w-6xl mx-auto border-t mt-16" style={{ borderColor: 'rgba(225, 162, 170, 0.2)' }}>
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>The Collective</h2>
            <p className="text-sm font-light max-w-md mx-auto" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.7)' }}>
              Our core team of levitation engineers, light architects, and material sourcers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Madeleine Céleste", role: "Founder & Lead Curator", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800" },
            { name: "Julian Vance", role: "Light Architect", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800" },
            { name: "Elara Thorne", role: "Material Alchemist", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800" }
          ].map((member, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="group relative overflow-hidden rounded-[20px] h-[350px]">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c090a] via-[#0c090a]/40 to-transparent opacity-80" />
                <div className="absolute inset-0 mix-blend-multiply opacity-20" style={{ backgroundColor: '#e1a2aa' }} />
                
                <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500">
                  <h4 className="text-2xl mb-1" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>{member.name}</h4>
                  <span className="text-xs uppercase tracking-widest block" style={{ fontFamily: '"DM Sans", sans-serif', color: '#e1a2aa' }}>{member.role}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Studio Timeline */}
      <div className="py-32 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Epochs of Flight</h2>
          </div>
        </ScrollReveal>

        <div className="space-y-12 border-l-2 pl-8 relative" style={{ borderColor: 'rgba(225, 162, 170, 0.2)' }}>
          {[
            { year: "2011", title: "The Initial Ascent", desc: "Studio founded in a small Parisian loft, focused on removing load-bearing walls visually." },
            { year: "2016", title: "Gravity-Defying Grant", desc: "Awarded international recognition for our 'Suspended Living' conceptual gallery." },
            { year: "2022", title: "The Material Alchemy Era", desc: "Began synthesizing our own ultra-lightweight brutalist materials for high-end residential clients." },
            { year: "2026", title: "Global Levitation", desc: "Expanding our aura-mapping process to global clients through advanced virtual staging and physical curation." }
          ].map((event, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#0c090a] border border-[#e1a2aa] group-hover:bg-[#e1a2aa] transition-colors duration-300" />
                <span className="text-sm block mb-1" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>{event.year}</span>
                <h4 className="text-2xl mb-2" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>{event.title}</h4>
                <p className="text-sm font-light leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.7)' }}>{event.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

    </div>
  );
}
