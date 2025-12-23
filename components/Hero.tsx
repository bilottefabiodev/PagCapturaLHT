import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-8 md:py-24 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20">
      
      {/* LADO ESQUERDO (Texto) */}
      <div className="flex-1 text-center lg:text-left z-10 space-y-6 animate-fade-in-up">
        
        {/* Barra de Evento */}
        <div className="inline-flex flex-wrap justify-center lg:justify-start items-center gap-3 p-1.5 rounded-full border border-red-900/40 bg-red-950/20 backdrop-blur-md">
            <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest animate-pulse">
              Ao Vivo
            </span>
            <div className="flex items-center gap-2 px-2">
              <Calendar size={12} className="text-red-400" />
              <span className="text-xs text-neutral-300 font-medium">10 Jan</span>
            </div>
            <div className="w-px h-3 bg-red-900/50"></div>
            <div className="flex items-center gap-2 px-2">
              <Clock size={12} className="text-red-400" />
              <span className="text-xs text-neutral-300 font-medium">14h - 16h</span>
            </div>
        </div>

        {/* Título Principal */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-[1.2] text-glow-red">
            O modelo de lançamento para vender <span className="text-amber-500">High Ticket</span> mais lucrativo e verdadeiramente sustentável do digital em 2026.
          </h1>
          
          <h2 className="text-lg md:text-xl text-neutral-200 font-medium leading-relaxed">
            O plano à prova de mercado caro e desconfiado, com o melhor dos 3 mundos:
          </h2>
        </div>

        {/* Lista de Benefícios */}
        <ul className="space-y-3 max-w-md mx-auto lg:mx-0 text-left">
            {[
              "Volume de leads do lançamento gratuito",
              "ROI exponencial do lançamento pago",
              "Sistema orgânico contínuo (COSMOS)"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm md:text-base p-2 hover:bg-white/5 rounded-lg transition-colors">
                <CheckCircle2 size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
        </ul>

        {/* Fechamento + CTA */}
        <div className="pt-2 space-y-6">
           <p className="text-neutral-500 text-xs md:text-sm italic border-l-2 border-red-900/30 pl-4 text-left max-w-md mx-auto lg:mx-0">
             ...sem equipe dedicada, com rotina real de 4h por dia e usando seu próprio desenvolvimento pessoal para sair do nicho saturado.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <button 
               onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
               className="group relative flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto"
             >
               <span>Garantir Vaga Gratuita</span>
               <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-red-600" />
             </button>
           </div>
        </div>
      </div>

      {/* LADO DIREITO (Imagem) */}
      <div className="flex-1 relative w-full lg:max-w-none mx-auto">
        
        {/* Glow de Fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/20 blur-[80px] rounded-full -z-10"></div>
        
        {/* Moldura da Imagem (Horizontal 16:9) */}
        <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-red-900/20 bg-neutral-900 group">
            
            <img 
              src="https://i.ibb.co/SD4gMVXY/IMG-8474.jpg" 
              alt="Expert Scarlet Hypnosis" 
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
              }}
            />

            {/* Gradiente Overlay (Base) */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

            {/* CARD FLUTUANTE (Compacto e Baixo) */}
            <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-[1.02]">
                <div className="flex items-center justify-between">
                    {/* Texto Simplificado e Fonte Ajustada */}
                    <p className="text-sm font-bold text-white pl-1 tracking-wide shadow-black drop-shadow-md">
                        Lançamento High Ticket
                    </p>
                    <div className="h-7 w-7 rounded-full bg-red-600 flex items-center justify-center animate-pulse shadow-lg shadow-red-900/50">
                        <CheckCircle2 size={14} className="text-white" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};