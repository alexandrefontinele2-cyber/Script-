import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "O Script serve para qualquer tipo de procedimento?",
      answer: "Sim. Ele foi estruturado com base na psicologia de compra de serviços estéticos (injetáveis, tecnologias, tratamentos corporais e faciais)."
    },
    {
      id: "faq-2",
      question: "Como eu recebo o material?",
      answer: "O acesso é imediato. Assim que o pagamento for aprovado, você recebe um e-mail com os dados de acesso para baixar o material em PDF e começar a usar hoje mesmo."
    },
    {
      id: "faq-3",
      question: "Minha secretária não tem experiência com vendas, ela vai conseguir usar?",
      answer: "Com certeza. O material foi desenhado de forma didática, com exemplos práticos de 'o que o cliente diz' e 'o que a recepção responde'. É um guia passo a passo pronto para execução imediata."
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-[#FAF8F5] text-academy-blue border-t border-academy-blue/5" id="perguntas-frequentes">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#a0844e] font-bold">
              ESCLAREÇA TODAS SUAS DÚVIDAS
            </span>
            <div className="w-12 h-[1px] bg-academy-gold/40 mt-1" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-academy-blue" id="faq-title">
            Perguntas Frequentes
          </h2>
          <p className="text-xs sm:text-sm text-academy-blue/60 font-sans">
            Selecione uma das questões operacionais comuns para entender o fluxo de entrega.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4" id="faq-accordion-group">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`bg-white rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? "border-academy-gold/40 shadow-md" 
                    : "border-academy-blue/5 hover:border-academy-gold/20"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-serif text-base sm:text-lg font-medium tracking-wide text-academy-blue focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  id={`btn-${faq.id}`}
                >
                  <span className="pr-2">{faq.question}</span>
                  <div className={`p-1 rounded-full flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-academy-gold text-academy-blue rotate-180" : "bg-[#FAF8F5] text-academy-blue"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  id={`answer-box-${faq.id}`}
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-academy-blue/75 font-sans leading-relaxed border-t border-academy-blue/5 mt-0.5">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Contact/Support footer indicator */}
        <div className="mt-16 text-center text-xs text-academy-blue/50 flex flex-col sm:flex-row items-center justify-center gap-2 font-mono">
          <HelpCircle className="w-4 h-4 text-academy-gold" />
          <span>Restou alguma dúvida? Fale conosco em:</span>
          <a 
            href={`mailto:${"suporte@fontenelleacademy.com"}`}
            className="text-academy-gold-dark hover:text-academy-gold underline font-semibold transition-colors"
          >
            suporte@fontenelleacademy.com
          </a>
        </div>

      </div>
    </section>
  );
}
