import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dna, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Team', path: '/team' },
    { name: 'Publications', path: '/publications' },
    { name: 'Grants & News', path: '/news' },
    { name: 'Join Us', path: '/join' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070b14]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-ibec-lime to-emerald-500 text-slate-950 shadow-md group-hover:scale-105 transition-transform">
            <Dna className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
              Spatial Biotechnology
              <span className="text-xs px-2 py-0.5 rounded-full bg-ibec-lime/20 text-ibec-lime font-mono border border-ibec-lime/30">
                IBEC
              </span>
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Rovira-Clavé Lab · Barcelona
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive(link.path)
                  ? 'bg-white/10 text-ibec-lime font-semibold border border-ibec-lime/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* IBEC Institute Direct Link */}
          <a
            href="https://ibecbarcelona.eu/research-groups/spatial-biotechnology/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-ibec-lime hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            title="Official IBEC Group Profile"
          >
            <span>IBEC Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0b1329] px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.path)
                  ? 'bg-ibec-lime/20 text-ibec-lime border border-ibec-lime/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://ibecbarcelona.eu/research-groups/spatial-biotechnology/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-400 hover:text-ibec-lime"
          >
            <span>Visit IBEC Official Page</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
