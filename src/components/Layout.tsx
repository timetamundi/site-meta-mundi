import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { METAMUNDI_DATA } from "@/const";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Linkedin, 
  Instagram, 
  MessageSquare,
  ArrowUp,
  Globe
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // height of header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Header Superior (Contato Rápido) */}
      <div className="bg-slate-950 text-slate-400 text-xs py-2 border-b border-slate-900 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#52C473]" />
              Gestão Global de Viagens Corporativas
            </span>
            <a href={`mailto:${METAMUNDI_DATA.contact.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#52C473]" />
              {METAMUNDI_DATA.contact.email}
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a href={`tel:${METAMUNDI_DATA.contact.phones.ce.replace(/\D/g, "")}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#52C473]" />
              {METAMUNDI_DATA.contact.phones.ce} (CE)
            </a>
            <a href={`tel:${METAMUNDI_DATA.contact.phones.rj.replace(/\D/g, "")}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#52C473]" />
              {METAMUNDI_DATA.contact.phones.rj} (RJ)
            </a>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-900 py-3 shadow-lg" 
            : "bg-slate-950 border-b border-slate-900/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Oficial da MetaMundi */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src={METAMUNDI_DATA.images.logoWhite} 
                alt="Logo MetaMundi" 
                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a 
                href="#sobre" 
                onClick={(e) => handleNavClick(e, "sobre")}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Quem Somos
              </a>
              <a 
                href="#solucoes" 
                onClick={(e) => handleNavClick(e, "solucoes")}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Soluções
              </a>
              <a 
                href="#setores" 
                onClick={(e) => handleNavClick(e, "setores")}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Setores
              </a>
              <a 
                href="#comparacao" 
                onClick={(e) => handleNavClick(e, "comparacao")}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Diferenciais
              </a>
              <a 
                href="#como-funciona" 
                onClick={(e) => handleNavClick(e, "como-funciona")}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Como Funciona
              </a>
              <a 
                href="#insights" 
                onClick={(e) => handleNavClick(e, "insights")}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Insights
              </a>
            </nav>

            {/* CTAs Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="#diagnostico" 
                onClick={(e) => handleNavClick(e, "diagnostico")}
                className="text-xs font-bold text-slate-300 hover:text-white transition-colors"
              >
                Solicitar Proposta
              </a>
              <Button 
                size="sm" 
                className="bg-[#52C473] hover:bg-[#43B362] text-slate-950 font-bold px-5 py-2 rounded-lg shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-[0.98] transition-all"
                onClick={() => {
                  const el = document.getElementById("diagnostico");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Falar com Especialista
              </Button>
            </div>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-slate-400 hover:text-white p-2"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-t border-slate-900 px-4 pt-4 pb-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#sobre" 
                onClick={(e) => handleNavClick(e, "sobre")}
                className="text-sm font-medium text-slate-300 hover:text-white py-1"
              >
                Quem Somos
              </a>
              <a 
                href="#solucoes" 
                onClick={(e) => handleNavClick(e, "solucoes")}
                className="text-sm font-medium text-slate-300 hover:text-white py-1"
              >
                Soluções
              </a>
              <a 
                href="#setores" 
                onClick={(e) => handleNavClick(e, "setores")}
                className="text-sm font-medium text-slate-300 hover:text-white py-1"
              >
                Setores
              </a>
              <a 
                href="#comparacao" 
                onClick={(e) => handleNavClick(e, "comparacao")}
                className="text-sm font-medium text-slate-300 hover:text-white py-1"
              >
                Diferenciais
              </a>
              <a 
                href="#como-funciona" 
                onClick={(e) => handleNavClick(e, "como-funciona")}
                className="text-sm font-medium text-slate-300 hover:text-white py-1"
              >
                Como Funciona
              </a>
              <a 
                href="#insights" 
                onClick={(e) => handleNavClick(e, "insights")}
                className="text-sm font-medium text-slate-300 hover:text-white py-1"
              >
                Insights
              </a>
            </nav>
            <div className="pt-4 border-t border-slate-900 flex flex-col gap-3">
              <a 
                href="#diagnostico" 
                onClick={(e) => handleNavClick(e, "diagnostico")}
                className="text-center text-sm font-semibold text-slate-300 hover:text-white py-2"
              >
                Solicitar Proposta
              </a>
              <Button 
                className="w-full bg-[#52C473] hover:bg-[#43B362] text-slate-950 font-bold py-5"
                onClick={() => {
                  const el = document.getElementById("diagnostico");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Rodapé Corporativo */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Coluna 1: Branding */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="flex items-center space-x-3 group">
                <img 
                  src={METAMUNDI_DATA.images.logoWhite} 
                  alt="Logo MetaMundi" 
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
                A MetaMundi é uma agência de viagens corporativas especializada em organizar a logística de empresas privadas, terceiro setor e setor público com foco em controle, conformidade fiscal e economia inteligente.
              </p>
              <div className="text-[10px] text-slate-500">
                © {new Date().getFullYear()} MetaMundi Soluções para Viagens. Todos os direitos reservados.
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Navegação
              </h3>
              <ul className="space-y-2 text-xs">
                <li><a href="#sobre" onClick={(e) => handleNavClick(e, "sobre")} className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href="#solucoes" onClick={(e) => handleNavClick(e, "solucoes")} className="hover:text-white transition-colors">Soluções</a></li>
                <li><a href="#setores" onClick={(e) => handleNavClick(e, "setores")} className="hover:text-white transition-colors">Setores</a></li>
                <li><a href="#comparacao" onClick={(e) => handleNavClick(e, "comparacao")} className="hover:text-white transition-colors">Diferenciais</a></li>
                <li><a href="#como-funciona" onClick={(e) => handleNavClick(e, "como-funciona")} className="hover:text-white transition-colors">Como Funciona</a></li>
              </ul>
            </div>

            {/* Coluna 3: Setores */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Setores Atendidos
              </h3>
              <ul className="space-y-2 text-xs">
                <li><a href="#setores" onClick={(e) => handleNavClick(e, "setores")} className="hover:text-white transition-colors">Terceiro Setor & ONGs</a></li>
                <li><a href="#setores" onClick={(e) => handleNavClick(e, "setores")} className="hover:text-white transition-colors">Setor Público & Consórcios</a></li>
                <li><a href="#setores" onClick={(e) => handleNavClick(e, "setores")} className="hover:text-white transition-colors">Empresas Privadas & Startups</a></li>
                <li><a href="#setores" onClick={(e) => handleNavClick(e, "setores")} className="hover:text-white transition-colors">Eventos, Grupos e Missões</a></li>
              </ul>
            </div>

            {/* Coluna 4: Contato */}
            <div className="space-y-4 lg:col-span-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Canais de Atendimento
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#52C473] mt-0.5 shrink-0" />
                  <a href={`mailto:${METAMUNDI_DATA.contact.email}`} className="hover:text-white transition-colors break-all">
                    {METAMUNDI_DATA.contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#52C473] mt-0.5 shrink-0" />
                  <div className="flex flex-col space-y-1">
                    <a href={`tel:${METAMUNDI_DATA.contact.phones.ce.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                      {METAMUNDI_DATA.contact.phones.ce} (CE)
                    </a>
                    <a href={`tel:${METAMUNDI_DATA.contact.phones.rj.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                      {METAMUNDI_DATA.contact.phones.rj} (RJ)
                    </a>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  Siga-nos
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/metamundi-solucoes-para-viagens/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-all"
                    title="Acesse nosso LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={METAMUNDI_DATA.contact.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-all"
                    title="Siga-nos no Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Legais */}
          <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex space-x-6">
              <a href="#privacidade" className="hover:text-slate-300 transition-colors">Política de Privacidade</a>
              <a href="#termos" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
              <a href="#diagnostico" className="hover:text-slate-300 transition-colors">Solicitar Diagnóstico</a>
            </div>
            <div>
              Desenvolvido com excelência técnica para MetaMundi.
            </div>
          </div>
        </div>

        {/* Botão Flutuante do WhatsApp */}
        <a
          href={`https://wa.me/5585999030195?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20de%20viagens%20corporativas%20para%20minha%20empresa.`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 group flex items-center gap-2"
          title="Fale conosco pelo WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-sm font-semibold whitespace-nowrap">
            Falar no WhatsApp
          </span>
        </a>

        {/* Botão de Voltar ao Topo */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:bg-slate-800 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </footer>
    </div>
  );
}
