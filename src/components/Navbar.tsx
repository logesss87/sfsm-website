import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-deep-navy text-white border-b border-deep-navy/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <Logo className="w-12 h-12" />
            <span className="font-hero text-xl md:text-2xl tracking-wide uppercase">Security &amp; Fire Safety Mgmt Pte Ltd</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-heading font-medium text-warm-white hover:text-muted-gold transition-colors">Home</Link>
            <Link to="/about" className="font-heading font-medium text-warm-white hover:text-muted-gold transition-colors">About Us</Link>
            <Link to="/services" className="font-heading font-medium text-warm-white hover:text-muted-gold transition-colors">Services</Link>
            <Link to="/careers" className="font-heading font-medium text-warm-white hover:text-muted-gold transition-colors">Careers</Link>
            <Link to="/contact" className="font-heading font-medium text-warm-white hover:text-muted-gold transition-colors">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-white hover:text-muted-gold focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-deep-navy border-t border-deep-navy/80">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 font-heading font-medium text-warm-white hover:bg-deep-navy/80 hover:text-muted-gold rounded transition-colors">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 font-heading font-medium text-warm-white hover:bg-deep-navy/80 hover:text-muted-gold rounded transition-colors">About Us</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-3 font-heading font-medium text-warm-white hover:bg-deep-navy/80 hover:text-muted-gold rounded transition-colors">Services</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)} className="block px-3 py-3 font-heading font-medium text-warm-white hover:bg-deep-navy/80 hover:text-muted-gold rounded transition-colors">Careers</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 font-heading font-medium text-warm-white hover:bg-deep-navy/80 hover:text-muted-gold rounded transition-colors">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
