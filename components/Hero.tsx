import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-2xl px-6 pt-12 pb-24 text-center flex flex-col items-center">
      
      {/* 1. HERO SHOT (TOPO) */}
      <div className="relative w-full max-w-sm mb-8 z-10">
        <div className="hero-mask overflow-hidden rounded-b-3xl shadow-[0_0_50px_rgba(220,38,38,0.15)]">
          <img 
            src="https://i.ibb.co/SD4gMVXY/IMG-8474.jpg" 
            alt="Expert Scarlet Hypnosis" 
            className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
            }}
          />
        </div>
        {/* Vignette para integrar com o fundo */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
      </div>

      {/* Badge "Lançamento High Ticket" */}
      <div className="inline-block px-4 py-1 mb-6 border border-red-900/50 rounded-full bg-red-950/20 backdrop-blur-sm">
        <span className="text-red-500 font-bold tracking-[0.2em] text-[10px] uppercase">
          Lançamento High Ticket 2026
        </span>
      </div>

      {/* 2. HEADLINE (A PROMESSA) */}
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight text-glow-red">
        O modelo de lançamento para vender <span className="text-amber-500">High Ticket</span> mais lucrativo e verdadeiramente sustentável do digital em 2026.
      </h1>

      {/* 3. SUBHEADLINE (RETENÇÃO) */}
      <h2 className="text-lg md:text-xl text-neutral-200 font-medium mb-4 max-w-lg mx-auto leading-relaxed">
        O plano à prova de mercado caro e desconfiado, com o melhor dos 3 mundos.
      </h2>

      {/* 4. O "COMO" (CONEXÃO - NOVO TRECHO) */}
      <p className="text-sm md:text-base text-neutral-400 font-light mb-8 max-w-lg mx-auto leading-relaxed italic border-l-2 border-red-900/30 pl-4">
        "...sem equipe dedicada, com rotina real de 4h por dia e usando seu próprio desenvolvimento pessoal pra sair do 'seu nicho saturado'."
      </p>

      {/* 5. METADADOS (REPOSICIONADOS E DISCRETOS) */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 opacity-80">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800/50">
          <Calendar size={12} className="text-red-500" />
          <span className="text-[10px] md:text-xs text-neutral-500 font-medium uppercase tracking-wide">Sábado, 10 Jan</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800/50">
          <Clock size={12} className="text-red-500" />
          <span className="text-[10px] md:text-xs text-neutral-500 font-medium uppercase tracking-wide">14h às 16h</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800/50">
          <MapPin size={12} className="text-red-500" />
          <span className="text-[10px] md:text-xs text-neutral-500 font-medium uppercase tracking-wide">Online (Zoom)</span>
        </div>
      </div>

      {/* 6. PÍLULAS DE BENEFÍCIOS (LÓGICA) */}
      <div className="flex flex-col gap-3 w-full max-w-md mx-auto mb-10">
        {[
          "Volume de leads do lançamento gratuito",
          "ROI exponencial do lançamento pago",
          "Sistema orgânico contínuo (COSMOS)"
        ].map((item, idx) => (
          <div 
            key={idx}
            className="pill-gradient border border-red-900/30 rounded-xl py-4 px-5 flex items-center gap-4 text-left backdrop-blur-md shadow-lg shadow-red-950/10 group hover:border-red-500/30 transition-colors"
          >
            <div className="w-5 h-5 rounded-full bg-red-600/20 border border-red-500/50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
              <CheckCircle2 size={12} className="text-red-500 group-hover:text-white" />
            </div>
            <span className="text-sm font-medium text-neutral-200 group-hover:text-white">{item}</span>
          </div>
        ))}
      </div>

      {/* 7. CTA PRINCIPAL (AÇÃO) */}
      <button 
        onClick={() => document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full max-w-md group relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-5 px-8 rounded-full shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
      >
        <span className="relative z-10 text-sm md:text-base tracking-widest uppercase">
          Garantir Minha Vaga Gratuita
        </span>
        <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
        
        {/* Shine effect */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700"></div>
      </button>

      <p className="mt-4 text-xs text-neutral-600 max-w-xs mx-auto">
        *Evento 100% online e gratuito. Vagas limitadas no Zoom.
      </p>

    </section>
  );
};