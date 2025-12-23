
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full p-6 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="max-w-md mx-auto">
        <button 
          className="w-full group relative flex items-center justify-between bg-white text-black font-bold py-5 px-8 rounded-full shadow-[0_15px_30px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="relative z-10 text-sm md:text-base tracking-widest uppercase">
            Garantir Minha Vaga Gratuita
          </span>
          <div className="relative z-10 w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white group-hover:bg-red-600 transition-colors">
            <ChevronRight size={20} />
          </div>
          
          {/* Subtle reflection effect */}
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>
        </button>
      </div>
    </div>
  );
};
