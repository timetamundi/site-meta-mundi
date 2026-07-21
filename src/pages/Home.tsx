import React, { useState } from "react";
import Layout from "@/components/Layout";
import { METAMUNDI_DATA } from "@/const";
import { Button } from "@/components/ui/button";
import VideoSection from "@/components/VideoSection";
import BlogSection from "@/components/BlogSection";
import DiagnosticForm from "@/components/DiagnosticForm";
import ServiceModals from "@/components/ServiceModals";
import { 
  Plane, 
  Hotel, 
  ShieldCheck, 
  Car, 
  Users, 
  BarChart3, 
  Headphones,
  Check,
  X,
  ArrowRight,
  Star,
  Globe
} from "lucide-react";

// Mapeamento dinâmico de ícones para soluções
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Plane: Plane,
  Hotel: Hotel,
  ShieldCheck: ShieldCheck,
  Car: Car,
  Users: Users,
  BarChart3: BarChart3,
  Headphones: Headphones
};

// Lista de clientes com nomes reais e espaço reservado para logos de alta definição
const CLIENT_LOGOS = [
  { name: "APAA", label: "Assoc. Paulista Amigos da Arte" },
  { name: "Pref. Navegantes", label: "Prefeitura de Navegantes" },
  { name: "ICISMEP", label: "Consórcio Intermunicipal de Saúde" },
  { name: "Pref. Guapimirim", label: "Prefeitura de Guapimirim" },
  { name: "Pref. Birigui", label: "Prefeitura de Birigui" },
  { name: "Pref. Miguel Pereira", label: "Prefeitura de Miguel Pereira" },
  { name: "Univ. Edimburgo", label: "University of Edinburgh" },
  { name: "Fringe Festival", label: "Edinburgh Festival Fringe" }
];

