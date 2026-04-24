import { Home, Building2, Factory, Car, Key, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-7 h-7 shrink-0" />,
      title: "Condominiums & Residential Security",
      description: "We provide vigilant, professional, and courteous security personnel to protect private estates and ensure residents feel safe and welcome."
    },
    {
      icon: <Building2 className="w-7 h-7 shrink-0" />,
      title: "Office Buildings & Commercial Security",
      description: "Comprehensive security for corporate offices, retail spaces, and commercial buildings to maintain a secure and professional environment."
    },
    {
      icon: <Factory className="w-7 h-7 shrink-0" />,
      title: "Factories & Warehouses",
      description: "Robust protection for industrial sites against theft, vandalism, and unauthorized access, ensuring your assets are always secure."
    },
    {
      icon: <Car className="w-7 h-7 shrink-0" />,
      title: "Site Patrol",
      description: "Randomised and scheduled mobile patrols to secure large perimeters and multiple sites efficiently, acting as a strong visible deterrent."
    },
    {
      icon: <Key className="w-7 h-7 shrink-0" />,
      title: "Access Control",
      description: "Strict monitoring and management of entry points to prevent unauthorized access and protect sensitive areas within your premises."
    },
    {
      icon: <Users className="w-7 h-7 shrink-0" />,
      title: "Visitor Management",
      description: "Professional handling of guests, contractors, and deliveries, ensuring a smooth and secure registration process."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-hero text-deep-navy mb-4">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Image on left */}
            <div className="md:col-span-5 md:sticky md:top-24">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-soft-grey/80">
                <img 
                  src="/officer2.jpeg" 
                  alt="Security officer on patrol" 
                  className="w-full h-auto object-cover aspect-[3/4] object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Services on right */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-soft-grey rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-soft-grey/80 hover:border-muted-gold/50 hover:bg-white transition-all group flex flex-col h-full"
                >
                  <div className="bg-white w-14 h-14 shrink-0 rounded-full flex items-center justify-center mb-6 group-hover:bg-deep-navy shadow-sm transition-colors">
                    <div className="text-muted-gold transition-colors flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-deep-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-deep-navy/70 leading-relaxed flex-grow text-base md:text-lg">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
