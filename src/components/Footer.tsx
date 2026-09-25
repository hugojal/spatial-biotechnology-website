import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/10 bg-[#0B0E14] text-slate-300">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 items-start">
          <div className="space-y-4 lg:col-span-1">
            <Link
              to="/"
              className="inline-block transition-transform hover:scale-[1.02]"
              title="Spatial Biotechnology Group"
            >
              <img
                src="/brand-logo/mark-color.svg"
                alt="Spatial Biotechnology — group mark"
                className="h-28 sm:h-36 md:h-44 w-auto object-contain"
              />
            </Link>
            <div className="pt-1 text-xs font-mono text-slate-400">
              PI: <strong className="text-white">Xavier Rovira-Clavé, PhD</strong>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-sans font-semibold text-white tracking-wider uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link to="/research" className="hover:text-white transition-colors">
                  Research Lines & Technologies
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-white transition-colors">
                  Scientific Publications
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  Grants & News
                </Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-white transition-colors">
                  Open Positions & Fellowships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-sans font-semibold text-white tracking-wider uppercase mb-4">
              Affiliations & Support
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <a
                  href="https://ibecbarcelona.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Institute for Bioengineering of Catalonia</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pcb.ub.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
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
                  className="flex items-center gap-1 hover:text-white transition-colors"
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
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Asociación Española Contra el Cáncer</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-sans font-semibold text-white tracking-wider uppercase mb-4">
              Lab Address
            </h3>
            <div className="space-y-3 text-sm font-sans text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  Parc Científic de Barcelona (PCB)
                  <br />
                  C/ Baldiri Reixac, 10-12
                  <br />
                  08028 Barcelona, Spain
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:xrovirac@ibecbarcelona.eu" className="hover:text-white transition-colors">
                  xrovirac@ibecbarcelona.eu
                </a>
              </div>
              <div className="flex items-center gap-2.5 font-mono text-xs text-slate-400">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+34 9340 37636 ext: 37636</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p>© {new Date().getFullYear()} Spatial Biotechnology Group · Rovira Clavé Lab · IBEC Barcelona.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white">
              Directions & Map
            </Link>
            <Link to="/join" className="hover:text-white">
              Career Opportunities
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
