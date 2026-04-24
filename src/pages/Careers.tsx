import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <div className="flex flex-col">
      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-hero text-deep-navy mb-6">
            Join Our Team
          </h2>
          <div className="text-xl md:text-2xl text-deep-navy/80 mx-auto mb-12 leading-relaxed">
            <p>
              Build a rewarding career in security with a company that values professionalism and dedication.
            </p>
          </div>

          <div className="bg-soft-grey p-8 rounded-xl border border-soft-grey/80 text-left mb-12">
            <h3 className="text-3xl font-heading font-semibold text-deep-navy mb-6">What We Look For?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-muted-gold flex-shrink-0" />
                <span className="text-lg text-deep-navy/80">Valid PRD License</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-muted-gold flex-shrink-0" />
                <span className="text-lg text-deep-navy/80">Strong sense of responsibility and integrity</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-muted-gold flex-shrink-0" />
                <span className="text-lg text-deep-navy/80">Excellent communication and customer service skills</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-muted-gold flex-shrink-0" />
                <span className="text-lg text-deep-navy/80">Ability to work shifts, including nights and weekends</span>
              </li>
            </ul>
          </div>

          <Link 
            to="/job-application" 
            className="inline-flex items-center justify-center gap-2 bg-deep-navy text-warm-white px-8 py-4 rounded hover:bg-muted-gold hover:text-deep-navy transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-lg font-heading font-semibold"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
