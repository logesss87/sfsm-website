import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-deep-navy text-warm-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-full lg:max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] leading-tight mb-6 tracking-tight text-muted-gold">
            Reliable Security Services for Residential, Commercial and Industrial Properties in Singapore
          </h1>
          
          <p className="text-lg md:text-xl text-soft-grey mb-8 max-w-4xl mx-auto leading-relaxed">
            Security & Fire Safety Mgmt Pte Ltd (SFSM) is a Singapore-based security services company providing dependable and professional security solutions tailored to each client’s needs. Backed by strong industry experience, we are committed to maintaining safe, secure, and well-managed environments through a combination of trained personnel, practical technology, and responsive service support.
          </p>

          {/* Trust Bar Below Headline */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-10 text-sm font-heading font-medium text-warm-white">
            <span className="flex items-center gap-1.5 bg-deep-navy/80 backdrop-blur-sm px-4 py-2 rounded-full border border-muted-gold/30">
              <ShieldCheck className="w-4 h-4 text-muted-gold" /> PRD Licensed
            </span>
            <span className="flex items-center gap-1.5 bg-deep-navy/80 backdrop-blur-sm px-4 py-2 rounded-full border border-muted-gold/30">
              <Clock className="w-4 h-4 text-muted-gold" /> 24/7 Response
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
