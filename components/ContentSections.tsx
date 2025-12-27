import React from 'react';
import { 
  Target, Cpu, Instagram, Users, BarChart3, Clock, 
  UserCheck, UserMinus, CheckCircle2, Quote, Sparkles, 
  Zap, ShieldCheck, Heart, Layout, Bot, ArrowDown, AlertTriangle 
} from 'lucide-react';

// Card adaptável para a Seção de Problemas
const ProblemCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm hover:border-red-900/50 transition-all duration-300 h-full">
    <div className="w-12 h-12 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center mb-6 text-red-500">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold text-white mb-4 uppercase tracking-tight">{title}</h3>
    <div className="text-neutral-400 text-sm leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

// Carrossel de Nichos
const NicheMarquee = () => {
  const nichesrow1 = ["Astrologia", "Consultoria Financeira", "Desbloqueio de crenças", "Psicologia Clínica", "Copywriter", "Direção Artística", "Branding", "Marketing Digital", "Kundalini", "Inglês", "Constelação Familiar"];
  const nichesrow2 = ["Eneagrama e Temperamentos", "Ho'oponopono", "Tarô", "Composição Musical", "Coach de Surfe", "Tzolkin", "Consultoria de Estilo", "Advocacia", "Pilates", "Feitiços e Magia", "Cura Quântica"];

  return (
    <div className="w-full py-12 overflow-hidden relative">
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050505] to-transparent"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050505] to-transparent"></div>
      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll { animation: scroll 40s linear infinite; }
        .animate-scroll-reverse { animation: scroll-reverse 40s linear infinite; }
      `}</style>
      <div className="flex mb-4 w-max animate-scroll hover:[animation-play-state:paused]">
        {[...nichesrow1, ...nichesrow1].map((niche, i) => (
          <div key={i} className="mx-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 text-sm whitespace-nowrap flex items-center gap-2">
            <Sparkles size={12} className="text-red-500 opacity-50" /> {niche}
          </div>
        ))}
      </div>
      <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused]">
        {[...nichesrow2, ...nichesrow2].map((niche, i) => (
          <div key={i} className="mx-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 text-sm whitespace-nowrap flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-red-900"></div> {niche}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ContentSections: React.FC = () => {
  return (
    <div className="w-full">
      
      {/* SEÇÃO 1 – O CONTEXTO (VISUAL REDESENHADO, TEXTO ORIGINAL MANTIDO) */}
      <section className="relative py-24 px-6 w-full bg-[#F5F5F7] text-neutral-900 overflow-hidden">
        {/* Background Decorativo Suave */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Cabeçalho Centralizado */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-red-950 leading-[1.1]">
               Você não está fracassando <br/>
               <span className="italic">nos lançamentos.</span>
             </h2>
             <p className="text-xl md:text-2xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
               Você está pagando caro por um modelo que foi desenhado para outro momento do mercado.
             </p>
          </div>

          {/* Grid de Comparação */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Coluna 1: O Mercado (Texto direto no fundo cinza) */}
            <div className="space-y-10 md:py-4">
              <p className="text-lg md:text-xl font-bold text-red-900 uppercase tracking-widest leading-relaxed border-l-4 border-red-500 pl-6">
                O mercado digital brasileiro não morreu. Ele só ficou caro, desconfiado e saturado.
              </p>
              
              <div className="space-y-6 pl-6">
                <p className="font-bold text-neutral-900 text-lg">Hoje:</p>
                <ul className="space-y-4 text-neutral-600 text-lg">
                  <li className="flex gap-4 items-center">
                    <span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"></span> 
                    Tráfego custa mais
                  </li>
                  <li className="flex gap-4 items-center">
                    <span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"></span> 
                    O lead confia menos
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0 mt-2"></span> 
                    O público já viu todas as promessas exageradas possíveis
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0 mt-2"></span> 
                    A maioria dos experts continua rodando o mesmo tipo de lançamento de 2021/22
                  </li>
                </ul>
              </div>
            </div>

            {/* Coluna 2: Você (Card Branco Flutuante) */}
            <div className="relative">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 border border-white space-y-8 relative overflow-hidden">
                {/* Detalhe de topo */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-900"></div>

                <p className="font-bold text-neutral-900 text-xl font-serif italic">Enquanto isso, você:</p>
                
                <ul className="space-y-4 text-neutral-700 font-medium">
                  <li className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50">
                    <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" /> 
                    Já faturou alto
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50">
                    <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" /> 
                    Já tem prova social e resultado
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50">
                    <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" /> 
                    Já estudou mais do que gostaria de admitir
                  </li>
                </ul>
                
                <div className="pt-6 border-t border-neutral-100">
                  <p className="text-red-800 font-medium leading-relaxed">
                    ...mas está repetindo um modelo que não foi desenhado pra high ticket sustentável em 2026.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bloco de Citação Final (Dark Mode para contraste) */}
          <div className="mt-20 p-10 md:p-14 bg-neutral-900 rounded-[2.5rem] text-white text-center shadow-2xl relative overflow-hidden">
             {/* Glow decorativo */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[100px] rounded-full"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <p className="text-xl md:text-3xl font-serif italic leading-relaxed text-neutral-200">
                  "O resultado você conhece: pico de faturamento, ressaca emocional, física e espiritual, meses sem base construída..."
                </p>
                <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
                <p className="text-red-500 font-bold uppercase tracking-widest text-sm md:text-base">
                  E aquele gosto amargo de estar “profissionalizando o circo”, não construindo um império.
                </p>
             </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 2 – OS PROBLEMAS QUE ESSE MODELO RESOLVE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Diagnóstico Brutal</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Efeitos Colaterais de Depender do Lançamento do Jeito Errado</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Esse aulão não é pra te convencer a “gostar de lançamento”. É pra resolver os gargalos da sua operação atual.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProblemCard title="1. Sobrecarga Total" icon={<Cpu size={24} />}>
            <p>Você toca estratégia, conteúdo, pessoas, atendimento, entrega, financeiro. Qualquer “estratégia perfeita” que dependa de você em tempo integral, morreu na largada.</p>
            <p className="text-red-500/80 font-medium border-t border-white/5 pt-2 mt-2">A Solução: Operacionalizar 70% com IA.</p>
          </ProblemCard>

          <ProblemCard title="2. Conversões Derretendo" icon={<Target size={24} />}>
            <p>O público avançado sente na hora gatilhos baratos e promessas exageradas. Nesse modelo, a base não é copy mirabolante, é Capital Autoral, Eu-Nicho e Categoria.</p>
            <p className="text-red-500/80 font-medium border-t border-white/5 pt-2 mt-2">A Solução: Autoridade por profundidade.</p>
          </ProblemCard>

          <ProblemCard title="3. Dependência do Insta" icon={<Instagram size={24} />}>
            <p>Se seu faturamento depende do próximo post, você tem um evento recorrente, não um negócio. A peça que falta é o COSMOS: conteúdo profundo que mantém demanda orgânica viva.</p>
            <p className="text-red-500/80 font-medium border-t border-white/5 pt-2 mt-2">A Solução: Ativos perenes fora do feed.</p>
          </ProblemCard>

          <ProblemCard title="4. Falta de Tempo Real" icon={<Clock size={24} />}>
            <p>Modo campanha eterno: acabou um carrinho, já está no pré do próximo. Não sobra tempo para testar novas estratégias, construir base ou recuperar energia criativa.</p>
            <p className="text-red-500/80 font-medium border-t border-white/5 pt-2 mt-2">A Solução: Rotina de 4h/dia.</p>
          </ProblemCard>

          <ProblemCard title="5. Cárcere com Ring Light" icon={<Users size={24} />}>
            <p>Se o negócio para quando você some, isso não é liberdade, é ser funcionário da própria reputação. Este modelo foi desenhado para tirar o negócio de cima da sua cara e dos seus nervos.</p>
            <p className="text-red-500/80 font-medium border-t border-white/5 pt-2 mt-2">A Solução: Escala sem sua presença física.</p>
          </ProblemCard>

          <ProblemCard title="6. Esforço Desproporcional" icon={<BarChart3 size={24} />}>
            <p>Lançamentos que empatam ou dão lucro pequeno perto da energia gasta. O problema não é o mercado desconfiado, é a estratégia que não maximiza profundidade e conversas qualificadas.</p>
            <p className="text-red-500/80 font-medium border-t border-white/5 pt-2 mt-2">A Solução: Funil Híbrido.</p>
          </ProblemCard>
        </div>
      </section>

      {/* SEÇÃO 3 – O MODELO (MARKETING ANTI-HYPE) */}
      <section className="py-32 px-6 max-w-5xl mx-auto border-t border-red-900/20">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6 italic text-glow-red tracking-tight">Marketing Anti-Hype</h2>
          <p className="text-neutral-400 text-lg uppercase tracking-widest">Um sistema atemporal que vende sem precisar fazer circo.</p>
          <div className="mt-6 flex justify-center gap-4 text-xs text-neutral-500 uppercase font-bold">
            <span>Não é postar menos</span>
            <span className="text-red-900">•</span>
            <span>Não é sumir da internet</span>
            <span className="text-red-900">•</span>
            <span>É Arquitetura de Negócio</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {[
            { 
              title: "Lançamento Gratuito", 
              desc: "Atração em massa e autoridade construída em profundidade. Lead quente entrando por valor, não por promessa vazia.",
              icon: <Zap className="text-red-500" size={20} />
            },
            { 
              title: "Lançamento Pago / Imersão", 
              desc: "Filtro natural de quem leva a sério. ROI melhor com menos gente e espaço pra entregar densidade sem depender de show.",
              icon: <ShieldCheck className="text-red-500" size={20} />
            },
            { 
              title: "COSMOS (Sistema Orgânico)", 
              desc: "1 big ideia que gera +10 peças anti-superficialidade distribuídas em múltiplos canais, gerando vendas entre um carrinho e outro.",
              icon: <Layout className="text-red-500" size={20} />
            },
            { 
              title: "Camada de IA e Rotina 4h/dia", 
              desc: "Agentes e sistemas fazendo o grosso operacional para você focar em pensar, criar, decidir e liderar. Sem ser escravo de ferramenta.",
              icon: <Bot className="text-red-500" size={20} />
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 group hover:bg-red-900/5 transition-colors">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-neutral-500 text-sm italic">
          Tudo isso a serviço de vender high ticket em níveis diferentes, não de empurrar cursinho barato difícil de vender.
        </p>
      </section>

      {/* SEÇÃO 4 – O QUE VOCÊ VAI LEVAR (FUNDO CLARO) */}
      <section className="py-24 px-6 w-full bg-[#F0F0F2]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">O que você vai levar dessa aula</h2>
            <p className="text-neutral-600 italic">Você não vai sair com mais uma teoria sobre “mercado saturado”.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Visão brutalmente honesta do porquê seus lançamentos estão rendendo menos",
              "O mapa do modelo híbrido de lançamento high ticket",
              "Clareza sobre como encaixar sua realidade nesse modelo (tempo, verba, estrutura)",
              "Pilares para reduzir a dependência do Instagram e vender entre lançamentos",
              "Como reposicionar sua marca para refletir quem você é hoje",
              "Começar a planejar 2026 com modelo, e não com esperança"
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-center p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <CheckCircle2 size={20} className="text-red-600 flex-shrink-0" />
                <p className="text-neutral-700 text-sm font-bold">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 rounded-2xl border-2 border-dashed border-red-200 bg-red-50/50 text-center">
            <p className="text-neutral-800 font-bold italic font-serif text-lg leading-relaxed">
              "A coragem técnica de admitir que o problema não é você — é o modelo que você continua obedecendo por medo de perder um resultado que já está escorrendo."
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO: DIAGNÓSTICO DE MODELO */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Qual modelo seu negócio opera hoje?</h2>
          <p className="text-neutral-500 uppercase tracking-widest text-xs">Em 2026, o mercado saberá se você é “mais um” ou se tem um sistema.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-neutral-900/20 border border-neutral-800/50 opacity-60 scale-95 transition-all">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4 block">Modelo 01</span>
            <h4 className="text-xl font-bold text-neutral-300 mb-6 uppercase">Submisso ao Algoritmo</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li className="flex gap-2">✕ Transmite dependência</li>
              <li className="flex gap-2">✕ Muito volume, pouca densidade</li>
              <li className="flex gap-2">✕ Muita atenção, pouca intenção de compra</li>
              <li className="flex gap-2 font-bold text-red-900/50">✕ Você trabalha para o feed</li>
            </ul>
          </div>
          
          <div className="p-8 rounded-3xl bg-neutral-900/40 border border-red-900/40 scale-100 transition-all relative">
            <span className="text-[10px] uppercase tracking-widest text-red-500 mb-4 block">Modelo 02</span>
            <h4 className="text-xl font-bold text-white mb-6 uppercase">Autoritário do Lançamento</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex gap-2">✕ Transmite imposição e cansaço</li>
              <li className="flex gap-2">✕ Mercado: “Compre agora ou perde”</li>
              <li className="flex gap-2">✕ Na operação: tudo vira urgência</li>
              <li className="flex gap-2 font-bold text-red-500/50">✕ Na vida: você vive em modo campanha</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-red-950/30 border-2 border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.2)] scale-105 transition-all relative z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 px-4 py-1 rounded-full whitespace-nowrap">
               <span className="text-[10px] font-black uppercase tracking-widest text-white">Seu Próximo Passo</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-amber-500 mb-4 block font-bold">Modelo 03</span>
            <h4 className="text-xl font-bold text-white mb-6 uppercase">Arquitetado (Antifrágil)</h4>
            <ul className="space-y-4 text-sm text-white">
              <li className="flex gap-2 font-medium">✓ Transmite clareza e valor</li>
              <li className="flex gap-2 font-medium">✓ Profundidade que atrai qualificados</li>
              <li className="flex gap-2 font-medium">✓ Condução sem pressão, conversão com respeito</li>
              <li className="flex gap-2 font-black text-amber-500 uppercase tracking-tighter italic">✓ Sistema que sustenta sem te sugar</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-12 text-neutral-500 font-serif italic">É daqui que partimos no aulão: seu diagnóstico de “circo ou sistema”.</p>
      </section>
      
      {/* SEÇÃO NOVA: CARROSSEL DE NICHOS */}
      <section className="py-16 w-full border-y border-white/5 bg-[#080808]">
        <div className="text-center mb-8">
           <h3 className="text-xl md:text-2xl font-serif font-bold text-white uppercase tracking-widest">Nichos que já aplicaram com sucesso:</h3>
        </div>
        <NicheMarquee />
      </section>

      {/* SEÇÃO 5 – POR QUE É GRATUITO? */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="p-12 md:p-16 rounded-[3rem] bg-neutral-950 border border-red-900/20 relative overflow-hidden">
          <Quote className="absolute top-10 right-10 text-red-900/10 w-48 h-48 -rotate-12" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-10 text-center">Por que essa aula é gratuita?</h2>
            
            <p className="text-2xl md:text-5xl font-serif italic text-red-500 mb-12 leading-tight text-center">
              “Eu já paguei mentoria cara que não tinha nem 1/3 do que você entregou aqui.”
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-neutral-400 text-sm md:text-base">
              <div className="space-y-6">
                <p>E porque eu tenho casos reais de gente que pegou uma aula minha gratuita, aplicou o que eu ensinei e <strong className="text-white">faturou mais de 100k em poucas semanas.</strong></p>
                <p>Essa aula poderia ser paga sem nenhum esforço de copy. O motivo de ser gratuita é estratégico e transparente: é nosso <strong>“primeiro encontro”</strong>.</p>
              </div>
              <div className="space-y-6">
                <p>Eu quero que você teste, na prática, se esse nível de profundidade conversa com o seu — e se fizer sentido, lá dentro eu vou te mostrar como continuar essa construção comigo em 2026.</p>
                <p className="text-white font-bold uppercase tracking-widest text-xs">Simples assim. Sem manipulação. Sem “gatilho da gratidão”.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 – PRA QUEM É (FUNDO CLARO) */}
      <section className="py-24 px-6 w-full bg-white text-neutral-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="p-10 rounded-[2rem] bg-neutral-50 border border-neutral-100">
            <div className="flex items-center gap-3 mb-8">
              <UserCheck className="text-emerald-600" size={32} />
              <h2 className="text-3xl font-serif font-bold">Pra quem é</h2>
            </div>
            <ul className="space-y-6 text-neutral-600 font-medium">
              <li className="flex gap-3">✓ já tem negócio, base de clientes e resultado comprovado</li>
              <li className="flex gap-3">✓ Experts que já bateram 6 ou 7 dígitos em algum momento da jornada</li>
              <li className="flex gap-3">✓ Quem sente que o faturamento custa caro demais à saúde e família</li>
              <li className="flex gap-3">✓ Quem não aguenta mais o marketing superficial do momento</li>
              <li className="flex gap-3">✓ Quem quer automatizar sem virar refém de time grande</li>
              <li className="flex gap-3">✓ Quem sente que seu conteúdo não traduz mais quem você é</li>
            </ul>
          </div>
          <div className="p-10 rounded-[2rem] bg-neutral-900 text-white">
            <div className="flex items-center gap-3 mb-8">
              <UserMinus className="text-red-600" size={32} />
              <h2 className="text-3xl font-serif font-bold">Pra quem NÃO é</h2>
            </div>
            <ul className="space-y-6 text-neutral-400">
              <li className="flex gap-3">✕ Quem está começando do zero e quer receita pronta</li>
              <li className="flex gap-3">✕ Quem quer vender “qualquer coisa pra qualquer um”</li>
              <li className="flex gap-3">✕ Quem não quer tocar em posicionamento e promessa</li>
              <li className="flex gap-3">✕ Quem está comprometido em seguir copiando fórmulas falidas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEÇÃO BIO */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center bg-[#050505]">
        <div className="mb-12 relative inline-block">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-red-900/30 mx-auto shadow-2xl shadow-red-900/20 bg-neutral-900">
            <img 
              src="https://i.ibb.co/SD4gMVXY/IMG-8474.jpg" 
              alt="Tatiana Marx" 
              className="w-full h-full object-cover grayscale-[10%]"
              onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"; }}
            />
          </div>
        </div>
        
        <h2 className="text-4xl font-serif font-bold text-white mb-8">Tatiana Marx</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { val: "R$ 10M+", label: "Faturamento Digital" },
            { val: "R$ 6M", label: "Só High Ticket" },
            { val: "R$ 36M", label: "Gerados para Clientes" }
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <div className="text-xl font-bold text-red-500">{stat.val}</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-tighter leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-neutral-400 text-sm md:text-base leading-relaxed space-y-6 text-justify md:text-center max-w-3xl mx-auto">
          <p>Sou uma generalista multiplicadora de talentos, com domínio sobre diversos assuntos e uma visão estratégica, criativa e intuitiva que me acompanha há mais de 12 anos atuando como estrategista de marca, marketing e gestão de negócios. Minha superpotência? Consigo decifrar um negócio, um produto, uma comunicação e, em segundos, identificar exatamente o que precisa ser feito para aquilo funcionar.</p>
          <p>Minha especialidade é unir posicionamento profundo, método próprio, IA e filosofia de vida. Acredito em um marketing anti-hype, atemporal, baseado em Capital Autoral e sistemas — não em circo.</p>
          <p>Já trabalhei com grandes nomes do entretenimento e liderei estratégias para projetos nos mais variados nichos. Mas há 3 anos, minha trajetória tomou um rumo inesperado: um esgotamento severo seguido de diversos problemas de saúde me deixaram de cama, incapaz de fazer lançamentos. Tive que fazer uma escolha difícil — cuidar da minha saúde física e mental ou abrir mão de tudo que havia construído no digital. Escolhi minha saúde. Sumi do Instagram, parei de vender meus cursos e mergulhei nos estudos. Foi quando descobri um novo caminho.</p>
          <p>Nesse meio tempo, tomei outra decisão importante: construir minha própria família. Hoje sou mãe de duas filhas e, graças à metodologia de Lançamento High Ticket que criei junto com meu sócio e irmão e ao COSMOS (Sistema Orgânico Contínuo), me recuperei completamente e consigo priorizar minha família, estar presente e faturar múltiplos 6 dígitos mensais com leveza e autenticidade.</p>
          <p>Até o final de 2025, já gerei mais de R$ 10 milhões no digital com meus produtos e serviços e ajudei meus mentorados a gerarem R$ 36 milhões nos últimos 3 anos. Trabalho com uma camada de IA e uma rotina de apenas 4 horas por dia — agentes e sistemas de IA fazem o grosso operacional, enquanto eu foco em pensar, criar, decidir e liderar. Sem virar escrava de ferramentas nem de metas.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 w-full bg-neutral-900 border-t border-red-900/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Aula gratuita, ao vivo.</h2>
            <p className="text-xl text-neutral-400 italic">Uma tarde pra parar de sustentar um modelo que já não conversa com você e começar a desenhar o que vai sustentar seu 2026.</p>
          </div>
          
          <div className="p-10 rounded-[2.5rem] bg-black border border-white/5 shadow-2xl space-y-6">
            <p className="text-neutral-300 text-lg leading-relaxed">
              Se você sente que cresceu por dentro e seu negócio ficou preso numa versão antiga de você, essa aula não é “mais um evento”. É o ponto de virada entre repetir o que funcionou em 2021/22 ou arquitetar o modelo que vai te manter vivo, lúcido e lucrando em 2026.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-sm">
                   <Heart size={18} /> Sustentabilidade
                </div>
                <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-sm">
                   <Zap size={18} /> Alta Lucratividade
                </div>
                <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm">
                   <ShieldCheck size={18} /> Lucidez
                </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
