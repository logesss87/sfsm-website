import React, { useState, useRef } from 'react';

export default function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Application submitted successfully!' });
        formRef.current?.reset();
      } else {
        setSubmitStatus({ type: 'error', message: data.error + (data.details ? ` (${data.details})` : '') || 'Failed to submit application.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <h1 className="text-3xl md:text-4xl font-hero text-deep-navy mb-8 text-center">
          Job Application Form
        </h1>
        
        <div className="bg-soft-grey p-8 rounded-xl border border-soft-grey/80">
          <p className="text-deep-navy/80 mb-6">
            Please fill out the form below to apply for a position with Security & Fire Safety Mgmt Pte Ltd.
          </p>
          
          {submitStatus && (
            <div className={`p-4 mb-6 rounded border ${submitStatus.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-deep-navy mb-1">First Name *</label>
                <input name="firstName" type="text" required className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-muted-gold focus:ring-1 focus:ring-muted-gold" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-navy mb-1">Last Name *</label>
                <input name="lastName" type="text" required className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-muted-gold focus:ring-1 focus:ring-muted-gold" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-deep-navy mb-1">Email Address *</label>
              <input name="email" type="email" required className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-muted-gold focus:ring-1 focus:ring-muted-gold" placeholder="john.doe@example.com" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-deep-navy mb-1">Phone Number *</label>
              <input name="phone" type="tel" required className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-muted-gold focus:ring-1 focus:ring-muted-gold" placeholder="+65 9123 4567" />
            </div>

            <div>
              <label className="block text-sm font-medium text-deep-navy mb-1">Position Applied For *</label>
              <select name="position" required className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-muted-gold focus:ring-1 focus:ring-muted-gold bg-white">
                <option value="">Select a position</option>
                <option value="Security Officer">Security Officer</option>
                <option value="Senior Security Officer">Senior Security Officer</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-deep-navy mb-1">Upload Resume (PDF, DOCX) *</label>
              <input name="resume" type="file" required accept=".pdf,.doc,.docx" className="w-full p-3 rounded border border-gray-300 bg-white focus:outline-none focus:border-muted-gold focus:ring-1 focus:ring-muted-gold" />
            </div>

            <div className="pt-4">
              <button disabled={isSubmitting} type="submit" className={`w-full bg-deep-navy text-warm-white px-6 py-4 rounded font-semibold transition-colors text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-muted-gold hover:text-deep-navy'}`}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
