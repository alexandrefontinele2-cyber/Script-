import { useState, type RefObject } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Flame, CreditCard, Lock, Sparkles, CheckCircle, Calculator } from "lucide-react";

interface OfferSectionProps {
  checkoutRef: RefObject<HTMLDivElement | null>;
}

export default function OfferSection({ checkoutRef }: OfferSectionProps) {
  // Mini Interactive loss calculator state
  const [procedureCost, setProcedureCost] = useState(1200); // Default Botox avg price
  const [lostPerWeek, setLostPerWeek] = useState(2); // Default 2 lost clients

  const monthlyLoss = procedureCost * lostPerWeek * 4;

  const procedures = [
    { label: "Aplicação de Botox (R$ 1.200)", value: 1200 },
    { label: "Preenchimento Labial (R$ 1.500)", value: 1500 },
    { label: "Bioestimulador de Colágeno (R$ 2.200)", value: 2200 },
    { label: "Sessão de Lavieen (R$ 800)", value: 800 },
    { label: "Procedimento Geral Custom (R$ 1.000)", value: 1000 },
  ];

  const handleCheckoutRedirect = () => {
    // Open standard secure billing flow or show feedback
    alert(
      "Você está sendo redirecionado de forma segura para a página de pagamento e checkout da Kiwify/Hotmart da Fontenelle Academy..."
    );
  };

  return (
    <section className="py-24 bg-[#FAF8F5] text-academy-blue border-t border-academy-blue/5 relative" ref={checkoutRef} id="oferta">
      <div className="absolute top-0 left-0 w-80 h-80 bg-[radial-gradient(circle,rgba(197,168,112,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-academy-gold font-bold">
              ESTUDO DE RETORNO SOBRE O INVESTIMENTO
            </span>
            <div className="w-12 h-[1px] bg-academy-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-academy-blue" id="offer-title">
            Quanto custa perder apenas 2 clientes de botox por semana na sua clínica?
          </h2>
          <p className="text-sm sm:text-base text-academy-blue/80 font-sans leading-relaxed">
            Se a sua recepção deixa de converter apenas dois clientes por semana por falta de um roteiro certo, você está deixando milhares de reais na mesa todos os meses. Contratar uma consultoria comercial exclusiva para treinar sua equipe custaria caro e exigiria tempo. Mas você pode começar a mudar o cenário do seu faturamento hoje pelo preço de um lanche.
          </p>
        </div>

        {/* Dynamic Loss Calculator Pane */}
        <div className="bg-white/70 backdrop-blur-md border border-academy-gold/25 rounded-2xl p-6 sm:p-8 mb-16 shadow-lg max-w-3xl mx-auto" id="loss-calc-widget">
          <div className="flex items-center gap-3 border-b border-academy-blue/5 pb-4 mb-6">
            <Calculator className="w-5 h-5 text-academy-gold" />
            <h3 className="font-serif text-lg font-medium tracking-wide">
              Simulador de Perda Comercial Silenciosa
            </h3> 
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {/* Selector 1 */}
              <div>
                <label className="block text-xs font-mono tracking-wider text-academy-blue/60 mb-2 uppercase">
                  1. SELECIONE O TRATAMENTO PRINCIPAL:
                </label>
                <select 
                  value={procedureCost} 
                  onChange={(e) => setProcedureCost(Number(e.target.value))}
                  className="w-full bg-[#FAF8F5] border border-academy-blue/10 rounded-md p-3 text-sm font-medium focus:ring-1 focus:ring-academy-gold focus:border-academy-gold focus:outline-none"
                  id="select-procedure"
                >
                  {procedures.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selector 2 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono tracking-wider text-academy-blue/60 uppercase">
                    2. LEADS QUE SEU WHATSAPP PERDE POR SEMANA:
                  </label>
                  <span className="text-sm font-semibold text-academy-blue bg-academy-gold/10 px-2 py-0.5 rounded">
                    {lostPerWeek} por semana
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={lostPerWeek} 
                  onChange={(e) => setLostPerWeek(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#eae5dc] rounded-lg appearance-none cursor-pointer accent-academy-gold"
                  id="slider-lost"
                />
                <div className="flex justify-between text-[10px] text-academy-blue/50 font-mono mt-1">
                  <span>1 lead</span>
                  <span>10 leads</span>
                </div>
              </div>
            </div>

            {/* Results Callout */}
            <div className="bg-academy-blue text-white p-6 rounded-xl space-y-4 text-center md:text-left border-l-4 border-academy-gold">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-academy-gold">
                Prejuízo Estimado na sua Clínica
              </span>
              <div>
                <p className="text-4xl font-serif font-semibold tracking-tight text-academy-gold">
                  R$ {monthlyLoss.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-white/50 font-mono mt-0.5">
                  DEIXADOS NA MESA TODO MÊS
                </p>
              </div>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Este valor equivale a perder aproximadamente <strong>{lostPerWeek * 4} procedimentos</strong> de alto valor por mês, simplesmente por falta de uma recepção treinada e padronizada.
              </p>
            </div>
          </div>
        </div>

        {/* Central Irresistible Price Box */}
        <div className="max-w-md mx-auto text-center" id="price-card-box">
          <div className="relative bg-academy-blue text-white rounded-2xl border border-academy-gold shadow-2xl p-8 overflow-hidden">
            {/* Elegant luxury top gradient line */}
            <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-academy-gold via-academy-gold-light to-academy-gold-dark" />
            
            {/* Scarcity badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-academy-gold/10 border border-academy-gold/25 rounded-full text-[10px] font-mono tracking-wider text-academy-gold uppercase font-semibold mb-6">
              <Flame className="w-3.5 h-3.5 text-academy-gold animate-bounce" />
              Oferta Especial de Lançamento
            </div>

            <p className="font-serif text-lg tracking-wide text-white/80">
              Script Comercial "Harmonização das Vendas"
            </p>
            <div className="border-b border-white/5 my-4 pb-4">
              <p className="text-sm text-white/40 line-through">
                De R$ 197,00 por apenas
              </p>
              {/* Promo Price */}
              <p className="text-5xl sm:text-6xl font-serif font-black tracking-tight text-academy-gold my-2" id="price-promo">
                R$ 67,00
              </p>
              <p className="text-xs text-white/60 font-sans">
                ou até <span className="text-academy-gold-light font-bold">7x de R$ 10,50</span> no cartão de crédito
              </p>
            </div>

            {/* List of checkout highlights */}
            <ul className="text-left space-y-2.5 text-xs text-white/80 my-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-academy-gold flex-shrink-0" />
                <span>Roteiro "copia e cola" imediato em PDF</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-academy-gold flex-shrink-0" />
                <span>Garantia total incondicional de 7 dias</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-academy-gold flex-shrink-0" />
                <span>Acesso vitalício sem cobranças adicionais</span>
              </li>
            </ul>

            {/* High Conversion Purchase Button */}
            <button
              onClick={handleCheckoutRedirect}
              id="buy-now-cta-btn"
              className="w-full px-6 py-4.5 bg-gradient-to-r from-academy-gold to-academy-gold-dark hover:from-academy-gold-light hover:to-academy-gold text-academy-blue font-bold tracking-widest uppercase rounded-lg shadow-xl cursor-pointer hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              [ QUERO ENCHER A AGENDA DA MINHA CLÍNICA ]
            </button>

            {/* Credit cards / SSL Secure Indicator */}
            <div className="mt-6 flex flex-col items-center gap-2 text-[10px] text-white/40 font-mono">
              <div className="flex items-center gap-1.5 justify-center">
                <Lock className="w-3 h-3 text-academy-gold/80" />
                <span>PAGAMENTO 100% MONITORADO E SEGURO</span>
              </div>
              <div className="flex gap-2.5 items-center justify-center opacity-60">
                <CreditCard className="w-4 h-4" />
                <span>PIX, Cartão (até 7x) ou Boleto</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
