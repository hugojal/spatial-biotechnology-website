import { grants } from '../data/grantsData';
import { newsItems } from '../data/newsData';
import NewsCard from '../components/NewsCard';
import { Award, Globe, Building } from 'lucide-react';

export default function GrantsNewsPage() {
  return (
    <div className="text-[#0B0E14] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <header className="border-b border-[#0B0E14]/15 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-[#0B0E14] tracking-tight">
            Grants & News
          </h1>
        </header>

        {/* Competitive Grants Section */}
        <section className="space-y-6">
          <div className="border-b border-[#0B0E14]/15 pb-2.5 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#4A5471]" />
            <h2 className="text-2xl font-bold font-sans text-[#0B0E14] tracking-tight">
              Funded Grants & Consortia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {grants.map((grant) => (
              <div
                key={grant.id}
                className="rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 hover:border-[#0B0E14] transition-all p-6 md:p-7 space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[#0B0E14] text-[#EEF0EA]">
                      {grant.period}
                    </span>
                    {grant.acronym && (
                      <span className="text-xs font-bold font-mono text-[#0B0E14] uppercase tracking-wider">
                        {grant.acronym}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold font-sans text-[#0B0E14] leading-snug">
                    {grant.title}
                  </h3>

                  <div className="text-xs text-[#4A5471] space-y-1 font-mono">
                    <p><strong className="text-[#0B0E14] font-sans">Agency:</strong> {grant.fundingAgency}</p>
                    <p><strong className="text-[#0B0E14] font-sans">Role:</strong> {grant.role}</p>
                  </div>

                  <p className="font-serif text-xs text-[#0B0E14]/85 leading-relaxed">
                    {grant.summary}
                  </p>
                </div>

                {grant.partners && (
                  <div className="pt-3 border-t border-[#0B0E14]/15">
                    <h4 className="text-[11px] font-semibold font-sans text-[#4A5471] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Globe className="w-3 h-3 text-[#0B0E14]" /> Consortium Partners
                    </h4>
                    <ul className="space-y-1 text-[11px] font-serif text-[#0B0E14]/90">
                      {grant.partners.map((p, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#0B0E14] font-sans font-bold">›</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* News & Events Timeline */}
        <section className="space-y-6">
          <div className="border-b border-[#0B0E14]/15 pb-2.5 flex items-center gap-2">
            <Building className="w-5 h-5 text-[#4A5471]" />
            <h2 className="text-2xl font-bold font-sans text-[#0B0E14] tracking-tight">
              News & Announcements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
