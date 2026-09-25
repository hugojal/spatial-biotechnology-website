import { useState } from 'react';
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
    <div className="bg-[#EEF0EA] text-[#0B0E14] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <span className="px-2.5 py-1 rounded bg-[#0B0E14] text-[#EEF0EA] text-xs font-mono font-semibold">
            SCIENTIFIC OUTPUTS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-[#0B0E14] tracking-tight">
            Publications & Preprints
          </h1>
          <p className="font-serif text-base sm:text-lg text-[#0B0E14]/85 leading-relaxed">
            Peer-reviewed articles, reviews, and high-impact contributions in spatial multi-omics, high-plex imaging, and tumor ecology.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 flex flex-col sm:flex-row items-center gap-4 shadow-sm">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#4A5471] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, author, journal, or keyword (e.g. MIBI, stroma, T-cell)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-md bg-[#EEF0EA] border border-[#0B0E14]/20 text-[#0B0E14] placeholder-[#4A5471] text-sm focus:outline-none focus:border-[#0B0E14] font-sans transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-[#4A5471] shrink-0" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2.5 rounded-md bg-[#EEF0EA] border border-[#0B0E14]/20 text-[#0B0E14] text-sm font-sans focus:outline-none focus:border-[#0B0E14] transition-colors"
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
            <div className="text-center py-16 text-[#4A5471] space-y-2">
              <BookOpen className="w-8 h-8 mx-auto text-[#4A5471]" />
              <p className="text-sm font-sans">No publications matched your search criteria.</p>
            </div>
          )}
        </div>

        {/* External CRIS Portal Link */}
        <div className="p-6 rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold font-sans text-[#0B0E14]">IBEC CRIS Portal</h4>
            <p className="font-serif text-xs text-[#0B0E14]/75 mt-0.5">
              For institutional metadata and full output archives, visit the official IBEC repository.
            </p>
          </div>
          <a
            href="https://ibecbarcelona.eu/research-groups/spatial-biotechnology/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#0B0E14] text-[#EEF0EA] hover:bg-[#4A5471] text-xs font-semibold font-sans transition-colors shadow-sm"
          >
            <span>View on IBEC CRIS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
