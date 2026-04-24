import { ShieldCheck, UserCheck, Clock, Settings } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <UserCheck className="w-6 h-6 text-muted-gold" />,
      title: "Trained Officers",
      description: "Our security personnel undergo rigorous training and are fully licensed to handle diverse security challenges with professionalism."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-muted-gold" />,
      title: "Reliable Service",
      description: "We pride ourselves on punctuality, consistency, and a strong commitment to keeping your premises secure at all times."
    },
    {
      icon: <Clock className="w-6 h-6 text-muted-gold" />,
      title: "Responsive Support",
      description: "Our 24/7 control room ensures rapid response to any incidents, alarms, or emergencies, minimizing risks and downtime."
    },
    {
      icon: <Settings className="w-6 h-6 text-muted-gold" />,
      title: "Tailored Security Solutions",
      description: "We understand that every property is unique. We customize our security plans to meet your specific operational needs."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-hero text-deep-navy">
            Why Choose Us?
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          <div className="w-full md:w-5/12 flex">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-soft-grey/80 w-full h-full min-h-[400px]">
              <img 
                src="/officer1.jpeg" 
                alt="Experienced security professional" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="w-full md:w-7/12 flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-soft-grey p-6 md:p-8 rounded-xl border border-soft-grey/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-start">
                  <div className="bg-warm-white w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 md:mb-6 border border-muted-gold/30 flex-shrink-0">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-deep-navy mb-2 md:mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-deep-navy/70 leading-relaxed text-base md:text-lg">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
