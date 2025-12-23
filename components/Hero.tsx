
import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-2xl px-6 pt-12 pb-24 text-center">
      {/* Hero Shot */}
      <div className="relative mx-auto w-full max-w-sm mb-8">
        <div className="hero-mask overflow-hidden rounded-b-3xl">
          <img 
            src="https://i.ibb.co/SD4gMVXY/IMG-8474.jpg" 
            alt="Expert Scarlet Hypnosis" 
            className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            onError={(e) => {
              // Fallback if the direct link fails
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
            }}
          />
        </div>
        {/* Shadow Overlay for blend */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
      </div>

      {/* Brand/Label */}
      <div className="inline-block px-4 py-1 mb-6 border border-red-900/50 rounded-full bg-red-950/20">
        <span className="text-red-500 font-bold tracking-[0.2em] text-[10px] uppercase">
          Lançamento High Ticket
        </span>
      </div>

      <p className="text-lg md:text-xl text-neutral-300 font-light mb-8 max-w-lg mx-auto leading-relaxed italic">
        "O modelo de lançamento para vender high ticket mais lucrativo e verdadeiramente sustentável do digital em 2026."
      </p>

      {/* Metadata Badges */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
          <Calendar size={14} className="text-red-500" />
          <span className="text-xs text-neutral-400 font-medium">Sábado, 10 de Jan</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
          <Clock size={14} className="text-red-500" />
          <span className="text-xs text-neutral-400 font-medium">14h às 16h (Brasília)</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
          <MapPin size={14} className="text-red-500" />
          <span className="text-xs text-neutral-400 font-medium">Online no Zoom</span>
        </div>
      </div>

      {/* Benefit Pills */}
      <div className="flex flex-col gap-3 w-full max-w-md mx-auto mb-12">
        {[
          "Volume de leads do lançamento gratuito",
          "ROI exponencial do lançamento pago",
          "Sistema orgânico contínuo (COSMOS)"
        ].map((item, idx) => (
          <div 
            key={idx}
            className="pill-gradient border border-red-900/30 rounded-full py-4 px-6 flex items-center gap-4 text-left backdrop-blur-md shadow-lg shadow-red-950/20"
          >
            <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={14} className="text-white" />
            </div>
            <span className="text-sm font-medium text-neutral-100">{item}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed max-w-lg mx-auto">
        Aula estratégica gratuita para experts, mentores e prestadores de serviço que desejam masterizar seus lançamentos faturando mais com o mesmo investimento.
      </p>
    </section>
  );
};
