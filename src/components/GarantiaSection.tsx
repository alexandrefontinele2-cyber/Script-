import { motion } from "motion/react";
import { ShieldAlert, Award, ShieldCheck, Mail, RefreshCw } from "lucide-react";

export default function GarantiaSection() {
  return (
    <section className="py-24 bg-white text-academy-blue border-t border-academy-blue/5 relative overflow-hidden" id="garantia">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_bottom_right,rgba(197,168,112,0.06),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Double Column Layout or Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center" id="garantia-grid">
          
          {/* Visual column: Luxury Guarantee Stamp */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              {/* Spinning or accent gold lighting */}
              <div className="absolute inset-0 bg-academy-gold/10 rounded-full filter blur-xl animate-pulse" />
              
              {/* Stamp Graphic */}
              <div className="relative w-44 h-44 rounded-full border-2 border-academy-gold flex flex-col items-center justify-center p-4 bg-[#FAF8F5] shadow-lg select-none">
                <div className="absolute inset-2 border border-dashed border-academy-gold/30 rounded-full" />
                
                <Award className="w-8 h-8 text-academy-gold mb-1" />
                <span className="font-serif font-black text-2xl text-academy-blue tracking-tight leading-none">
                  7 DIAS
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#a0844e] uppercase font-bold text-center mt-1">
                  GARANTIA DE LUXO
                </span>
                <span className="text-[8px] font-sans text-academy-blue/40 text-center uppercase tracking-tighter mt-1">
                  Fontenelle Academy
                </span>
              </div>
              
              {/* Tiny floating mini badge */}
              <div className="absolute -bottom-2 -right-2 bg-academy-blue text-[#FAF8F5] rounded-full p-2 border border-academy-gold shadow-md">
                <ShieldCheck className="w-5 h-5 text-academy-gold" />
              </div>
            </div>
          </div>

          {/* Text/Copy Column */}
          <div className="md:col-span-8 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#a0844e] font-semibold">
                SATISFAÇÃO OU DEVOLUÇÃO INTEGRAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-academy-blue leading-tight" id="garantia-title">
                Risco Zero: Garantia Incondicional de 7 Dias
              </h2>
            </div>
            
            <p className="font-sans text-academy-blue/80 text-sm sm:text-base leading-relaxed">
              Eu confio tanto na metodologia da <strong>Fontenelle Academy</strong> que o risco está todo do meu lado. Baixe o Script Comercial. Entregue para a sua recepção usar por 7 dias. Se você notar que o padrão de atendimento e o interesse dos leads não melhoraram drasticamente, basta me enviar um e-mail. Devolvemos 100% do seu dinheiro, sem burocracia e sem perguntas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-mono tracking-wider font-semibold text-academy-blue/60 uppercase">
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <RefreshCw className="w-4 h-4 text-academy-gold" />
                <span>Reembolso 100% Ágil</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-academy-gold" />
                <span>Suporte premium via e-mail</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
