import React, { useState } from 'react';
import { MapPin, Mail, Phone, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="px-3 py-1 rounded-full bg-ibec-lime/20 text-ibec-lime text-xs font-mono border border-ibec-lime/30">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Location & Inquiries
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          The Spatial Biotechnology group is located at the Barcelona Science Park (PCB) in Barcelona, Spain.
        </p>
      </div>

      {/* Grid: Contact Information + Interactive Map Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="p-8 rounded-3xl bg-[#0b1329]/90 border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white">Laboratory Information</h2>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-ibec-lime/20 text-ibec-lime flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Postal Address</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Institute for Bioengineering of Catalonia (IBEC)<br />
                    Parc Científic de Barcelona (PCB)<br />
                    Carrer de Baldiri Reixac, 10-12<br />
                    08028 Barcelona, Spain
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email Contacts</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    PI: <a href="mailto:xrovirac@ibecbarcelona.eu" className="text-ibec-lime hover:underline">xrovirac@ibecbarcelona.eu</a><br />
                    Institute: <a href="mailto:info@ibecbarcelona.eu" className="text-slate-400 hover:underline">info@ibecbarcelona.eu</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Telephone</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Lab / Office: +34 9340 37636 (Ext: 37636)<br />
                    PCB Reception: +34 934 039 706
                  </p>
                </div>
              </div>
            </div>

            {/* How to Arrive Directions */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Public Transit Directions
              </h4>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li><strong className="text-white">Metro:</strong> Line L3 (Palau Reial or Zona Universitària) / Line L9 Sud</li>
                <li><strong className="text-white">Tram:</strong> Trambaix T1, T2, T3 (Palau Reial stop)</li>
                <li><strong className="text-white">Bus:</strong> Lines 7, 33, 67, 75, 113, H6</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Quick Message / Form */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-10 rounded-3xl bg-[#0b1329]/90 border border-white/10 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">Send a Direct Inquiry</h2>
              <p className="text-xs text-slate-400 mt-1">
                Reach out regarding scientific collaborations, student projects, or seminar invitations.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h3 className="text-base font-bold text-white">Inquiry Prepared</h3>
                <p className="text-xs text-slate-300">
                  Thank you! You can also email Dr. Xavier Rovira-Clavé directly at{' '}
                  <a href="mailto:xrovirac@ibecbarcelona.eu" className="text-ibec-lime font-mono underline">
                    xrovirac@ibecbarcelona.eu
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-white text-sm focus:outline-none focus:border-ibec-lime transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane.doe@institution.edu"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-white text-sm focus:outline-none focus:border-ibec-lime transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Subject / Area of Interest</label>
                  <input
                    type="text"
                    required
                    placeholder="Research Collaboration / Postdoc Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-white text-sm focus:outline-none focus:border-ibec-lime transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your research project, question, or background..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-white text-sm focus:outline-none focus:border-ibec-lime transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-ibec-lime text-slate-950 font-bold hover:bg-ibec-lime-light transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

            {/* Google Maps link */}
            <div className="pt-4 border-t border-white/10 text-center">
              <a
                href="https://maps.google.com/?q=Parc+Cientific+de+Barcelona+Baldiri+Reixac+10+Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-ibec-lime transition-colors"
              >
                <span>Open location in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
