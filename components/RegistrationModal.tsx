import React, { useState, useEffect } from 'react';
import { X, ChevronRight, CheckCircle2, Lock, Loader2 } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ⚠️ COLOQUE AQUI O LINK DO SEU GRUPO DE AVISOS
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/IStPwK6CVTlKn1W9fbJHgw';

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    profile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validação: Só permite clicar se tudo estiver preenchido
  const isValid = formData.email.length > 5 && 
                  formData.phone.length > 10 && 
                  formData.profile !== '';

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return; // Trava extra de segurança

    setIsSubmitting(true);
    
    try {
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return '';
      };

      const payload = {
        email: formData.email,
        phone: `55${formData.phone.replace(/\D/g, '')}`,
        profile: formData.profile,
        origin: 'Landing Page High Ticket',
        date: new Date().toISOString(),
        client_user_agent: navigator.userAgent,
        fbp: getCookie('_fbp'),
        fbc: getCookie('_fbc'),
        event_source_url: window.location.href
      };

      // Dispara o Webhook (CONFIGURAÇÃO MANTIDA INTACTA)
      const response = await fetch('https://foda-n8n-webhook.nxjcjs.easypanel.host/webhook/lead-lht', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Se deu certo (ou mesmo se falhar o n8n, liberamos o user para não travar a venda)
      if (response.ok || response.status >= 200) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true); 
      }

    } catch (error) {
      console.error('Erro de conexão:', error);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Efeito para redirecionar após o sucesso
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        // Isso força o navegador a abrir o App do WhatsApp (Deep Link Behavior)
        window.location.href = WHATSAPP_GROUP_LINK;
      }, 2000); // Espera 2 segundos mostrando a mensagem de sucesso
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  // TELA DE SUCESSO / REDIRECIONAMENTO
  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
        <div className="relative w-full max-w-md p-8 rounded-3xl bg-neutral-900 border border-emerald-500/30 text-center shadow-[0_0_50px_rgba(16,185,129,0.1)]">
           <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 animate-pulse">
             <CheckCircle2 size={32} />
           </div>
           <h3 className="text-2xl font-serif font-bold text-white mb-2">Inscrição Confirmada!</h3>
           <p className="text-neutral-400 mb-6">Estamos te levando para o Grupo VIP no WhatsApp...</p>
           
           <div className="flex items-center justify-center gap-2 text-sm text-emerald-400 font-bold">
             <Loader2 className="animate-spin" size={16} />
             <span>Redirecionando...</span>
           </div>
        </div>
      </div>
    );
  }

  // TELA DO FORMULÁRIO
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-md p-8 rounded-3xl bg-[#0a0a0a] border border-red-900/30 shadow-[0_0_60px_rgba(220,38,38,0.15)] overflow-hidden animate-fade-in-up">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent blur-sm"></div>
        
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-white transition-colors z-10">
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <span className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase mb-2 block">Vaga Gratuita</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">Finalize sua Inscrição</h2>
          <p className="text-xs text-neutral-400">Preencha para liberar seu acesso ao Grupo.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider ml-1">Email Profissional</label>
            <input 
              type="email" 
              required
              placeholder="seu@melhoremail.com"
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider ml-1">WhatsApp</label>
            <div className="relative flex items-center">
              <div className="absolute left-0 pl-4 pr-2 border-r border-neutral-800 text-neutral-500 select-none font-medium">
                +55
              </div>
              <input 
                type="tel" 
                required
                placeholder="(11) 99999-9999"
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl pl-16 pr-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider ml-1">Seu Momento Atual</label>
            <div className="relative">
              <select 
                required
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all cursor-pointer"
                value={formData.profile}
                onChange={(e) => setFormData({...formData, profile: e.target.value})}
              >
                <option value="" disabled className="text-neutral-500">Selecione uma opção...</option>
                <option value="Nunca fiz um lançamento">Nunca fiz um lançamento</option>
                <option value="Faz mais de um ano que não faço">Faz mais de um ano que não faço um lançamento</option>
                <option value="Faço 1 ou 2 lançamentos por ano">Faço 1 ou 2 lançamentos por ano</option>
                <option value="Principal fonte de receita">Uso lançamentos como principal fonte de receita</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                <ChevronRight size={16} className="rotate-90" />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full group relative flex items-center justify-center gap-3 font-black py-4 px-6 rounded-xl transition-all duration-300 overflow-hidden mt-2 
              ${!isValid || isSubmitting 
                ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed opacity-70' 
                : 'bg-white text-black hover:scale-[1.02] active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]'
              }`}
          >
            <span className="uppercase tracking-widest text-sm relative z-10">
              {isSubmitting ? 'Processando...' : 'Entrar no Grupo VIP'}
            </span>
            
            {!isSubmitting && isValid && (
              <ChevronRight size={18} className="relative z-10 text-red-600" />
            )}
            
            {/* Efeito de brilho só aparece quando o botão está ativo */}
            {!isSubmitting && isValid && (
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-red-100/50 to-transparent group-hover:left-[100%] transition-all duration-700"></div>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500">
            <Lock size={10} />
            <span>Seus dados estão protegidos. Zero spam.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
