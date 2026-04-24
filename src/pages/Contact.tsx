import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    const defaultAccessKey = import.meta.env.VITE_WEB3FORMS_KEY || "265aa9e1-6124-4b31-b20b-a48540e693c5"; // For arusfsm@gmail.com
    const enquiryAccessKey = import.meta.env.VITE_WEB3FORMS_ENQUIRY_KEY || "91924341-d603-4dd1-905a-3040c784c481"; // For enquirysfsm@gmail.com
    
    let activeAccessKey = defaultAccessKey;
    let targetEmail = 'arusfsm@gmail.com';

    if (formData.subject === 'General Enquiry' || formData.subject === 'Request a Quote') {
      activeAccessKey = enquiryAccessKey;
      targetEmail = 'enquirysfsm@gmail.com';
    }

    if (!activeAccessKey || activeAccessKey.includes("YOUR_")) {
      setStatus('error');
      setErrorMessage(`Please add a Web3Forms Access Key for ${targetEmail} to enable this form submission.`);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: activeAccessKey,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.contactNumber,
          subject: formData.subject,
          message: formData.message,
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', contactNumber: '', subject: 'General Enquiry', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-hero text-deep-navy mb-8">
                Get In Touch
              </h2>
              <p className="text-deep-navy/80 mb-12 leading-relaxed">
                Whether you need tailored security services for your property or you're interested in joining our team, we are here to help. Reach out to us using the details below or fill out the contact form.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-soft-grey w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border border-muted-gold/30">
                    <Phone className="w-6 h-6 text-muted-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-deep-navy mb-1">Phone</h3>
                    <p className="text-deep-navy/70 mb-2">24/7 Control Room</p>
                    <a href="tel:+6562858528" className="text-lg font-heading font-bold text-deep-navy hover:text-muted-gold transition-colors">
                      +65 62858528
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-soft-grey w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border border-muted-gold/30">
                    <Mail className="w-6 h-6 text-muted-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-deep-navy mb-1">Email</h3>
                    <p className="text-deep-navy/70 mb-2">For general enquiries and support</p>
                    <a href="mailto:enquirysfsm@gmail.com" className="text-lg font-heading font-bold text-deep-navy hover:text-muted-gold transition-colors">
                      enquirysfsm@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-soft-grey w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border border-muted-gold/30">
                    <MapPin className="w-6 h-6 text-muted-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-deep-navy mb-1">Office Address</h3>
                    <p className="text-lg font-heading font-bold text-deep-navy leading-relaxed">
                      100 Jalan Sultan<br />
                      Sultan Plaza #02-45<br />
                      Singapore 199001
                    </p>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm border border-soft-grey/80 mt-8">
                  <iframe 
                    src="https://maps.google.com/maps?q=100%20Jalan%20Sultan,%20Sultan%20Plaza,%20Singapore%20199001&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-soft-grey p-8 md:p-10 rounded-2xl border border-soft-grey/80 shadow-sm">
              <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-8">
                Send Us a Message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-deep-navy mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-muted-gold focus:border-muted-gold outline-none transition-all bg-warm-white text-deep-navy"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-deep-navy mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-muted-gold focus:border-muted-gold outline-none transition-all bg-warm-white text-deep-navy"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-deep-navy mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-muted-gold focus:border-muted-gold outline-none transition-all bg-warm-white text-deep-navy"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-deep-navy mb-2">Contact Number</label>
                    <input 
                      type="tel" 
                      id="contactNumber" 
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-muted-gold focus:border-muted-gold outline-none transition-all bg-warm-white text-deep-navy"
                      placeholder="+65 9123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-deep-navy mb-2">Subject</label>
                  <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-muted-gold focus:border-muted-gold outline-none transition-all bg-warm-white text-deep-navy"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Request a Quote">Request a Quote</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-deep-navy mb-2">Message</label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-muted-gold focus:border-muted-gold outline-none transition-all bg-warm-white text-deep-navy resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-green-800 text-sm">
                      Your message has been sent successfully! We will get back to you shortly.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-800 text-sm">{errorMessage}</p>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-deep-navy text-warm-white px-8 py-4 rounded-lg hover:bg-muted-gold hover:text-deep-navy transition-colors shadow-md text-lg font-heading font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
