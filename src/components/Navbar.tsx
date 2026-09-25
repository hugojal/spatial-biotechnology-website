import { useState } from 'react';
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
    <header className="relative z-20 w-full bg-[#0B0E14] text-[#EEF0EA] border-b border-[#0B0E14]/30 shadow-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-8 py-4 sm:py-5">
        
        {/* Left: Prominent Brand Title & Reversed Paper Logo */}
        <Link
          to="/"
          className="flex items-center gap-4 group"
          title="Spatial Biotechnology Group · IBEC"
        >
          {/* Reversed Ink/Paper Logo Mark */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 240 240" width="48" height="48" className="w-full h-full">
              {/* Outer muted lattice */}
              <g fill="#EEF0EA" fillOpacity="0.25">
                <circle cx="32" cy="32" r="14"/><circle cx="76" cy="32" r="14"/><circle cx="120" cy="32" r="14"/><circle cx="164" cy="32" r="14"/><circle cx="208" cy="32" r="14"/>
                <circle cx="32" cy="76" r="14"/><circle cx="76" cy="76" r="14"/><circle cx="208" cy="76" r="14"/>
                <circle cx="32" cy="120" r="14"/><circle cx="208" cy="120" r="14"/>
                <circle cx="32" cy="164" r="14"/><circle cx="76" cy="164" r="14"/><circle cx="208" cy="164" r="14"/>
                <circle cx="32" cy="208" r="14"/><circle cx="76" cy="208" r="14"/><circle cx="120" cy="208" r="14"/><circle cx="164" cy="208" r="14"/><circle cx="208" cy="208" r="14"/>
              </g>
              {/* Active cluster connections */}
              <g stroke="#EEF0EA" strokeWidth="2.5" strokeOpacity="0.8">
                <line x1="120" y1="76" x2="164" y2="76"/><line x1="120" y1="76" x2="120" y2="120"/>
                <line x1="76" y1="120" x2="120" y2="120"/><line x1="120" y1="120" x2="164" y2="120"/>
                <line x1="164" y1="76" x2="164" y2="120"/><line x1="120" y1="120" x2="120" y2="164"/>
                <line x1="164" y1="120" x2="164" y2="164"/><line x1="120" y1="164" x2="164" y2="164"/>
              </g>
              {/* Cluster nodes in solid white/paper for high contrast reversed mark */}
              <g fill="#EEF0EA">
                <circle cx="120" cy="76" r="15"/>
                <circle cx="164" cy="76" r="15"/>
                <circle cx="76" cy="120" r="15"/>
                <circle cx="120" cy="120" r="15"/>
                <circle cx="164" cy="120" r="15"/>
                <circle cx="120" cy="164" r="15"/>
                <circle cx="164" cy="164" r="15"/>
              </g>
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-sans font-bold text-xl sm:text-2xl md:text-3xl tracking-tight text-white group-hover:text-[#EEF0EA]/90 transition-colors leading-none">
              Spatial Biotechnology Group
            </span>
          </div>
        </Link>

        {/* Right: Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 text-sm md:text-base font-sans transition-colors relative ${
                  active
                    ? 'text-white font-semibold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#EEF0EA]'
                    : 'text-slate-300 hover:text-white font-normal'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded text-[#EEF0EA] hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0B0E14] px-6 py-5 space-y-2">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded text-base font-sans ${
                  active
                    ? 'text-white font-semibold bg-white/10'
                    : 'text-slate-300 hover:text-white'
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
