import { motion } from "motion/react";
import { ArrowRight, Star, ShieldCheck, Award } from "lucide-react";

interface HeroSectionProps {
  onBuyClick: () => void;
}

export default function HeroSection({ onBuyClick }: HeroSectionProps) {
  return (
    <header className="relative overflow-hidden bg-academy-blue text-white py-12 lg:py-24" id="inicio">
      {/* Editorial Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,112,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[radial-gradient(circle,rgba(197,168,112,0.08),transparent_70%)] pointer-events-none" />
      
      {/* Top Premium Logo Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-6 gap-4">
          <div className="flex flex-col items-center sm:items-start select-none">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-academy-gold uppercase">
              FONTENELLE<span className="font-light text-white ml-2">ACADEMY</span>
            </span>
            <span className="text-[10px] tracking-[0.3em] font-mono text-white/50 uppercase mt-0.5">
              ESTÉTICA DE ALTO PADRÃO
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-academy-gold-light">
            <Award className="w-3.5 h-3.5 text-academy-gold" />
            <span>Formação Comercial de Luxo</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Headline and Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Super-headline */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-academy-gold/10 border border-academy-gold/25 rounded-md text-academy-gold-light text-xs sm:text-sm font-medium tracking-wide uppercase"
              id="super-headline"
            >
              Para donos de clínicas de estética, biomédicos, dermatologistas e gestores
            </motion.div>

            {/* Headline Principal */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-[1.12] text-white"
              id="main-headline"
            >
              Pare de rasgar dinheiro no WhatsApp: O passo a passo exato para sua recepção <span className="text-transparent bg-clip-text bg-gradient-to-r from-academy-gold-light via-academy-gold to-academy-gold-dark font-semibold">transformar "curiosos de preço" em avaliações confirmadas.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
              id="sub-headline"
            >
              Chega de respostas automáticas frias que fazem o lead sumir. Tenha em mãos o método de abordagem e quebra de objeções desenhado exclusivamente para o mercado de estética.
            </motion.p>

            {/* CTA Button and trust badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-4 space-y-4"
              id="cta-block"
            >
              <button
                onClick={onBuyClick}
                id="hero-cta-btn"
                className="w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-academy-gold to-academy-gold-dark hover:from-academy-gold-light hover:to-academy-gold hover:shadow-[0_0_24px_rgba(197,168,112,0.4)] text-academy-blue font-bold tracking-wide rounded-md transition-all duration-300 transform hover:-translate-y-0.5 text-sm uppercase shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Quero comprar o Script por apenas R$ 67
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </button>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/60 pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="flex text-academy-gold select-none">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </span>
                  +1.400 clínicas treinadas
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline" />
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-academy-gold" />
                  Download imediato em PDF
                </span>
              </div>
            </motion.div>
          </div>

          {/* Visual Element: Elegant 3D Mockup of Smartphone & Tablet showing Book cover */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md"
              id="mockup-container"
            >
              {/* Backglow for luxury feel */}
              <div className="absolute inset-0 bg-academy-gold/15 rounded-full filter blur-3xl pointer-events-none transform -translate-y-6" />
              
              <div className="relative border border-white/10 rounded-2xl p-3 bg-white/[0.02] backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/src/assets/images/script_mockup_1779373725495.png"
                  alt="Script Comercial Avançado para Clínicas de Estética"
                  className="w-full h-auto rounded-xl object-contain shadow-inner"
                  referrerPolicy="no-referrer"
                  id="hero-mockup-img"
                />
                
                {/* Premium floating badge */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-academy-blue-light border border-academy-gold/35 text-white p-3 rounded-lg shadow-xl flex items-center gap-3">
                  <div className="p-2 bg-academy-gold/10 rounded-full">
                    <span className="font-serif font-bold text-academy-gold text-lg leading-none">R$67</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-academy-gold">Acesso Vitalício</p>
                    <p className="text-[11px] font-sans text-white/80 font-medium">Sem mensalidades</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </header>
  );
}
