'use client';

import CSS3DBox from './CSS3DBox';

// 1. Spatial Design Model: 3D suspended room layout
export const SpatialDesignModel3D = () => (
  <div className="w-20 h-20 relative mx-auto mb-6" style={{ perspective: '300px' }}>
    <div className="w-full h-full animate-rotate-3d" style={{ transformStyle: 'preserve-3d' }}>
      {/* Base Floor Plane */}
      <div className="absolute inset-x-1 bottom-1 h-14 border" style={{ borderColor: 'rgba(225, 162, 170, 0.15)', transform: 'rotateX(90deg) translateZ(-20px)', background: 'rgba(225, 162, 170,0.06)' }} />
      {/* Sofa base */}
      <CSS3DBox w={28} h={6} d={12} x={8} y={32} z={3} color="rgba(225, 162, 170,0.3)" />
      {/* Coffee Table */}
      <CSS3DBox w={14} h={4} d={8} x={30} y={42} z={2} color="rgba(111, 89, 91,0.4)" />
    </div>
  </div>
);

// 2. Material Curation Model: Overlapping floating material samples
export const MaterialCurationModel3D = () => (
  <div className="w-20 h-20 relative mx-auto mb-6" style={{ perspective: '300px' }}>
    <div className="w-full h-full animate-rotate-3d" style={{ transformStyle: 'preserve-3d' }}>
      {/* Core marble block */}
      <CSS3DBox w={16} h={16} d={16} x={22} y={22} z={10} color="rgba(225, 162, 170,0.3)" />
      {/* Orbiting raw gold plates */}
      <CSS3DBox w={6} h={6} d={6} x={6} y={6} z={24} color="rgba(250, 199, 207,0.4)" />
      <CSS3DBox w={8} h={8} d={8} x={45} y={45} z={-10} color="rgba(111, 89, 91,0.5)" />
    </div>
  </div>
);

// 3. Light Architecture Model: Base projecting a luminous pyramid
export const LightArchitectureModel3D = () => (
  <div className="w-20 h-20 relative mx-auto mb-6" style={{ perspective: '300px' }}>
    <div className="w-full h-full animate-rotate-3d" style={{ transformStyle: 'preserve-3d' }}>
      {/* Base structure box */}
      <CSS3DBox w={12} h={12} d={12} x={24} y={8} z={0} color="rgba(111, 89, 91,0.4)" />
      {/* Light cone panels */}
      <div className="absolute inset-x-2 bottom-0 h-12 border" style={{ borderColor: 'rgba(225, 162, 170, 0.2)', transform: 'rotateY(0deg) translateZ(10px) rotateX(15deg)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'linear-gradient(to top, rgba(225, 162, 170,0.15), transparent)' }} />
      <div className="absolute inset-x-2 bottom-0 h-12 border" style={{ borderColor: 'rgba(225, 162, 170, 0.2)', transform: 'rotateY(90deg) translateZ(10px) rotateX(15deg)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'linear-gradient(to top, rgba(225, 162, 170,0.15), transparent)' }} />
      {/* Source node */}
      <div className="absolute w-3 h-3 rounded-full top-[22px] left-[28px] animate-pulse" style={{ backgroundColor: '#fac7cf' }} />
    </div>
  </div>
);

// 4. Bespoke Furniture Model: Levitating armchair
export const BespokeFurnitureModel3D = () => (
  <div className="w-20 h-20 relative mx-auto mb-6" style={{ perspective: '300px' }}>
    <div className="w-full h-full animate-rotate-3d" style={{ transformStyle: 'preserve-3d' }}>
      {/* Seat plane */}
      <CSS3DBox w={22} h={4} d={22} x={19} y={32} z={5} color="rgba(225, 162, 170,0.3)" />
      {/* Back cushion */}
      <CSS3DBox w={22} h={16} d={4} x={19} y={16} z={14} color="rgba(111, 89, 91,0.4)" />
      {/* Cabinet stand */}
      <CSS3DBox w={6} h={14} d={6} x={27} y={42} z={0} color="rgba(250, 199, 207,0.3)" />
    </div>
  </div>
);

// 5. Full Renovation Model: volumetric expanding house frame
export const FullRenovationModel3D = () => (
  <div className="w-20 h-20 relative mx-auto mb-6" style={{ perspective: '300px' }}>
    <div className="w-full h-full animate-rotate-3d" style={{ transformStyle: 'preserve-3d' }}>
      {/* House body */}
      <CSS3DBox w={26} h={16} d={26} x={17} y={28} z={0} color="rgba(225, 162, 170,0.2)" />
      {/* Roof slopes */}
      <div className="absolute inset-x-3 top-2 h-10 border" style={{ borderColor: 'rgba(225, 162, 170, 0.3)', transform: 'rotateY(0deg) translateZ(13px) rotateX(25deg)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'rgba(250, 199, 207,0.1)' }} />
      <div className="absolute inset-x-3 top-2 h-10 border" style={{ borderColor: 'rgba(225, 162, 170, 0.3)', transform: 'rotateY(90deg) translateZ(13px) rotateX(25deg)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'rgba(250, 199, 207,0.1)' }} />
    </div>
  </div>
);

// 6. Virtual Staging Model: Lens viewport with coordinates
export const VirtualStagingModel3D = () => (
  <div className="w-20 h-20 relative mx-auto mb-6" style={{ perspective: '300px' }}>
    <div className="w-full h-full animate-rotate-3d" style={{ transformStyle: 'preserve-3d' }}>
      {/* Ring grid */}
      <div className="absolute inset-2 border-2 border-dashed rounded-full" style={{ borderColor: 'rgba(225, 162, 170, 0.3)' }} />
      {/* Camera core */}
      <CSS3DBox w={12} h={12} d={12} x={24} y={24} z={4} color="rgba(225, 162, 170,0.3)" />
      {/* Camera frame backing */}
      <CSS3DBox w={32} h={18} d={6} x={14} y={21} z={-8} color="rgba(111, 89, 91,0.2)" />
    </div>
  </div>
);
