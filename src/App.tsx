import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MarginCells from './components/MarginCells';

import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import TeamPage from './pages/TeamPage';
import PublicationsPage from './pages/PublicationsPage';
import GrantsNewsPage from './pages/GrantsNewsPage';
import JoinUsPage from './pages/JoinUsPage';
import ContactPage from './pages/ContactPage';

const routerBasename =
  import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

function useMinWidthMd() {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return matches;
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const showMarginCells = useMinWidthMd();

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF0EA] text-[#0B0E14] selection:bg-[#0B0E14] selection:text-[#EEF0EA] font-sans relative">
      <Navbar />
      {/* Decorative fixed margin cells for subpages (tablet/desktop only) */}
      {!isHome && showMarginCells && <MarginCells />}
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/news" element={<GrantsNewsPage />} />
          <Route path="/join" element={<JoinUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router basename={routerBasename || undefined}>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
