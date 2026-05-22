import ScrollReveal from '../../components/ScrollReveal';
import { 
  SpatialDesignModel3D, 
  MaterialCurationModel3D, 
  LightArchitectureModel3D, 
  BespokeFurnitureModel3D, 
  FullRenovationModel3D, 
  VirtualStagingModel3D 
} from '../../components/ServiceModels';

export const metadata = {
  title: 'Services | LUMIÈRE INTÉRIEUR',
  description: 'What we levitate: Spatial design, light architecture, and material curation.',
};

export default function ServicesPage() {
  const services = [
    { 
      name: "Spatial Design", 
      desc: "Redefining layouts using suspended structural planes and organic divisions.", 
      heightOffset: "translate-y-4 hover:translate-y-[-16px]",
      render3D: () => <SpatialDesignModel3D />
    },
    { 
      name: "Material Curation", 
      desc: "Sourcing premium marbles, floating textured textiles, and soft blush raw metals.", 
      heightOffset: "translate-y-12 hover:translate-y-0",
      render3D: () => <MaterialCurationModel3D />
    },
    { 
      name: "Light Architecture", 
      desc: "Illuminating spaces with vaporous indirect lighting that makes volumes float.", 
      heightOffset: "translate-y-0 hover:translate-y-[-20px]",
      render3D: () => <LightArchitectureModel3D />
    },
    { 
      name: "Bespoke Furniture", 
      desc: "Custom designed floating cabinetry, suspended mirrors, and levitating seating.", 
      heightOffset: "translate-y-8 hover:translate-y-[-12px]",
      render3D: () => <BespokeFurnitureModel3D />
    },
    { 
      name: "Full Renovation", 
      desc: "Complete luxury overhaul, changing weight ratios of rooms for airy layouts.", 
      heightOffset: "translate-y-16 hover:translate-y-[4px]",
      render3D: () => <FullRenovationModel3D />
    },
    { 
      name: "Virtual Staging", 
      desc: "Photorealistic 3D environment drafting that plays with scale and lighting.", 
      heightOffset: "translate-y-4 hover:translate-y-[-16px]",
      render3D: () => <VirtualStagingModel3D />
    }
  ];

  return (
    <div className="py-40 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-24">
        <span className="text-lg mb-3 block" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>What We Do</span>
        <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>What We Levitate</h1>
        <p className="text-sm font-light max-w-md mx-auto" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.7)' }}>
          Our service panels feature volumetric, rotating 3D architectural objects that drift and hover in zero gravity.
        </p>
        <div className="w-12 h-[1px] mx-auto mt-6" style={{ backgroundColor: 'rgba(225, 162, 170, 0.4)' }}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-8 pb-16">
        {services.map((svc, index) => (
          <ScrollReveal key={index} delay={index * 120} className="w-full">
            <div
              data-cursor="hover"
              className={`dark-glass transform transition-all duration-[600ms] p-8 ${svc.heightOffset} text-center flex flex-col justify-between`}
              style={{ minHeight: '350px', transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)' }}
            >
              <div>
                {/* Render Rotating 3D CSS Wireframe Shape */}
                <div className="h-24 flex items-center justify-center">
                  {svc.render3D()}
                </div>
                
                <h3 className="text-2xl mb-3" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>{svc.name}</h3>
              </div>
              <p className="text-sm font-light leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.8)' }}>
                {svc.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Curation Process */}
      <div className="py-32 border-t" style={{ borderColor: 'rgba(225, 162, 170, 0.2)' }}>
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>The Path to Suspension</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-12 relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#e1a2aa]/20 to-transparent"></div>
          
          {[
            { num: "I", title: "Conceptual Drift", desc: "Before altering a single physical element, we map the psychological weight of the space. We study how natural light shifts and how air currents move." },
            { num: "II", title: "Material Alchemy", desc: "Selecting textures that contradict their mass. Using heavy, porous stone that absorbs light to feel weightless, and using raw metals that reflect the sky." },
            { num: "III", title: "Volumetric Calibration", desc: "The final layer. We install the vaporous lighting systems and micro-adjust the floating cabinetry until the room achieves absolute antigravity." }
          ].map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 text-left ${idx % 2 === 0 ? 'md:pl-16' : 'md:text-right md:pr-16'}`}>
                  <h4 className="text-2xl mb-2" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>{step.title}</h4>
                  <p className="text-sm font-light leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.7)' }}>{step.desc}</p>
                </div>
                <div className="w-12 h-12 rounded-full border bg-[#0c090a] flex items-center justify-center z-10 shrink-0" style={{ borderColor: 'rgba(225, 162, 170, 0.5)' }}>
                  <span className="text-sm" style={{ fontFamily: '"Playfair Display", serif', color: '#e1a2aa' }}>{step.num}</span>
                </div>
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Client Manifestos */}
      <div className="py-32 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-24">
             <span className="text-lg mb-3 block" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>Auras Transformed</span>
             <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Client Manifestos</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { quote: "LUMIÈRE didn't just redesign our penthouse; they erased the ceiling. The space feels like it's perpetually ascending.", author: "E. Laurent, Paris" },
             { quote: "The way they use light to soften brutalist concrete is nothing short of alchemy. An absolute masterpiece of suspension.", author: "J. Mercer, London" },
           ].map((testimonial, idx) => (
             <ScrollReveal key={idx} delay={idx * 200}>
                <div className="dark-glass p-8 relative overflow-hidden group">
                   <div className="absolute top-4 left-4 text-6xl opacity-10" style={{ fontFamily: '"Playfair Display", serif', color: '#e1a2aa' }}>"</div>
                   <p className="text-lg italic font-light leading-relaxed relative z-10 mb-6" style={{ fontFamily: '"Dancing Script", cursive', color: '#fcdfd9' }}>
                     {testimonial.quote}
                   </p>
                   <span className="text-xs uppercase tracking-widest" style={{ fontFamily: '"DM Sans", sans-serif', color: '#e1a2aa' }}>— {testimonial.author}</span>
                </div>
             </ScrollReveal>
           ))}
        </div>
      </div>
    </div>
  );
}
