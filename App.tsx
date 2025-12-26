import React, { useState } from 'react';
import { HypnoticBackground } from './components/HypnoticBackground';
import { Hero } from './components/Hero';
import { ContentSections } from './components/ContentSections';
import { StickyCTA } from './components/StickyCTA';
import { RegistrationModal } from './components/RegistrationModal'; // <--- Importe o Modal

const App: React.FC = () => {
  // Estado para controlar o modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <div className="relative min-h-screen selection:bg-red-600 selection:text-white">
      <HypnoticBackground />
      
      {/* Modal fica aqui no topo da hierarquia */}
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <main className="relative z-10 flex flex-col items-center">
        {/* Passamos a função de abrir para o Hero */}
        <Hero onOpenModal={handleOpenModal} />
        <ContentSections />
      </main>

      {/* Passamos a função de abrir para o StickyCTA */}
      <StickyCTA onOpenModal={handleOpenModal} />
      
      <footer id="footer-cta" className="relative z-10 py-12 px-6 bg-black border-t border-red-900/30 text-center">
        <p className="text-neutral-500 text-sm">
          © 2026 Scarlet Hypnosis. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;