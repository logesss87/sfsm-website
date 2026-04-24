import { Shield, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-hero text-deep-navy mb-4">
              About Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-soft-grey/80 h-full min-h-[400px] md:min-h-[600px]">
              <img 
                src="/officer3.jpeg" 
                alt="Security operations center monitoring" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-8 h-full">
              <div className="bg-soft-grey p-8 md:p-10 rounded-xl border border-soft-grey/80 flex flex-col justify-center flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-heading font-semibold text-deep-navy">Our Mission</h3>
                  <Target className="w-14 h-14 text-muted-gold flex-shrink-0 ml-4" />
                </div>
                <p className="text-deep-navy/80 text-lg leading-relaxed">
                  To provide unparalleled security solutions that ensure the safety, peace of mind, and operational continuity of our clients.
                </p>
              </div>
              <div className="bg-soft-grey p-8 md:p-10 rounded-xl border border-soft-grey/80 flex flex-col justify-center flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-heading font-semibold text-deep-navy">Our Commitment</h3>
                  <Award className="w-14 h-14 text-muted-gold flex-shrink-0 ml-4" />
                </div>
                <p className="text-deep-navy/80 text-lg leading-relaxed">
                  We are steadfast in our commitment to safety and professionalism, continuously training our staff to meet the highest industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
