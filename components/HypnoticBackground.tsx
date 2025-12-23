
import React from 'react';

export const HypnoticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none bg-[#050505] z-0">
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 blur-[150px] rounded-full"></div>
      
      {/* Animated Rings */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex items-center justify-center opacity-40">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`hypnotic-ring w-[100px] h-[100px]`}
            style={{ animationDelay: `${i * 1.5}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};
