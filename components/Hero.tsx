import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
// Mantenha seu import da imagem aqui
import expertPhoto from '@/assets/images/foto-hd.jpg'; 

export const Hero: React.FC = () => {
  return (
    // ALTERAÇÃO 1: px-0 no mobile (para a foto colar na borda), md:px-6 no desktop
    <section className="relative w-full max-w-7xl mx-auto px-0 md:px-6 py-0 md:py-24 flex flex-col items-center gap-8 lg:gap-12">
      
      {/* 1. IMAGEM (Topo) */}
      <div className="relative w-full max-w-2xl lg:max-w-3xl mx-auto">
        {/* Glow de Fundo (Ajustado) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-red-600/10 blur-[100px] rounded-full -z-10"></div>
        
        {/* ALTERAÇÃO 2: rounded-none no mobile (borda reta), rounded-[2.5rem] no desktop */}
        <div className="relative aspect-video w-full overflow-hidden rounded-none md:rounded-[2.5rem] border-y md:border border-white/5 shadow-2xl bg-neutral-900 group">
            <img 
              src={expertPhoto}
              alt="Expert Scarlet Hypnosis" 
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Wrapper de Conteúdo com Padding no Mobile (já que tiramos da section) */}
      <div className="px-6 md:px-0 w-full flex flex-col items-center gap-8">

        {/* 2. BARRA DE METADADOS */}
        <div className="w-full max-w-sm mx-auto flex flex-col items-center animate-fade-in text-center -mt-12 md:mt-0 relative z-20">
            <div className="px-6 py-3 rounded-2xl bg-black/80 md:bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex flex-col items-center gap-2 shadow-xl shadow-black/20">
                <span className="text-xs md:text-sm font-bold text-neutral-100 tracking-[0.2em] uppercase">
                  Lançamento High Ticket
                </span>
                <div className="flex items-center gap-3 text-[10px] md:text-xs font-medium text-neutral-400 uppercase tracking-widest">
                    <span className="text-red-500 font-black">Ao Vivo</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-red-900/60" />
                      <span>10 Jan</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-red-900/60" />
                      <span>14h - 16h</span>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. CONTEÚDO */}
        <div className="w-full max-w-4xl text-center z-10 space-y-8 animate-fade-in-up pb-12">
          
          <div className="space-y-6">
            <h1 className="text-3xl md:text-6xl font-serif font-bold text-white leading-[1.2] text-glow-red tracking-tight max-w-3xl mx-auto">
              O modelo de lançamento para vender <span className="text-amber-500">High Ticket</span> mais lucrativo e verdadeiramente sustentável do digital em 2026.
            </h1>
            
            <h2 className="text-lg md:text-xl text-neutral-300 font-medium leading-relaxed max-w-2xl mx-auto">
              O plano à prova de mercado caro e desconfiado, com o melhor dos 3 mundos:
            </h2>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8">
              {[
                "Volume de leads gratuito",
                "ROI exponencial do pago",
                "Sistema orgânico (COSMOS)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-neutral-300 text-sm md:text-base px-4 py-2 bg-white/[0.02] border border-white/[0.05] rounded-full justify-center">
                  <CheckCircle2 size={16} className="text-red-600 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
          </div>

          <div className="pt-4 flex flex-col items-center gap-6">
              <button 
                onClick={() => window.scrollTo({ top: 1200, behavior: 'smooth' })}
                className="group relative flex items-center justify-center gap-4 bg-white text-black font-black py-5 px-10 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:scale-[1.03] active:scale-95 transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                <span className="uppercase tracking-widest text-sm md:text-base">Garantir Vaga Gratuita</span>
                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white group-hover:bg-red-600 transition-all duration-300">
                    <ChevronRight size={18} />
                </div>
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-red-100/30 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>
              </button>

              <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                ...SEM EQUIPE DEDICADA, COM ROTINA REAL DE 4H POR DIA.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};