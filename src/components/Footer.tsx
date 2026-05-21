import { ArrowUp, ShieldCheck, Mail, Globe, Award } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-academy-blue text-white/50 py-16 border-t border-white/5 relative z-10" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-center">
          
          {/* Logo Column */}
          <div className="md:col-span-6 space-y-4 text-center md:text-left">
            <div className="select-none">
              <span className="font-serif text-lg font-bold tracking-widest text-[#c5a870] uppercase">
                FONTENELLE<span className="font-light text-white ml-1.5">ACADEMY</span>
              </span>
              <p className="text-[9px] tracking-[0.25em] font-mono text-white/40 uppercase mt-0.5">
                ESTÉTICA E INTELIGÊNCIA COMERCIAL DE LUXO
              </p>
            </div>
            <p className="text-xs text-white/50 max-w-sm leading-relaxed">
              Desenvolvemos metodologias de atendimento comercial de altíssima conversão e processos de excelência operacional para o setor de bem-estar e estética médica premium.
            </p>
          </div>

          {/* Guarantee Badges Column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-2 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#c5a870]">
              Segurança Credenciada
            </span>
            <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/5 px-3 py-2 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-academy-gold" />
              <div className="text-left">
                <p className="font-sans font-semibold text-white/80 leading-none">Processamento Codificado</p>
                <p className="text-[9px] text-white/40">Kiwify/Hotmart Safe Environment</p>
              </div>
            </div>
          </div>

          {/* Scroll to top button */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3.5 bg-white/[0.04] text-academy-gold hover:bg-academy-gold hover:text-academy-blue border border-white/10 rounded-full transition-all duration-300 shadow-md group cursor-pointer"
              title="Voltar ao início"
              id="footer-back-to-top"
            >
              <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Legal Mentions and CNPJ */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[11px] gap-6 text-center md:text-left">
          <div>
            <p className="font-semibold text-white/75">
              © {new Date().getFullYear()} Fontenelle Academy. Todos os direitos reservados.
            </p>
            <p className="text-white/30 mt-1">
              CNPJ: 42.871.982/0001-90 | Termos de Uso e Políticas de Privacidade Aplicados.
            </p>
          </div>
          
          <div className="flex gap-4 font-mono text-[10px] uppercase tracking-wider text-white/30">
            <span>Alta Performance</span>
            <span>•</span>
            <span>Resultados Comprovados</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
