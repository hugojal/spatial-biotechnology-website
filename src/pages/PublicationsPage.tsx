import React, { useState } from 'react';
import { publications } from '../data/publicationsData';
import PublicationCard from '../components/PublicationCard';
import { Search, Filter, BookOpen, ExternalLink } from 'lucide-react';

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const years = Array.from(new Set(publications.map((p) => p.year.toString()))).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  const filteredPubs = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="px-3 py-1 rounded-full bg-ibec-lime/20 text-ibec-lime text-xs font-mono border border-ibec-lime/30">
          Scientific Output
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Publications & Preprints
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Peer-reviewed articles, reviews, and high-impact contributions in spatial multi-omics, high-plex imaging, and tumor ecology.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 rounded-2xl bg-[#0b1329]/90 border border-white/10 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by title, author, journal, or keyword (e.g. MIBI, stroma, T-cell)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-ibec-lime transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-white text-sm focus:outline-none focus:border-ibec-lime transition-colors"
          >
            <option value="all">All Years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {filteredPubs.length > 0 ? (
          filteredPubs.map((pub) => <PublicationCard key={pub.id} pub={pub} />)
        ) : (
          <div className="text-center py-16 text-slate-400 space-y-2">
            <BookOpen className="w-8 h-8 mx-auto text-slate-600" />
            <p className="text-sm">No publications matched your search criteria.</p>
          </div>
        )}
      </div>

      {/* External CRIS Portal Link */}
      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-white">IBEC CRIS Portal</h4>
          <p className="text-xs text-slate-400 mt-0.5">
            For institutional metadata and full output archives, visit the official IBEC repository.
          </p>
        </div>
        <a
          href="https://ibecbarcelona.eu/research-groups/spatial-biotechnology/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-ibec-lime border border-white/10 transition-colors"
        >
          <span>View on IBEC CRIS</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
