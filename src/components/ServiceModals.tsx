import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Check, BadgeCheck, FileCheck, ArrowRight } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: "corporativo" | "eventos" | "publico" | "terceiro-setor" | null;
}

const SERVICE_DETAILS = {
  corporativo: {
    title: "Gestão de Viagens Corporativas",
    subtitle: "Eficiência operacional, compliance e inteligência de custos para empresas em crescimento.",
    description: "Desenhamos fluxos de aprovação customizados e parametrizamos políticas de viagens sob medida para garantir economia real em todas as emissões.",
    features: [
      "Parametrização completa da política de viagens da empresa",
      "Fluxos de aprovação multinível rápidos via e-mail ou WhatsApp",
      "Faturamento corporativo flexível com prazos customizados",
      "Relatórios mensais detalhados por centro de custo e colaborador",
      "Suporte ativo 24/7 para imprevistos, cancelamentos e remarcações"
    ],
    compliance: "Garantia de conformidade fiscal e governança de dados corporativos (LGPD)."
  },
  eventos: {
    title: "Eventos, Grupos e Missões",
    subtitle: "Logística integrada e coordenação completa de deslocamentos em massa.",
    description: "Seja para um congresso, convenção de vendas, missão internacional ou treinamento de equipe, cuidamos de toda a inteligência logística para que você foque no evento.",
    features: [
      "Bloqueio de tarifas aéreas especiais para grupos",
      "Coordenação de hospedagem em massa com hotéis parceiros",
      "Gestão de transfers terrestres centralizada com monitoramento em tempo real",
      "Suporte exclusivo no local para credenciamento e recepção de palestrantes",
      "Faturamento unificado e relatórios consolidados pós-evento"
    ],
    compliance: "Gestão transparente de orçamentos de eventos com prestação de contas detalhada."
  },
  publico: {
    title: "Setor Público e Contratos Governamentais",
    subtitle: "Conhecimento profundo das regras de licitação, empenho e compliance fiscal.",
    description: "Atendemos prefeituras, autarquias, consórcios de saúde e órgãos públicos com rigoroso respeito às exigências legais, portarias e fluxos orçamentários.",
    features: [
      "Emissão de passagens aéreas em conformidade com as regras públicas",
      "Aceite de notas de empenho e fluxos de faturamento governamental",
      "Atendimento a consórcios públicos de saúde (ICISMEP, etc.)",
      "Prestação de contas simplificada com relatórios e comprovantes organizados",
      "Rastreabilidade total das emissões e justificativas tarifárias"
    ],
    compliance: "Total conformidade com as leis de licitação vigentes e auditorias dos Tribunais de Contas."
  },
  "terceiro-setor": {
    title: "Organizações do Terceiro Setor",
    subtitle: "Máxima economia, transparência e prestação de contas para ONGs e fundações.",
    description: "Entendemos que cada centavo economizado em logística é revertido para o impacto social. Oferecemos soluções focadas em compliance estrito de doadores nacionais e internacionais.",
    features: [
      "Tarifas humanitárias e acordos especiais com cias aéreas parceiras",
      "Adaptação de relatórios às regras de prestação de contas de agências de fomento",
      "Controle rígido de rubricas orçamentárias e projetos específicos",
      "Faturamento customizado alinhado aos repasses de fundos",
      "Suporte especializado para viagens em áreas de difícil acesso ou missões de campo"
    ],
    compliance: "Garantia de auditoria limpa perante financiadores internacionais (UE, USAID, etc.)."
  }
};

export default function ServiceModals({ isOpen, onClose, serviceType }: ServiceModalProps) {
  if (!serviceType) return null;

  const detail = SERVICE_DETAILS[serviceType];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-slate-950 border-slate-900 text-white max-w-2xl p-6 md:p-8 overflow-hidden rounded-2xl">
        <DialogHeader className="space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 text-primary mb-2">
            <BadgeCheck className="w-6 h-6" />
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight font-display text-white">
            {detail.title}
          </DialogTitle>
          <DialogDescription className="text-slate-400 text-sm font-medium">
            {detail.subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <p className="text-sm text-slate-300 leading-relaxed">
            {detail.description}
          </p>

          {/* Lista de Recursos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              O que está incluído na nossa solução:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {detail.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box de Compliance */}
          <div className="bg-slate-900/60 border border-slate-900 rounded-xl p-4 flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Compliance e Auditoria</h5>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{detail.compliance}</p>
            </div>
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="mt-8 pt-4 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-slate-500">
            Fale com nossa equipe técnica para desenhar seu fluxo.
          </span>
          <button
            onClick={() => {
              onClose();
              const el = document.getElementById("diagnostico");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 shadow-md shadow-primary/10 transition-all active:scale-[0.98]"
          >
            Solicitar Proposta Customizada
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
