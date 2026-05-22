const CSS3DBox = ({ w, h, d, x, y, z, rx=0, ry=0, rz=0, color='rgba(225, 162, 170,0.14)', borderColor='#e1a2aa' }) => {
  const halfW = w / 2;
  const halfH = h / 2;
  const halfD = d / 2;
  
  return (
    <div 
      className="absolute"
      style={{
        width: `${w}px`,
        height: `${h}px`,
        left: `${x}px`,
        top: `${y}px`,
        transformStyle: 'preserve-3d',
        transform: `translate3d(0,0,${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`
      }}
    >
      {/* Front Face */}
      <div className="absolute inset-0" style={{ borderColor, borderWidth: '1px', borderStyle: 'solid', backgroundColor: color, transform: `translateZ(${halfD}px)` }} />
      
      {/* Back Face */}
      <div className="absolute inset-0" style={{ borderColor, borderWidth: '1px', borderStyle: 'solid', backgroundColor: color, transform: `rotateY(180deg) translateZ(${halfD}px)` }} />
      
      {/* Left Face */}
      <div className="absolute top-0 bottom-0" style={{ borderColor, borderWidth: '1px', borderStyle: 'solid', backgroundColor: color, left: `${halfW - halfD}px`, width: `${d}px`, transform: `rotateY(-90deg) translateZ(${halfW}px)` }} />
      
      {/* Right Face */}
      <div className="absolute top-0 bottom-0" style={{ borderColor, borderWidth: '1px', borderStyle: 'solid', backgroundColor: color, left: `${halfW - halfD}px`, width: `${d}px`, transform: `rotateY(90deg) translateZ(${halfW}px)` }} />
      
      {/* Top Face */}
      <div className="absolute left-0 right-0" style={{ borderColor, borderWidth: '1px', borderStyle: 'solid', backgroundColor: color, top: `${halfH - halfD}px`, height: `${d}px`, transform: `rotateX(90deg) translateZ(${halfH}px)` }} />
      
      {/* Bottom Face */}
      <div className="absolute left-0 right-0" style={{ borderColor, borderWidth: '1px', borderStyle: 'solid', backgroundColor: color, top: `${halfH - halfD}px`, height: `${d}px`, transform: `rotateX(-90deg) translateZ(${halfH}px)` }} />
    </div>
  );
};

export default CSS3DBox;