export default function Home() {
  const [activeSector, setActiveSector] = useState<string>("terceiro-setor");
  const [selectedServiceModal, setSelectedServiceModal] = useState<"corporativo" | "eventos" | "publico" | "terceiro-setor" | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollToDiagnostic = () => {
    const el = document.getElementById("diagnostico");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleOpenServiceModal = (type: "corporativo" | "eventos" | "publico" | "terceiro-setor") => {
    setSelectedServiceModal(type);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      {/* 1. Hero Section - Definição de Imagem Ultra-HD e Excelente Contraste */}
      <section className="relative bg-slate-950 pt-28 pb-32 md:pt-36 md:pb-40 overflow-hidden border-b border-slate-900">
        {/* Imagem de Fundo Ultra-HD com Brilho Controlado para Legibilidade Absoluta */}
        <div className="absolute inset-0 z-0">
          <img 
            src={METAMUNDI_DATA.images.hero} 
            alt="Avião comercial real em pista de aeroporto" 
            className="w-full h-full object-cover filter brightness-[0.35] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto do Hero */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#52C473] tracking-widest uppercase bg-[#52C473]/10 border border-[#52C473]/20 px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52C473] animate-pulse" />
                Gestão Estratégica de Viagens
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
                Viagens corporativas com <span className="text-[#52C473]">gestão, economia</span> e atendimento humano.
              </h1>
              <p className="text-slate-200 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
                Da cotação ao pós-venda, a MetaMundi cuida de cada etapa da viagem da sua empresa com tecnologia, controle, suporte especializado e foco em redução de custos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#52C473] hover:bg-[#43B362] text-slate-950 font-extrabold shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98] py-6 px-8 text-base"
                  onClick={handleScrollToDiagnostic}
                >
                  Fale com um especialista
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-700 text-white hover:text-white hover:bg-slate-900 py-6 px-8 text-base bg-slate-950/40 backdrop-blur-sm"
                  onClick={() => {
                    const el = document.getElementById("solucoes");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Conheça nossas soluções
                </Button>
              </div>

              {/* Botões rápidos para seções específicas exigidas no brief */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <button 
                  onClick={() => handleOpenServiceModal("corporativo")}
                  className="text-xs font-bold bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-[#52C473] hover:border-[#52C473]/50 px-4 py-3 rounded-lg transition-all"
                >
                  💼 Viagens Corporativas
                </button>
                <button 
                  onClick={() => handleOpenServiceModal("eventos")}
                  className="text-xs font-bold bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-[#52C473] hover:border-[#52C473]/50 px-4 py-3 rounded-lg transition-all"
                >
                  🎪 Eventos e Grupos
                </button>
                <button 
                  onClick={() => handleOpenServiceModal("publico")}
                  className="text-xs font-bold bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-[#52C473] hover:border-[#52C473]/50 px-4 py-3 rounded-lg transition-all"
                >
                  🏛️ Setor Público e Contratos
                </button>
                <button 
                  onClick={() => handleOpenServiceModal("terceiro-setor")}
                  className="text-xs font-bold bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-[#52C473] hover:border-[#52C473]/50 px-4 py-3 rounded-lg transition-all"
                >
                  🌱 Terceiro Setor
                </button>
              </div>

              {/* Mensagem Central Curta */}
              <p className="text-xs text-slate-300 italic font-medium">
                “A MetaMundi combina o melhor de uma agência especializada, o cuidado de um atendimento humano e a inteligência de gestão que empresas precisam para viajar melhor.”
              </p>
            </div>

            {/* Cards Flutuantes com Indicadores à Direita */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {METAMUNDI_DATA.indicators.map((ind, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-900/95 border border-slate-800 p-6 rounded-xl backdrop-blur-md shadow-2xl hover:border-[#52C473]/40 transition-colors group"
                >
                  <span className="text-3xl md:text-4xl font-extrabold text-[#52C473] block font-display tracking-tight">
                    {ind.value}
                  </span>
                  <span className="text-sm font-bold text-white block mt-2">
                    {ind.label}
                  </span>
                  <span className="text-xs text-slate-300 block mt-1.5 leading-relaxed font-medium">
                    {ind.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Seção de Clientes / Carrossel Contínuo (Marquee) */}
      <section id="setores" className="py-20 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-slate-900 tracking-widest uppercase bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
              Confiança e Capilaridade
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 tracking-tight font-display">
              Empresas e Órgãos que viajam com a MetaMundi
            </h2>
          </div>
        </div>

        {/* Carrossel Infinito de Clientes (Marquee) */}
        <div className="relative w-full bg-slate-50 py-10 border-y border-slate-100">
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
              {/* Primeiro grupo de logos */}
              {CLIENT_LOGOS.map((client, idx) => (
                <div key={`c1-${idx}`} className="flex flex-col items-center justify-center shrink-0 group px-4">
                  <div className="w-16 h-16 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm group-hover:border-[#52C473]/50 group-hover:shadow-md transition-all duration-300">
                    <Globe className="w-8 h-8 text-slate-400 group-hover:text-[#52C473] transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 mt-2.5 tracking-tight">{client.name}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 max-w-[120px] text-center truncate">{client.label}</span>
                </div>
              ))}
              {/* Segundo grupo duplicado para efeito infinito */}
              {CLIENT_LOGOS.map((client, idx) => (
                <div key={`c2-${idx}`} className="flex flex-col items-center justify-center shrink-0 group px-4">
                  <div className="w-16 h-16 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm group-hover:border-[#52C473]/50 group-hover:shadow-md transition-all duration-300">
                    <Globe className="w-8 h-8 text-slate-400 group-hover:text-[#52C473] transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 mt-2.5 tracking-tight">{client.name}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 max-w-[120px] text-center truncate">{client.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab de Setores Atendidos (Bento Grid Style) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Lista de Setores */}
            <div className="lg:col-span-4 space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-3 mb-4">
                Selecione um Setor de Atuação
              </h4>
              {METAMUNDI_DATA.sectors.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveSector(sec.id)}
                  className={`w-full text-left px-5 py-4 rounded-lg text-sm font-bold transition-all flex items-center justify-between group ${
                    activeSector === sec.id
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "text-slate-700 hover:text-primary hover:bg-slate-50 border border-transparent hover:border-slate-100"
                  }`}
                >
                  <span>{sec.name}</span>
                  <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all ${
                    activeSector === sec.id ? "opacity-100 translate-x-1" : "group-hover:translate-x-1"
                  }`} />
                </button>
              ))}
            </div>

            {/* Detalhe do Setor Selecionado (Fundo Cinza Suave com Destaques Verdes) */}
            <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#52C473]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <span className="text-xs font-bold text-emerald-800 tracking-widest uppercase bg-[#52C473]/15 border border-[#52C473]/30 px-3 py-1 rounded">
                  Atendimento Customizado
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  {METAMUNDI_DATA.sectors.find(s => s.id === activeSector)?.name}
                </h3>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                  {METAMUNDI_DATA.sectors.find(s => s.id === activeSector)?.desc}
                </p>
                
                <div className="pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 font-bold">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4.5 h-4.5 text-[#52C473] shrink-0" />
                    <span>Controle estrito de centros de custos</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4.5 h-4.5 text-[#52C473] shrink-0" />
                    <span>Emissão ágil de notas fiscais e relatórios</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4.5 h-4.5 text-[#52C473] shrink-0" />
                    <span>Compliance e políticas de viagens integradas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4.5 h-4.5 text-[#52C473] shrink-0" />
                    <span>Suporte humano dedicado 24 horas</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between relative z-10 border-t border-slate-200 mt-8">
                <span className="text-xs font-bold text-slate-500">
                  A MetaMundi adapta atendimento, controles e faturamento à realidade de cada cliente.
                </span>
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-5 py-2.5"
                  onClick={handleScrollToDiagnostic}
                >
                  Solicitar Diagnóstico Setorial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção Narrativa: Quem Somos (Fundo Escuro para Transição de Contraste e Imagem Ultra-HD) */}
      <section id="sobre" className="py-24 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Imagem Narrativa Ultra-HD à Esquerda com Excelente Contraste e Brilho */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-800 relative z-10 shadow-2xl">
                <img 
                  src={METAMUNDI_DATA.images.meeting} 
                  alt="Equipe corporativa colaborando de forma real em altíssima definição" 
                  className="w-full h-full object-cover filter brightness-95 contrast-105 saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              {/* Elementos decorativos técnicos de grid */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#52C473]/40 rounded-tl-xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#52C473]/40 rounded-br-xl pointer-events-none" />
            </div>

            {/* Conteúdo à Direita */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#52C473] tracking-widest uppercase bg-[#52C473]/10 px-3 py-1 rounded-full border border-[#52C473]/20">
                Nossa Missão
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
                Mais do que emitir viagens. Nós organizamos o caminho.
              </h2>
              <div className="space-y-4 text-slate-200 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  A MetaMundi nasceu para resolver um problema recorrente nas empresas: viagens corporativas feitas com pressa, sem controle, sem previsibilidade e sem suporte adequado. Transformamos esse processo em uma experiência organizada, segura e eficiente.
                </p>
                <p>
                  Nosso trabalho combina atendimento humanizado, tecnologia, análise de custos, curadoria de fornecedores e acompanhamento próximo. O resultado é uma operação de viagens mais simples para o gestor e mais segura para o viajante.
                </p>
              </div>

              {/* Diferenciais em Destaque */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-900">
                <div className="flex items-start gap-3">
                  <Check className="w-5.5 h-4.5 text-[#52C473] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Curadoria de Fornecedores</h4>
                    <p className="text-xs text-slate-300 mt-0.5 font-medium">Parcerias estratégicas com hotéis e cias aéreas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5.5 h-4.5 text-[#52C473] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Acompanhamento Ativo</h4>
                    <p className="text-xs text-slate-300 mt-0.5 font-medium">Suporte em check-ins, conexões e imprevistos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vídeo Explicativo */}
      <VideoSection />

      {/* 5. Seção de Soluções (Fundo Claro com Grid Técnico) */}
      <section id="solucoes" className="py-24 bg-slate-50 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/5 px-3.5 py-1.5 rounded-full border border-primary/15">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 tracking-tight font-display">
              Tudo que sua empresa precisa para viajar melhor
            </h2>
            <p className="text-slate-700 mt-3 text-base md:text-lg font-medium">
              Oferecemos uma gama completa de soluções integradas de gestão logística, garantindo eficiência de custos e total segurança operacional.
            </p>
          </div>

          {/* Grid de Soluções (Estilo Bento Grid Claro) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METAMUNDI_DATA.solutions.map((sol, idx) => {
              const IconComponent = ICON_MAP[sol.icon] || Plane;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/60 rounded-xl p-6 hover:border-[#52C473]/50 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-11 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-[#52C473] group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                      {sol.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-bold group-hover:text-primary transition-colors">
                    <span>Saber mais</span>
                    <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Seção de Comparação Dinâmica (Contraste Claro/Escuro) */}
      <section id="comparacao" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/5 px-3.5 py-1.5 rounded-full border border-primary/15">
              Análise Comparativa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 tracking-tight font-display">
              Por que escolher a MetaMundi em vez de fazer tudo sozinho?
            </h2>
            <p className="text-slate-700 mt-3 text-base md:text-lg font-medium">
              Compare as soluções e entenda por que a gestão profissional e o atendimento humano de verdade superam as buscas autônomas na internet e as agências tradicionais.
            </p>
          </div>

          {/* Tabela Comparativa Responsiva Clássica Corporativa com Contraste Forte */}
          <div className="overflow-x-auto bg-white border border-slate-200 rounded-2xl shadow-xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  {METAMUNDI_DATA.comparison.headers.map((header, idx) => (
                    <th 
                      key={idx} 
                      className={`p-5 text-xs font-bold uppercase tracking-wider ${
                        idx === 1 ? "text-emerald-900 bg-[#52C473]/10" : "text-slate-600"
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {METAMUNDI_DATA.comparison.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-bold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-5 text-slate-950 font-bold bg-[#52C473]/5 border-x border-slate-200">
                      <div className="flex items-center gap-2.5">
                        <Check className="w-5 h-5 text-emerald-700 shrink-0" />
                        <span>{row.metamundi}</span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-700 font-medium">
                      <div className="flex items-center gap-2.5">
                        <X className="w-5 h-5 text-red-600 shrink-0" />
                        <span>{row.competitors}</span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-700 font-medium">
                      <div className="flex items-center gap-2.5">
                        <Check className="w-5 h-5 text-slate-500 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Seção de Indicadores e Impacto (Transição Suave para o Escuro com Imagem Ultra-HD) */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Conteúdo de Texto à Esquerda */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/5 px-3.5 py-1.5 rounded-full border border-primary/15">
                Resultados Reais
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-display">
                Resultados que aparecem na operação
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                Cada empresa tem uma realidade. Por isso, a MetaMundi trabalha com análise de perfil de viagem, histórico de compras, política interna, preferências de fornecedores e oportunidades de economia estratégica.
              </p>
              
              <div className="pt-6 border-t border-slate-200 space-y-3 text-sm text-slate-800 font-bold">
                <p className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#52C473]" />
                  Até 5% a 10% de economia em emissões estratégicas.
                </p>
                <p className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#52C473]" />
                  Redução drástica de retrabalho na gestão de viagens.
                </p>
                <p className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#52C473]" />
                  Relatórios analíticos consolidados para tomada de decisão.
                </p>
              </div>
            </div>

            {/* Imagem de Impacto Ultra-HD à Direita */}
            <div className="lg:col-span-6">
              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-2xl relative">
                <img 
                  src={METAMUNDI_DATA.images.lounge} 
                  alt="Executivo trabalhando de forma realista em lounge de aeroporto com altíssima definição" 
                  className="w-full h-full object-cover filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-lg">
                  <span className="text-xs font-extrabold text-emerald-800 uppercase block">Inteligência Tarifária</span>
                  <p className="text-xs text-slate-800 mt-1 font-bold">"Nossos algoritmos e curadoria buscam as melhores conexões pelo menor custo operacional real."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Seção: Como Funciona (Claro) */}
      <section id="como-funciona" className="py-24 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/5 px-3.5 py-1.5 rounded-full border border-primary/15">
              Fluxo de Trabalho
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 tracking-tight font-display">
              Uma operação simples para quem contrata. Completa para quem viaja.
            </h2>
            <p className="text-slate-700 mt-3 text-base md:text-lg font-medium">
              Entenda como estruturamos nossa operação para garantir máxima eficiência, segurança e conformidade em cada etapa.
            </p>
          </div>

          {/* Etapas do Fluxo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {/* Linha Conectora Técnica (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-8 z-0" />

            {/* Etapa 1 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 relative z-10 flex flex-col justify-between hover:border-[#52C473]/50 transition-colors shadow-sm">
              <div>
                <span className="text-3xl font-extrabold text-[#52C473] block mb-3 font-mono">01</span>
                <h4 className="text-sm font-bold text-slate-900">Diagnóstico</h4>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed font-semibold">
                  Entendemos o perfil de viagens da sua empresa, recorrência, destinos, orçamento e necessidades.
                </p>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 relative z-10 flex flex-col justify-between hover:border-[#52C473]/50 transition-colors shadow-sm">
              <div>
                <span className="text-3xl font-extrabold text-[#52C473] block mb-3 font-mono">02</span>
                <h4 className="text-sm font-bold text-slate-900">Cotação inteligente</h4>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed font-semibold">
                  Buscamos as melhores opções considerando preço, horário, conforto, regras tarifárias e custo-benefício.
                </p>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 relative z-10 flex flex-col justify-between hover:border-[#52C473]/50 transition-colors shadow-sm">
              <div>
                <span className="text-3xl font-extrabold text-[#52C473] block mb-3 font-mono">03</span>
                <h4 className="text-sm font-bold text-slate-900">Emissão e organização</h4>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed font-semibold">
                  Centralizamos documentos, reservas, seguros, dados de viajantes e informações essenciais.
                </p>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 relative z-10 flex flex-col justify-between hover:border-[#52C473]/50 transition-colors shadow-sm">
              <div>
                <span className="text-3xl font-extrabold text-[#52C473] block mb-3 font-mono">04</span>
                <h4 className="text-sm font-bold text-slate-900">Acompanhamento</h4>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed font-semibold">
                  Enviamos orientações, lembretes, suporte e acompanhamento ativo antes e durante a viagem.
                </p>
              </div>
            </div>

            {/* Etapa 5 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 relative z-10 flex flex-col justify-between hover:border-[#52C473]/50 transition-colors shadow-sm">
              <div>
                <span className="text-3xl font-extrabold text-[#52C473] block mb-3 font-mono">05</span>
                <h4 className="text-sm font-bold text-slate-900">Relatórios e melhoria</h4>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed font-semibold">
                  Entregamos dados estruturados para controle de custos, economia real e gestão estratégica contínua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Seção de Feedbacks / Depoimentos Reais com Alto Contraste */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/5 px-3.5 py-1.5 rounded-full border border-primary/15">
              Depoimentos de Clientes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 tracking-tight font-display">
              O que nossos clientes percebem na prática
            </h2>
            <p className="text-slate-700 mt-3 text-base md:text-lg font-medium">
              Veja a opinião de gestores e administradores que confiam a logística de suas equipes à MetaMundi.
            </p>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {METAMUNDI_DATA.feedbacks.map((fb, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#52C473]/40 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Estrelas */}
                  <div className="flex gap-1 text-[#52C473]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#52C473] text-[#52C473]" />
                    ))}
                  </div>
                  <p className="text-slate-800 text-sm md:text-base leading-relaxed italic font-semibold">
                    "{fb.quote}"
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-extrabold text-base">
                    {fb.author[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900">{fb.author}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-bold">{fb.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Seção de Confiança, Compliance e Segurança (Fundo Branco com Imagem Ultra-HD) */}
      <section className="py-24 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Imagem Ultra-HD à Esquerda com Excelente Definição */}
            <div className="lg:col-span-5">
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-2xl relative">
                <img 
                  src={METAMUNDI_DATA.images.businesswoman} 
                  alt="Executiva real trabalhando em aeroporto em altíssima definição" 
                  className="w-full h-full object-cover filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-lg">
                  <span className="text-xs font-extrabold text-emerald-800 uppercase block">Responsabilidade Operacional</span>
                  <p className="text-xs text-slate-800 mt-1.5 font-bold">Notas fiscais, faturamento corporativo e total rastreabilidade.</p>
                </div>
              </div>
            </div>

            {/* Conteúdo à Direita */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#52C473] tracking-widest uppercase bg-[#52C473]/10 px-3 py-1 rounded-full border border-[#52C473]/20">
                Compliance e Segurança
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-display">
                Segurança para empresas que precisam de controle
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                Empresas que viajam precisam de mais do que preço. Precisam de previsibilidade, documentação robusta, notas fiscais, rastreabilidade, suporte ativo e total responsabilidade operacional.
              </p>

              {/* Lista de Compliance com Alta Legibilidade */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-800 font-bold">
                  <Check className="w-4.5 h-4.5 text-[#52C473] shrink-0" />
                  <span>Emissão de notas fiscais simplificada</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-800 font-bold">
                  <Check className="w-4.5 h-4.5 text-[#52C473] shrink-0" />
                  <span>Organização documental e prestação de contas</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-800 font-bold">
                  <Check className="w-4.5 h-4.5 text-[#52C473] shrink-0" />
                  <span>Histórico completo de solicitações</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-800 font-bold">
                  <Check className="w-4.5 h-4.5 text-[#52C473] shrink-0" />
                  <span>Relatórios financeiros detalhados</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-800 font-bold">
                  <Check className="w-4.5 h-4.5 text-[#52C473] shrink-0" />
                  <span>Suporte para contratos corporativos complexos</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-800 font-bold">
                  <Check className="w-4.5 h-4.5 text-[#52C473] shrink-0" />
                  <span>Controle rígido por centro de custo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Seção de Blog / Insights */}
      <BlogSection />

      {/* 12. CTA Final / Formulário de Diagnóstico */}
      <DiagnosticForm />

      {/* Modais de Serviço Detalhado */}
      <ServiceModals 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType={selectedServiceModal}
      />
    </Layout>
  );
}
