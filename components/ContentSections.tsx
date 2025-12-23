
import React from 'react';
import { Target, TrendingUp, Cpu, Brain, Lock, Instagram, Star, Users, ShieldCheck, Zap, ChevronRight, AlertCircle, Rocket, BarChart3, Clock, UserCheck, UserMinus } from 'lucide-react';

const Card: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm hover:border-red-900/50 transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center mb-6 text-red-500">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold text-white mb-4">{title}</h3>
    <div className="text-neutral-400 text-sm leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export const ContentSections: React.FC = () => {
  return (
    <div className="w-full pb-32">
      {/* SEÇÃO 1 – O CONTEXTO */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center border-t border-red-900/20">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-glow-red">Você não está fracassando nos lançamentos.</h2>
        <p className="text-xl text-neutral-300 mb-12 font-light">
          Você está pagando caro por um modelo que foi desenhado para outro momento do mercado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-6 bg-red-950/10 border border-red-900/20 rounded-xl">
            <ul className="space-y-4 text-neutral-400">
              <li className="flex gap-3 items-start"><span className="text-red-500">•</span> Tráfego custa mais</li>
              <li className="flex gap-3 items-start"><span className="text-red-500">•</span> O lead confia menos</li>
              <li className="flex gap-3 items-start"><span className="text-red-500">•</span> Público saturado de promessas exageradas</li>
            </ul>
          </div>
          <div className="p-6 bg-red-950/10 border border-red-900/20 rounded-xl">
            <p className="text-neutral-300 italic">
              "Enquanto isso, você já faturou alto, tem prova social... mas está profissionalizando o circo, não construindo um império."
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 – OS PROBLEMAS */}
      <section className="py-24 px-6 max-w-6xl mx-auto bg-neutral-950/50 rounded-[3rem] border border-red-900/10">
        <div className="text-center mb-16">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">Diagnóstico Brutal</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Efeitos Colaterais do Modelo Antigo</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Sobrecarga Total" icon={<Cpu size={24} />}>
            Você toca estratégia, conteúdo, pessoas e financeiro. Se a estratégia depende de você em tempo integral, ela morreu na largada.
          </Card>
          <Card title="Conversões Derretendo" icon={<Target size={24} />}>
            Gatilhos baratos e promessas genéricas não funcionam mais com o público avançado. A base agora é Capital Autoral.
          </Card>
          <Card title="Dependência do Insta" icon={<Instagram size={24} />}>
            Se o seu faturamento depende sempre do próximo post ou lançamento, você não tem um negócio, tem um evento recorrente.
          </Card>
          <Card title="Falta de Tempo Real" icon={<Clock size={24} />}>
            Acaba um carrinho, começa o pré do próximo. Sem tempo para criar, testar ou viver a vida que o digital prometeu.
          </Card>
          <Card title="Cárcere com Ring Light" icon={<Users size={24} />}>
            Se o negócio para quando você some, isso não é liberdade. É ser funcionário da própria reputação.
          </Card>
          <Card title="Esforço Desproporcional" icon={<BarChart3 size={24} />}>
            Lançamentos que empatam ou dão lucro pequeno perto da energia gasta. Falta maximizar profundidade e conversas qualificadas.
          </Card>
        </div>
      </section>

      {/* SEÇÃO 3 – O MODELO */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic text-glow-red">Marketing Anti-Hype</h2>
          <p className="text-neutral-400">Um sistema atemporal que vende sem precisar fazer circo.</p>
        </div>

        <div className="space-y-12">
          {[
            { label: "Lançamento Gratuito", desc: "Atração em massa e autoridade construída em profundidade." },
            { label: "Lançamento Pago / Imersão", desc: "Filtro natural para quem leva a sério e ROI otimizado." },
            { label: "COSMOS (Sistema Orgânico)", desc: "1 Big Idea que gera demanda qualificada entre lançamentos." },
            { label: "Arquitetura com IA", desc: "Operacionalize até 70% do modelo e foque em decidir e criar." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start border-l-2 border-red-900/30 pl-8 relative group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-600 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{item.label}</h4>
                <p className="text-neutral-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 6/7 – PÚBLICO */}
      <section className="py-24 px-6 bg-red-950/10 border-y border-red-900/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <UserCheck className="text-emerald-500" size={28} />
              <h2 className="text-2xl font-serif font-bold">Pra quem é</h2>
            </div>
            <ul className="space-y-4 text-neutral-300">
              <li className="flex gap-2">✓ Experts que já bateram 6 ou 7 dígitos</li>
              <li className="flex gap-2">✓ Quem sente que o faturamento custa caro demais</li>
              <li className="flex gap-2">✓ Quem busca automatizar sem perder a essência</li>
              <li className="flex gap-2">✓ Mentores que querem sair do marketing superficial</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <UserMinus className="text-red-500" size={28} />
              <h2 className="text-2xl font-serif font-bold text-neutral-300">Pra quem NÃO é</h2>
            </div>
            <ul className="space-y-4 text-neutral-500">
              <li className="flex gap-2">✕ Quem está começando do zero absoluto</li>
              <li className="flex gap-2">✕ Quem quer receita pronta sem esforço</li>
              <li className="flex gap-2">✕ Quem não quer tocar em posicionamento</li>
              <li className="flex gap-2">✕ Quem prefere seguir copiando fórmulas de 2021</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 – BIO */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <div className="mb-12 relative inline-block">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-red-900/30 mx-auto shadow-2xl shadow-red-900/20 bg-neutral-900">
            <img 
              src="https://i.ibb.co/SD4gMVXY/IMG-8474.jpg" 
              alt="Tatiana e Fábio" 
              className="w-full h-full object-cover grayscale-[10%]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400";
              }}
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-600 px-6 py-2 rounded-full whitespace-nowrap">
            <span className="text-xs font-bold uppercase tracking-widest text-white">Os Arquitetos</span>
          </div>
        </div>
        <h2 className="text-3xl font-serif font-bold mb-8">Tatiana & Fábio</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { val: "R$ 10M+", label: "No Digital" },
            { val: "R$ 6M", label: "High Ticket" },
            { val: "R$ 36M", label: "Para Clientes" },
            { val: "3 Anos", label: "De Tese" }
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <div className="text-xl font-bold text-red-500">{stat.val}</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-tighter">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-neutral-400 italic max-w-2xl mx-auto leading-relaxed">
          Especialistas em unir posicionamento profundo, método próprio, IA e filosofia de vida. Nossa tese é o marketing anti-hype: atemporal, baseado em Capital Autoral e sistemas, não em circo.
        </p>
      </section>
    </div>
  );
};
