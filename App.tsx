
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Zap, 
  Target, 
  TrendingUp, 
  Cpu, 
  Brain, 
  Lock, 
  Instagram, 
  Star,
  Users,
  ShieldCheck
} from 'lucide-react';
import { HypnoticBackground } from './components/HypnoticBackground';
import { Hero } from './components/Hero';
import { ContentSections } from './components/ContentSections';
import { StickyCTA } from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-red-600 selection:text-white">
      <HypnoticBackground />
      
      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <ContentSections />
      </main>

      <StickyCTA />
      
      <footer id="footer-cta" className="relative z-10 py-12 px-6 bg-black border-t border-red-900/30 text-center">
        <p className="text-neutral-500 text-sm">
          © 2026 Scarlet Hypnosis. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
