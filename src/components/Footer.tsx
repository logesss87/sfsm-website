import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-warm-white pt-16 pb-8 border-t-4 border-muted-gold">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-heading font-semibold text-white mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+6562858528" className="flex items-start gap-3 text-soft-grey hover:text-muted-gold transition-colors group">
                  <Phone className="w-5 h-5 text-muted-gold mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-base uppercase tracking-wider text-soft-grey/80 mb-1">24/7 Control Room</span>
                    <span className="text-base">+65 62858528</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:enquirysfsm@gmail.com" className="flex items-center gap-3 text-soft-grey hover:text-muted-gold transition-colors">
                  <Mail className="w-5 h-5 text-muted-gold" />
                  <span className="text-base">enquirysfsm@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-soft-grey">
                <MapPin className="w-5 h-5 text-muted-gold mt-1 flex-shrink-0" />
                <span className="text-base">
                  100 Jalan Sultan<br />
                  Sultan Plaza #02-45<br />
                  Singapore 199001
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-soft-grey hover:text-muted-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-soft-grey hover:text-muted-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-soft-grey hover:text-muted-gold transition-colors">Services</Link></li>
              <li><Link to="/careers" className="text-soft-grey hover:text-muted-gold transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-soft-grey hover:text-muted-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-deep-navy/80 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-soft-grey/80">
          <p>&copy; {new Date().getFullYear()} Security & Fire Safety Mgmt Pte Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            <span>UEN No: 202144962Z</span>
            <a href="/privacy" className="hover:text-warm-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-warm-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-warm-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
