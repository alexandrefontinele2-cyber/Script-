import { motion } from "motion/react";
import { MessageSquare, AlertTriangle, HelpCircle, XCircle } from "lucide-react";

export default function DiagnosticSection() {
  return (
    <section className="py-20 bg-[#f4f1ec] text-academy-blue" id="diagnostico">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center flex-col items-center">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-academy-gold font-semibold mb-2">
              DIAGNÓSTICO OPERACIONAL
            </span>
            <div className="w-12 h-[1px] bg-academy-gold/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-academy-blue leading-tight" id="diagnostic-title">
            O seu WhatsApp vive lotado de mensagens, mas a sua agenda continua com buracos?
          </h2>
          <p className="text-academy-blue/70 text-sm sm:text-base font-sans leading-relaxed">
            Seja sincera(o). Quantas vezes por dia a sua equipe repete o diálogo frustrante abaixo?
          </p>
        </div>

        {/* Dynamic Mobile Chat Presentation */}
        <div className="mt-12 max-w-lg mx-auto" id="diagnostic-chat-device">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-academy-blue/5">
            
            {/* Simulated Smartphone Status Bar & Header */}
            <div className="bg-academy-blue text-white px-4 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-academy-gold/10 flex items-center justify-center font-serif text-sm font-semibold text-academy-gold border border-academy-gold/20">
                    LI
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide">Lead Interessada (Botox)</p>
                  <p className="text-[11px] text-white/50 font-mono">Digitando...</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 bg-red-500/10 border border-red-500/30 text-red-500 rounded font-mono uppercase tracking-wider font-semibold">
                  Erro Crítico
                </span>
              </div>
            </div>

            {/* Chat Body simulating the custom conversation */}
            <div className="bg-[#ede8e1] p-4 sm:p-6 space-y-4 min-h-[280px]">
              
              {/* Msg 1 from Lead */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-none p-3 max-w-[85%] text-sm text-academy-blue shadow-sm border border-black/5">
                  <p className="font-medium text-[11px] text-academy-gold mb-1">Lead</p>
                  <p className="font-sans leading-relaxed">Olá, qual o valor do botox / preenchimento?</p>
                  <p className="text-[9px] text-academy-blue/40 text-right mt-1 font-mono">14:32</p>
                </div>
              </div>

              {/* Msg 2 from Reception (Mistake) */}
              <div className="flex justify-end">
                <div className="bg-[#e2f1dd] rounded-2xl rounded-tr-none p-3 max-w-[85%] text-sm text-academy-blue shadow-sm border border-emerald-800/10">
                  <p className="font-medium text-[11px] text-emerald-800 mb-1">Sua Recepção (Fria/Robótica)</p>
                  <p className="font-sans leading-relaxed line-through text-red-700/80 decoration-red-500/50">
                    Olá! Custa R$ X. Quer agendar?
                  </p>
                  <p className="text-[9px] text-academy-blue/40 text-right mt-1 font-mono">14:33</p>
                </div>
              </div>

              {/* Msg 3 from Lead (Silence/Ghosting) */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-none p-3 max-w-[85%] text-sm text-academy-blue shadow-sm border border-black/5">
                  <p className="font-medium text-[11px] text-academy-gold mb-1">Lead</p>
                  <p className="font-sans font-medium italic text-slate-800 leading-relaxed">
                    "Vou dar uma olhadinha com meu marido e aviso."
                  </p>
                  <p className="text-[9px] text-[#db2777] font-semibold text-right mt-1 font-mono">
                    E nunca mais responde...
                  </p>
                </div>
              </div>

            </div>

            {/* Simulated Footer */}
            <div className="p-3 bg-white border-t border-[#ede8e1] flex justify-between items-center text-[11px] text-academy-blue/40">
              <span className="font-mono flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5 text-red-500" />
                Venda perdida instantaneamente
              </span>
              <span className="font-serif italic text-academy-gold">Fontenelle Academy</span>
            </div>

          </div>
        </div>

        {/* Copy closing under diagnosis */}
        <div className="mt-12 text-center max-w-2xl mx-auto space-y-6">
          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-md text-left">
            <p className="text-sm font-sans text-red-900 leading-relaxed">
              <strong>O diagnóstico é claro:</strong> O erro não está no seu marketing ou no tráfego pago que você compra. O erro está no <strong>processo comercial da sua recepção</strong>. Mandar o preço logo de cara sem gerar valor mata a sua venda.
            </p>
          </div>
          
          <div className="flex justify-center pt-2">
            <div className="text-xs uppercase font-mono tracking-widest text-academy-blue/40">
              SISTEMÁTICA COMERCIAL DE LUXO
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
