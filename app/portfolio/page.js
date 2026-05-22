import TiltCard from '../../components/TiltCard';

export const metadata = {
  title: 'Portfolio | LUMIÈRE INTÉRIEUR',
  description: 'Explore our gravity-defying interior spaces and visionary architecture.',
};

export default function PortfolioPage() {
  const items = [
    { title: "Ethereal Lounge", category: "Living Room", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800", type: "living" },
    { title: "Dreamy Sanctuary", category: "Bedroom", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800", type: "bedroom" },
    { title: "Culinary Ascension", category: "Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800", type: "kitchen" },
    { title: "Aura Dining Hall", category: "Dining Area", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800", type: "dining" },
    { title: "Vapor Bath Sanctuary", category: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800", type: "bath" },
    { title: "Levitating Study", category: "Office Studio", image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800", type: "study" }
  ];

  return (
    <div className="py-40 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-24">
        <span className="text-lg mb-3 block" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>The Gallery</span>
        <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Gravity-Defying Spaces</h1>
        <p className="text-sm font-light max-w-md mx-auto" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.7)' }}>
          Hover over the cards to watch the design transition from room photography into an interactive, rotating 3D architectural mockup.
        </p>
        <div className="w-12 h-[1px] mx-auto mt-6" style={{ backgroundColor: 'rgba(225, 162, 170, 0.4)' }}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {items.map((item, index) => (
          <TiltCard
            key={index}
            image={item.image}
            title={item.title}
            category={item.category}
            delay={index * 150}
            type={item.type}
          />
        ))}
      </div>

      {/* The Architecture of Light Section */}
      <div className="max-w-5xl mx-auto border-t pt-24" style={{ borderColor: 'rgba(225, 162, 170, 0.2)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ fontFamily: '"DM Sans", sans-serif', color: '#e1a2aa' }}>Design Philosophy</span>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>The Architecture of Light</h2>
            <p className="text-sm font-light leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.8)' }}>
              In our curation process, light is treated as a solid, structural material. We do not just illuminate a room; we use vaporous, indirect lighting to carve out volumes and erase the hard edges of physical walls.
            </p>
            <p className="text-sm font-light leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.8)' }}>
              By washing boundaries in gradients and projecting luminous architectural planes, heavy stone and brutalist concrete are forced to levitate. This is the secret to the antigravity aesthetic: treating photons as foundational bricks.
            </p>
            <div className="pt-4 flex gap-4">
               <div className="flex-1 border p-4 rounded-xl backdrop-blur-sm" style={{ borderColor: 'rgba(225, 162, 170, 0.2)', backgroundColor: 'rgba(5, 5, 5,0.5)' }}>
                 <span className="block text-2xl mb-1" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>01</span>
                 <span className="text-xs font-light" style={{ color: '#e1a2aa' }}>Volume Carving</span>
               </div>
               <div className="flex-1 border p-4 rounded-xl backdrop-blur-sm" style={{ borderColor: 'rgba(225, 162, 170, 0.2)', backgroundColor: 'rgba(5, 5, 5,0.5)' }}>
                 <span className="block text-2xl mb-1" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>02</span>
                 <span className="text-xs font-light" style={{ color: '#e1a2aa' }}>Edge Erasure</span>
               </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#e1a2aa]/20 to-transparent mix-blend-screen z-10 pointer-events-none" />
             <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" alt="Light Architecture" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
      </div>
    </div>
  );
}
