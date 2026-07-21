import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { METAMUNDI_DATA } from "@/const";

const INSIGHTS = [
  {
    title: "Como reduzir custos em viagens corporativas sem perder qualidade",
    category: "Economia",
    date: "02 de Junho, 2026",
    readTime: "5 min de leitura",
    excerpt: "Descubra estratégias práticas e inteligentes de inteligência tarifária e políticas internas para otimizar o orçamento de viagens da sua empresa.",
    image: METAMUNDI_DATA.images.lounge
  },
  {
    title: "A importância do atendimento humano de verdade no pós-venda de viagens",
    category: "Gestão",
    date: "28 de Maio, 2026",
    readTime: "4 min de leitura",
    excerpt: "Por que os bots e buscadores online falham quando sua equipe mais precisa de suporte ativo em aeroportos e conexões complexas.",
    image: METAMUNDI_DATA.images.businesswoman
  },
  {
    title: "Guia prático: Como desenhar uma política de viagens corporativas eficiente",
    category: "Compliance",
    date: "15 de Maio, 2026",
    readTime: "7 min de leitura",
    excerpt: "Passo a passo completo para criar diretrizes claras de reembolsos, limites de gastos por cargo e aprovações sem burocratizar a operação.",
    image: METAMUNDI_DATA.images.meeting
  }
];

export default function BlogSection() {
  return (
    <section id="insights" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#52C473] tracking-widest uppercase bg-[#52C473]/10 px-3.5 py-1.5 rounded-full border border-[#52C473]/20">
              MetaMundi Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight font-display">
              Conteúdos e Inteligência de Viagens
            </h2>
            <p className="text-slate-300 mt-3 text-base md:text-lg font-medium">
              Artigos, guias e insights preparados por nossos especialistas para ajudar sua empresa a gerir melhor, economizar e viajar com segurança.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0 border-slate-800 text-slate-200 hover:text-white hover:bg-slate-900 group font-bold bg-slate-950/40 backdrop-blur-sm"
          >
            Ver todos os artigos
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#52C473]" />
          </Button>
        </div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS.map((post, idx) => (
            <article 
              key={idx} 
              className="bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-[#52C473]/30 transition-all group flex flex-col h-full shadow-lg"
            >
              {/* Imagem de Capa */}
              <div className="aspect-video relative overflow-hidden bg-slate-950">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter brightness-90 contrast-105"
                />
                <div className="absolute top-3 left-3 bg-[#52C473] text-slate-950 text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded">
                  {post.category}
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta dados com excelente legibilidade */}
                <div className="flex items-center space-x-4 text-xs text-slate-300 mb-3 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#52C473]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#52C473]" />
                    {post.readTime}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#52C473] transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Resumo com excelente contraste */}
                <p className="text-sm text-slate-200 leading-relaxed line-clamp-3 mb-6 font-medium">
                  {post.excerpt}
                </p>

                {/* Link para ler mais */}
                <div className="mt-auto pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-300 font-bold group-hover:text-[#52C473] transition-colors">
                  <span>Ler artigo completo</span>
                  <ArrowUpRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 group-hover:-translate-y-0.5 transition-all text-[#52C473]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
