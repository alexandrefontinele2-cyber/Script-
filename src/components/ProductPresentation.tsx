import { motion } from "motion/react";
import { Sparkles, MessageCircleCode, ArrowUpRight, Compass, Zap, CheckCircle2 } from "lucide-react";

export default function ProductPresentation() {
  const benefits = [
    {
      id: "benefit-1",
      title: "A abordagem de ouro",
      description: "Como responder à clássica pergunta 'Quanto custa?' sem parecer ocioso e gerando desejo imediato pelo tratamento.",
      icon: Sparkles,
      tag: "ESTRATÉGIA PRINCIPAL"
    },
    {
      id: "benefit-2",
      title: "Contorno de Objeções",
      description: "O que falar quando o cliente diz que 'está caro', que 'vai pensar' ou simplesmente some (o famoso ghosting).",
      icon: MessageCircleCode,
      tag: "BLINDAGEM DE VENDAS"
    },
    {
      id: "benefit-3",
      title: "Ancoragem de Valor",
      description: "Como fazer o cliente entender que a sua avaliação vale cada centavo antes mesmo de você falar o preço.",
      icon: Compass,
      tag: "PERCEPÇÃO DE LUXO"
    },
    {
      id: "benefit-4",
      title: "Gatilhos de Escassez",
      description: "Como ativar o senso de urgência na mente do cliente para fechar o agendamento no mesmo dia com elegância.",
      icon: Zap,
      tag: "URGÊNCIA DIRETA"
    }
  ];

  return (
    <section className="py-24 bg-white text-academy-blue relative" id="solucao">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(197,168,112,0.05),transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-academy-blue/10 pb-12 mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-academy-gold font-bold">
                O SCRIPT EXCLUSIVO
              </span>
              <div className="h-[1px] w-8 bg-academy-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-none text-academy-blue-light" id="solucao-title">
              Conheça o Script <span className="font-italic text-academy-gold decoration-academy-gold/20 mr-1 italic">“Harmonização das Vendas”</span> Avançado para Clínicas de Estética
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-academy-blue/70 leading-relaxed lg:border-l border-academy-gold/40 lg:pl-6">
              Desenvolvido pela <strong>Fontenelle Academy</strong>, este não é um guia teórico. É um manual prático, direto ao ponto, no formato "copia e cola", criado especificamente para a realidade de quem vende procedimentos estéticos de alto valor.
            </p>
          </div>
        </div>

        {/* Benefits Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="benefits-grid">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.id}
                id={benefit.id}
                className="group relative bg-[#faf8f5] rounded-xl p-8 border border-academy-blue/5 hover:border-academy-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent line on top hover */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-academy-gold group-hover:w-full transition-all duration-300 rounded-t-xl" />

                <div className="space-y-6">
                  {/* Icon & Label */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-academy-blue text-academy-gold flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#a0844e] uppercase bg-academy-gold/10 px-2 py-1 rounded font-semibold">
                      {benefit.tag}
                    </span>
                  </div>

                  {/* Benefit Core Text */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-academy-blue group-hover:text-[#a0844e] transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-academy-blue/85 leading-relaxed font-sans">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-academy-blue/5 flex items-center justify-between text-xs font-semibold text-academy-blue group-hover:text-[#a0844e] transition-all">
                  <span className="font-mono tracking-wider">MÉTODO FONTENELLE</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-[#fdfbf7] border border-academy-gold/20 px-6 py-4 rounded-xl shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-sans font-medium text-academy-blue">
              Formato ideal para equipes e profissionais que querem <strong>execução rápida e agenda lotada</strong>.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
