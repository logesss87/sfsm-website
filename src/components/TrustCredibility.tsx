import { ShieldCheck, FileText, Award } from 'lucide-react';

export default function TrustCredibility() {
  return (
    <section className="py-16 md:py-24 bg-warm-white text-deep-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Story & Leadership */}
          <div>
            <h2 className="text-4xl md:text-5xl font-hero text-deep-navy mb-6">
              Built on Trust. Proven by Results.
            </h2>
            <div className="prose prose-lg text-deep-navy/80 mb-10">
              <p>
                "I founded Security & Fire Safety Mgmt Pte Ltd after witnessing firsthand how unreliable contractors compromised the safety of commercial properties. We didn't want to be just another agency filling shifts; we wanted to provide highly trained professionals who act as an extension of your team. Today, we protect numerous sites with an exceptional client retention rate because we never compromise on quality, training, or response times."
              </p>
            </div>
            
            <div className="p-6 bg-soft-grey rounded-lg border border-soft-grey/80">
              <h4 className="text-xl font-heading font-semibold text-deep-navy">Mr Aru</h4>
              <p className="text-deep-navy/70 font-medium">Founder & Managing Director</p>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="bg-soft-grey text-deep-navy p-10 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-soft-grey/80">
            <h3 className="text-2xl font-heading font-semibold mb-8 text-deep-navy">
              Accreditations and Certifications
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-warm-white p-3 rounded-lg border border-soft-grey/80">
                  <ShieldCheck className="w-8 h-8 text-muted-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-1 text-deep-navy">PRD Licensed Agency</h4>
                  <p className="text-deep-navy/70 text-sm">
                    We are a licensed security agency approved by the Police Regulatory Department (PRD).
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
