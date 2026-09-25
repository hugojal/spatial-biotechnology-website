import React, { useState } from 'react';
import { MapPin, Mail, Phone, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#EEF0EA] text-[#0B0E14] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <header className="border-b border-[#0B0E14]/15 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-[#0B0E14] tracking-tight">
            Contact & Location
          </h1>
        </header>

        {/* Grid: Contact Information + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold font-sans text-[#0B0E14]">Laboratory Address</h2>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0B0E14] text-[#EEF0EA] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-[#0B0E14]">Postal Address</h3>
                    <p className="font-serif text-xs text-[#0B0E14]/85 mt-1 leading-relaxed">
                      Institute for Bioengineering of Catalonia (IBEC)<br />
                      Parc Científic de Barcelona (PCB)<br />
                      Carrer de Baldiri Reixac, 10-12<br />
                      08028 Barcelona, Spain
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0B0E14] text-[#EEF0EA] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-[#0B0E14]">Direct Contact</h3>
                    <p className="font-mono text-xs text-[#0B0E14]/85 mt-1">
                      PI: <a href="mailto:xrovirac@ibecbarcelona.eu" className="text-[#0B0E14] underline">xrovirac@ibecbarcelona.eu</a><br />
                      IBEC: <a href="mailto:info@ibecbarcelona.eu" className="text-[#4A5471] underline">info@ibecbarcelona.eu</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0B0E14] text-[#EEF0EA] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-[#0B0E14]">Telephone</h3>
                    <p className="font-mono text-xs text-[#0B0E14]/85 mt-1">
                      Office / Lab: +34 9340 37636 ext: 37636<br />
                      PCB Reception: +34 934 039 706
                    </p>
                  </div>
                </div>
              </div>

              {/* Transit Directions */}
              <div className="pt-4 border-t border-[#0B0E14]/15 space-y-2">
                <h4 className="text-xs font-bold uppercase font-sans tracking-wider text-[#4A5471]">
                  Public Transit Directions
                </h4>
                <ul className="text-xs font-serif text-[#0B0E14]/85 space-y-1">
                  <li><strong className="font-sans text-[#0B0E14]">Metro:</strong> Line L3 (Palau Reial / Zona Universitària) / Line L9 Sud</li>
                  <li><strong className="font-sans text-[#0B0E14]">Tram:</strong> Trambaix T1, T2, T3 (Palau Reial)</li>
                  <li><strong className="font-sans text-[#0B0E14]">Bus:</strong> Lines 7, 33, 67, 75, 113, H6</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 md:p-9 rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 space-y-6 shadow-sm">
              <div>
                <h2 className="text-xl font-bold font-sans text-[#0B0E14]">Send an Inquiry</h2>
              </div>

              {submitted ? (
                <div className="p-6 rounded bg-[#EEF0EA] border border-[#0B0E14]/20 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-channelCyan mx-auto" />
                  <h3 className="text-base font-bold font-sans text-[#0B0E14]">Message Ready</h3>
                  <p className="font-serif text-xs text-[#0B0E14]/85">
                    Thank you. You can also contact Dr. Xavier Rovira-Clavé directly at{' '}
                    <a href="mailto:xrovirac@ibecbarcelona.eu" className="text-[#0B0E14] font-mono underline">
                      xrovirac@ibecbarcelona.eu
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#0B0E14] mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Jane Doe"
                        className="w-full px-3.5 py-2.5 rounded bg-[#EEF0EA] border border-[#0B0E14]/20 text-[#0B0E14] text-xs focus:outline-none focus:border-[#0B0E14] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#0B0E14] mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="jane.doe@institution.edu"
                        className="w-full px-3.5 py-2.5 rounded bg-[#EEF0EA] border border-[#0B0E14]/20 text-[#0B0E14] text-xs focus:outline-none focus:border-[#0B0E14] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#0B0E14] mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Research Collaboration / Inquiries"
                      className="w-full px-3.5 py-2.5 rounded bg-[#EEF0EA] border border-[#0B0E14]/20 text-[#0B0E14] text-xs focus:outline-none focus:border-[#0B0E14] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#0B0E14] mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Your message..."
                      className="w-full px-3.5 py-2.5 rounded bg-[#EEF0EA] border border-[#0B0E14]/20 text-[#0B0E14] text-xs focus:outline-none focus:border-[#0B0E14] transition-colors font-serif"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded bg-[#0B0E14] text-[#EEF0EA] font-sans font-bold hover:bg-[#4A5471] transition-all flex items-center justify-center gap-2 text-xs shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

              <div className="pt-4 border-t border-[#0B0E14]/15 text-center">
                <a
                  href="https://maps.google.com/?q=Parc+Cientific+de+Barcelona+Baldiri+Reixac+10+Barcelona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans text-[#4A5471] hover:text-[#0B0E14] transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
