import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink, Dna } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05080f] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Affiliation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-ibec-lime to-emerald-500 text-slate-950 font-bold">
                <Dna className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Spatial Biotechnology
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Deciphering spatiotemporal multicellular patterns and clonal behaviors in solid tumors using high-plex spatial multi-omics and perturbation technologies.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              Principal Investigator: <strong className="text-slate-200">Xavier Rovira-Clavé, PhD</strong>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/research" className="hover:text-ibec-lime transition-colors">
                  Research Axes & Technologies
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-ibec-lime transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-ibec-lime transition-colors">
                  Scientific Publications
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-ibec-lime transition-colors">
                  Grants & News
                </Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-ibec-lime transition-colors">
                  Open Positions & Fellowships
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Affiliations & Funding */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Affiliations & Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://ibecbarcelona.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-ibec-lime transition-colors"
                >
                  <span>Institute for Bioengineering of Catalonia (IBEC)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pcb.ub.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-ibec-lime transition-colors"
                >
                  <span>Barcelona Science Park (PCB)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://erc.europa.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-ibec-lime transition-colors"
                >
                  <span>European Research Council (ERC)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.contraelcancer.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-ibec-lime transition-colors"
                >
                  <span>Asociación Española Contra el Cáncer (AECC)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.hfsp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-ibec-lime transition-colors"
                >
                  <span>Human Frontier Science Program (HFSP)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Lab Address
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ibec-lime shrink-0 mt-1" />
                <span>
                  Parc Científic de Barcelona (PCB)<br />
                  C/ Baldiri Reixac, 10-12<br />
                  08028 Barcelona, Spain
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-ibec-lime shrink-0" />
                <a href="mailto:xrovirac@ibecbarcelona.eu" className="hover:text-white transition-colors">
                  xrovirac@ibecbarcelona.eu
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-ibec-lime shrink-0" />
                <span>+34 9340 37636 (Ext: 37636)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Spatial Biotechnology Research Group · IBEC Barcelona. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-200">How to find us</Link>
            <Link to="/join" className="hover:text-slate-200">Career Opportunities</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
