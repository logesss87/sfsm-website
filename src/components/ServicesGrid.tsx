import { Home, Building2, Factory, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesGrid() {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-muted-gold group-hover:text-warm-white transition-colors" />,
      title: "Residential Security",
      description: "Protecting private estates and condominiums with vigilant, professional, and courteous security personnel.",
      link: "/services/residential"
    },
    {
      icon: <Building2 className="w-8 h-8 text-muted-gold group-hover:text-warm-white transition-colors" />,
      title: "Commercial Security",
      description: "Comprehensive security for corporate offices, retail spaces, and commercial buildings to ensure a safe environment.",
      link: "/services/commercial"
    },
    {
      icon: <Factory className="w-8 h-8 text-muted-gold group-hover:text-warm-white transition-colors" />,
      title: "Industrial Security",
      description: "Robust protection for warehouses, factories, and construction sites against theft, vandalism, and unauthorized access.",
      link: "/services/industrial"
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-muted-gold group-hover:text-warm-white transition-colors" />,
      title: "Specialized Security",
      description: "Tailored solutions including mobile patrols, event security, and rapid fire alarm response.",
      link: "/services/specialized"
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-soft-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-hero text-deep-navy mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-warm-white rounded-lg p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-soft-grey hover:border-muted-gold/50 hover:shadow-md transition-all group flex flex-col h-full"
            >
              <div className="bg-soft-grey w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-deep-navy shadow-sm transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-deep-navy mb-3">
                {service.title}
              </h3>
              <p className="text-deep-navy/70 mb-6 flex-grow text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
              <Link 
                to="/services" 
                className="text-deep-navy font-heading font-semibold hover:text-muted-gold transition-colors inline-flex items-center gap-2 mt-auto"
              >
                Learn More 
                <span className="text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
