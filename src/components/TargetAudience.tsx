import { motion } from "motion/react";
import { UserCheck2, ClipboardPlus, TrendingUp, Sparkles } from "lucide-react";

export default function TargetAudience() {
  const cards = [
    {
      id: "target-card-1",
      icon: UserCheck2,
      subtitle: "GESTORES & PROPRIETÁRIOS",
      text: "É dono(a) de clínica e sente que a sua equipe perde vendas fáceis todos os dias por falta de treinamento comercial específico."
    },
    {
      id: "target-card-2",
      icon: ClipboardPlus,
      subtitle: "PROFISSIONAL AUTÔNOMO",
      text: "É o profissional técnico (médico, biomédico, esteticista) que ainda atende o próprio WhatsApp e quer otimizar seu tempo com mensagens padronizadas e altamente conversivas."
    },
    {
      id: "target-card-3",
      icon: TrendingUp,
      subtitle: "MAXIMIZAÇÃO DE RECEITA",
      text: "Quer aumentar a taxa de comparecimento das avaliações que são agendadas e hoje dão 'bolo', convertendo contatos frios em faturamento real."
    }
  ];

  return (
    <section className="py-24 bg-academy-blue text-white relative overflow-hidden" id="para-quem-e">
      {/* Editorial aesthetic backlights */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(197,168,112,0.06),transparent_80%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono tracking-[0.25em] text-academy-gold font-bold uppercase mb-2">
              Perfil Ideal de Cliente
            </span>
            <div className="w-10 h-[1px] bg-academy-gold/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight" id="target-title">
            Este Script é para você se...
          </h2>
          <p className="text-white/60 font-sans text-sm sm:text-base max-w-2xl mx-auto">
            Identifique-se abaixo e descubra se a metodologia comercial de alto padrão da Fontenelle Academy se encaixa na sua realidade atual.
          </p>
        </div>

        {/* 3 Parallel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="target-cards-grid">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                className="relative bg-academy-blue-light border border-white/5 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-academy-gold/20 flex flex-col justify-between group"
              >
                {/* Visual order number indicator */}
                <div className="absolute top-4 right-6 text-5xl font-serif font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors font-mono select-none">
                  0{idx + 1}
                </div>

                <div className="space-y-6">
                  {/* Decorative Header icon */}
                  <div className="w-10 h-10 rounded-full bg-academy-gold/10 border border-academy-gold/20 flex items-center justify-center text-academy-gold shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-3">
                    {/* Card Subtitle */}
                    <p className="text-[10px] font-mono tracking-widest text-academy-gold uppercase font-semibold">
                      {card.subtitle}
                    </p>
                    {/* Card Body Text */}
                    <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>

                {/* Aesthetic status bottom dot */}
                <div className="pt-8 flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider font-semibold text-white/40">
                  <Sparkles className="w-3 h-3 text-academy-gold/80" />
                  <span>Pronto para Aplicar</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick bottom statistic or trust banner */}
        <div className="mt-16 text-center text-xs text-white/40 font-mono tracking-widest uppercase">
          ✦ SISTEMA PARA DESBLOQUEAR O SUPREMO CRESCIMENTO ✦
        </div>

      </div>
    </section>
  );
}
