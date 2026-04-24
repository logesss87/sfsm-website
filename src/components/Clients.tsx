import { Building, Home, Factory } from 'lucide-react';

export default function Clients() {
  const clients = [
    { name: "Commercial Buildings", icon: <Building className="w-8 h-8 text-muted-gold" /> },
    { name: "Residential Buildings", icon: <Home className="w-8 h-8 text-muted-gold" /> },
    { name: "Industrial Buildings", icon: <Factory className="w-8 h-8 text-muted-gold" /> }
  ];

  return (
    <section className="py-16 bg-deep-navy text-warm-white border-y border-muted-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-hero text-warm-white mb-4">
            Trusted by Properties Across Singapore
          </h2>
          <p className="text-soft-grey">
            We provide tailored security solutions for a diverse range of clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 bg-deep-navy/50 rounded-lg border border-soft-grey/10 hover:border-muted-gold/30 transition-colors">
              <div className="mb-4">
                {client.icon}
              </div>
              <h3 className="font-heading font-medium text-center text-warm-white">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
