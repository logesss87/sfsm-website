import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JobApplication() {
  const [consent, setConsent] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!consent) {
      setShowError(true);
    } else {
      setShowError(false);
      navigate('/job-application/form');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <h1 className="text-3xl md:text-4xl font-hero text-deep-navy mb-8 text-center">
          Job Application
        </h1>
        
        <div className="bg-soft-grey p-8 rounded-xl border border-soft-grey/80 mb-8">
          <h2 className="text-xl font-heading font-semibold text-deep-navy mb-4">
            Privacy Notice
          </h2>
          <p className="text-deep-navy/80 mb-6 leading-relaxed">
            All information submitted in this form will be kept confidential and used only for job application and recruitment purposes by Security & Fire Safety Mgmt Pte Ltd.
          </p>
          
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center pt-1">
              <input 
                type="checkbox" 
                className="peer sr-only"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (e.target.checked) setShowError(false);
                }}
              />
              <div className="w-5 h-5 border-2 border-deep-navy/30 rounded bg-white peer-checked:bg-muted-gold peer-checked:border-muted-gold transition-colors flex items-center justify-center">
                <svg 
                  className={`w-3.5 h-3.5 text-white pointer-events-none transition-opacity ${consent ? 'opacity-100' : 'opacity-0'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className="text-deep-navy/90 select-none">
              I consent to my personal information being collected and used for recruitment purposes.
            </span>
          </label>
          
          {showError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Please give your consent to continue with the application.
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={handleContinue}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded transition-all shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-lg font-heading font-semibold bg-deep-navy text-warm-white hover:bg-muted-gold hover:text-deep-navy cursor-pointer"
          >
            Continue Application
          </button>
        </div>
      </div>
    </div>
  );
}
