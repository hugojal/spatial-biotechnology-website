import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    <header className="w-full bg-[#141720] border-b border-[#0B0E14] text-white">
      <div className="mx-auto flex max-w-[1400px] items-stretch justify-between px-0 lg:px-6">
        
        {/* Left: Brand / Title Block matching screenshot */}
        <Link
          to="/"
          className="flex items-center gap-3.5 px-6 py-4 bg-[#4A5471] hover:bg-[#3D4660] transition-colors rounded-none lg:rounded-b-none"
        >
          {/* Brand Mark SVG from brand/logo */}
          <div className="w-6 h-6 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 48 48" width="24" height="24" className="w-full h-full">
              <g transform="scale(0.2)">
                <g fill="#FFFFFF" fillOpacity="0.35">
                  <circle cx="32" cy="32" r="14"/><circle cx="76" cy="32" r="14"/><circle cx="120" cy="32" r="14"/><circle cx="164" cy="32" r="14"/><circle cx="208" cy="32" r="14"/>
                  <circle cx="32" cy="76" r="14"/><circle cx="76" cy="76" r="14"/><circle cx="208" cy="76" r="14"/>
                  <circle cx="32" cy="120" r="14"/><circle cx="208" cy="120" r="14"/>
                  <circle cx="32" cy="164" r="14"/><circle cx="76" cy="164" r="14"/><circle cx="208" cy="164" r="14"/>
                  <circle cx="32" cy="208" r="14"/><circle cx="76" cy="208" r="14"/><circle cx="120" cy="208" r="14"/><circle cx="164" cy="208" r="14"/><circle cx="208" cy="208" r="14"/>
                </g>
                <g stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.6">
                  <line x1="120" y1="76" x2="164" y2="76"/><line x1="120" y1="76" x2="120" y2="120"/>
                  <line x1="76" y1="120" x2="120" y2="120"/><line x1="120" y1="120" x2="164" y2="120"/>
                  <line x1="164" y1="76" x2="164" y2="120"/><line x1="120" y1="120" x2="120" y2="164"/>
                  <line x1="164" y1="120" x2="164" y2="164"/><line x1="120" y1="164" x2="164" y2="164"/>
                </g>
                <g>
                  <circle cx="120" cy="76" r="15" fill="#C23E77"/>
                  <circle cx="164" cy="76" r="15" fill="#1FA9A0"/>
                  <circle cx="76" cy="120" r="15" fill="#C23E77"/>
                  <circle cx="120" cy="120" r="15" fill="#1FA9A0"/>
                  <circle cx="164" cy="120" r="15" fill="#C23E77"/>
                  <circle cx="120" cy="164" r="15" fill="#1FA9A0"/>
                  <circle cx="164" cy="164" r="15" fill="#C23E77"/>
                </g>
              </g>
            </svg>
          </div>
          <span className="font-sans font-bold text-xl tracking-tight text-white">
            Spatial Biotechnology Group
          </span>
        </Link>

        {/* Right: Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center gap-2 pr-4">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all font-sans ${
                  active
                    ? 'bg-[#1C2333] text-[#ABB330] border border-[#ABB330]/60 shadow-inner'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden pr-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#0B0E14] bg-[#141720] px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-semibold ${
                  active
                    ? 'bg-[#1C2333] text-[#ABB330] border border-[#ABB330]/50'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
