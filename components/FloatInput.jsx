'use client';

import { useState } from 'react';

const FloatInput = ({ label, id, type = "text", required = true }) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full mb-8">
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        data-cursor="hover"
        className="w-full bg-transparent border-b text-base py-3 px-1 outline-none transition-colors duration-300"
        style={{ 
          borderColor: focused ? '#e1a2aa' : 'rgba(252, 223, 217, 0.2)',
          color: '#fcdfd9',
          fontFamily: '"DM Sans", sans-serif'
        }}
      />
      <label
        htmlFor={id}
        className={`absolute left-1 pointer-events-none transition-all duration-[400ms] ${
          focused || value
            ? '-translate-y-6 text-xs tracking-widest font-semibold scale-90'
            : 'translate-y-3 text-base font-light'
        }`}
        style={{ 
          color: focused || value ? '#e1a2aa' : 'rgba(252, 223, 217, 0.5)',
          transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)'
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatInput;
