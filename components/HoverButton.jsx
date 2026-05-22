'use client';

const HoverButton = ({ children, onClick, className = "", style = {}, type = "button", ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      data-cursor="hover"
      className={`group relative overflow-hidden rounded-full border px-8 py-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${className}`}
      style={{
        borderColor: 'rgba(225, 162, 170, 0.05)',
        backgroundColor: 'rgba(5, 5, 5, 0.2)',
        ...style
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(225, 162, 170, 0.3)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(225, 162, 170, 0.05)'; }}
    >
      <div 
        className="absolute inset-0 translate-y-[100%] bg-[#e1a2aa] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0"
      ></div>
      <div className="relative flex items-center justify-center overflow-hidden h-5">
        <span 
          className="absolute text-xs tracking-[0.2em] uppercase transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-[150%]"
          style={{ fontFamily: '"DM Sans", sans-serif', color: '#fcdfd9' }}
        >
          {children}
        </span>
        <span 
          className="absolute translate-y-[150%] text-xs tracking-[0.2em] uppercase transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0"
          style={{ fontFamily: '"DM Sans", sans-serif', color: '#0c090a', fontWeight: 500 }}
        >
          {children}
        </span>
      </div>
    </button>
  );
};

export default HoverButton;
