'use client';

import CSS3DBox from './CSS3DBox';

const Mini3DRoom = ({ type, tilt }) => {
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"
      style={{ perspective: '800px', backgroundColor: 'rgba(5, 5, 5, 0.8)' }}
    >
      {/* Micro 3D Room Container */}
      <div 
        className="relative w-[180px] h-[180px] transition-transform duration-300 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `rotateX(${-18 + tilt.x}deg) rotateY(${38 + tilt.y}deg)`
        }}
      >
        {/* Grid Floor */}
        <div 
          className="absolute inset-x-2 bottom-2 h-[120px] border origin-bottom" 
          style={{ 
            borderColor: 'rgba(225, 162, 170, 0.2)',
            transform: 'rotateX(90deg) translateZ(-60px)', 
            background: 'radial-gradient(circle, rgba(225, 162, 170,0.12) 0%, transparent 100%)'
          }}
        >
          <div className="w-full h-full grid grid-cols-4 grid-rows-4 opacity-25">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="border" style={{ borderColor: 'rgba(225, 162, 170, 0.3)' }} />
            ))}
          </div>
        </div>

        {/* Back Wall panel line */}
        <div 
          className="absolute inset-x-2 top-2 h-[120px] border" 
          style={{ borderColor: 'rgba(225, 162, 170, 0.1)', transform: 'translateZ(-60px)' }}
        />

        {/* Render room specific physical furniture boxes */}
        {type === 'living' && (
          <>
            {/* Couch base */}
            <CSS3DBox w={65} h={10} d={24} x={25} y={80} z={5} color="rgba(225, 162, 170,0.2)" />
            {/* Couch back */}
            <CSS3DBox w={65} h={18} d={8} x={25} y={62} z={14} color="rgba(225, 162, 170,0.25)" />
            {/* Table */}
            <CSS3DBox w={30} h={8} d={16} x={42} y={105} z={4} color="rgba(111, 89, 91,0.3)" />
            {/* Lamp pole */}
            <CSS3DBox w={4} h={35} d={4} x={95} y={55} z={15} color="rgba(220,172,194,0.3)" />
            {/* Glowing light node */}
            <div className="absolute w-3 h-3 rounded-full bg-cloudyPeach/90 animate-ping" style={{ backgroundColor: 'rgba(250, 199, 207, 0.9)', transform: 'translate3d(96px, 35px, 20px)' }} />
          </>
        )}

        {type === 'bedroom' && (
          <>
            {/* Bed Mattress */}
            <CSS3DBox w={50} h={10} d={55} x={30} y={65} z={5} color="rgba(225, 162, 170,0.2)" />
            {/* Bed Headboard */}
            <CSS3DBox w={50} h={22} d={6} x={30} y={43} z={11} color="rgba(111, 89, 91,0.3)" />
            {/* Pillow 1 */}
            <CSS3DBox w={18} h={4} d={12} x={34} y={58} z={10} color="rgba(250, 199, 207,0.3)" />
            {/* Pillow 2 */}
            <CSS3DBox w={18} h={4} d={12} x={58} y={58} z={10} color="rgba(250, 199, 207,0.3)" />
            {/* Side Cabinet */}
            <CSS3DBox w={12} h={12} d={12} x={88} y={55} z={6} color="rgba(220,172,194,0.25)" />
          </>
        )}

        {type === 'kitchen' && (
          <>
            {/* Island counter unit */}
            <CSS3DBox w={50} h={20} d={18} x={35} y={80} z={10} color="rgba(225, 162, 170,0.2)" />
            {/* Bar Stool 1 */}
            <CSS3DBox w={8} h={14} d={8} x={42} y={105} z={7} color="rgba(111, 89, 91,0.3)" />
            {/* Bar Stool 2 */}
            <CSS3DBox w={8} h={14} d={8} x={62} y={105} z={7} color="rgba(111, 89, 91,0.3)" />
            {/* Back Cabinetry row */}
            <CSS3DBox w={80} h={25} d={10} x={15} y={40} z={12} color="rgba(220,172,194,0.15)" />
          </>
        )}

        {type === 'dining' && (
          <>
            {/* Table */}
            <CSS3DBox w={60} h={14} d={24} x={30} y={70} z={7} color="rgba(225, 162, 170,0.2)" />
            {/* Chair 1 */}
            <CSS3DBox w={10} h={10} d={10} x={35} y={56} z={5} color="rgba(111, 89, 91,0.3)" />
            {/* Chair 2 */}
            <CSS3DBox w={10} h={10} d={10} x={65} y={56} z={5} color="rgba(111, 89, 91,0.3)" />
            {/* Chair 3 */}
            <CSS3DBox w={10} h={10} d={10} x={35} y={98} z={5} color="rgba(111, 89, 91,0.3)" />
            {/* Chair 4 */}
            <CSS3DBox w={10} h={10} d={10} x={65} y={98} z={5} color="rgba(111, 89, 91,0.3)" />
          </>
        )}

        {type === 'bath' && (
          <>
            {/* Tub */}
            <CSS3DBox w={55} h={12} d={26} x={30} y={70} z={6} color="rgba(225, 162, 170,0.2)" />
            {/* Mirror */}
            <CSS3DBox w={22} h={30} d={2} x={46} y={35} z={20} color="rgba(250, 199, 207,0.3)" />
            {/* Vanity */}
            <CSS3DBox w={35} h={10} d={12} x={40} y={90} z={5} color="rgba(111, 89, 91,0.25)" />
          </>
        )}

        {type === 'study' && (
          <>
            {/* Desk desk */}
            <CSS3DBox w={50} h={14} d={20} x={30} y={75} z={7} color="rgba(225, 162, 170,0.2)" />
            {/* Bookcase */}
            <CSS3DBox w={15} h={35} d={12} x={88} y={45} z={18} color="rgba(111, 89, 91,0.3)" />
            {/* Armchair */}
            <CSS3DBox w={12} h={10} d={12} x={49} y={98} z={5} color="rgba(220,172,194,0.25)" />
          </>
        )}
      </div>
    </div>
  );
};

export default Mini3DRoom;
