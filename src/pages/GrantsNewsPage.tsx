import { grants } from '../data/grantsData';
import { newsItems } from '../data/newsData';
import NewsCard from '../components/NewsCard';
import { Award, Globe, Building } from 'lucide-react';

export default function GrantsNewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="px-3 py-1 rounded-full bg-ibec-lime/20 text-ibec-lime text-xs font-mono border border-ibec-lime/30">
          Funding & Milestones
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Grants & News
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Competitive international grants, consortium projects, and laboratory news updates.
        </p>
      </div>

      {/* Competitive Grants Section */}
      <section className="space-y-6">
        <div className="border-b border-white/10 pb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-ibec-lime" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Major Funded Grants & Consortia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {grants.map((grant) => (
            <div
              key={grant.id}
              className="rounded-2xl bg-[#0b1329]/90 border border-white/10 hover:border-ibec-lime/40 transition-all p-6 md:p-8 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-ibec-lime/20 text-ibec-lime border border-ibec-lime/30">
                    {grant.period}
                  </span>
                  {grant.acronym && (
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      {grant.acronym}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {grant.title}
                </h3>

                <div className="text-xs text-slate-400 space-y-1 font-mono">
                  <p><strong className="text-slate-300">Agency:</strong> {grant.fundingAgency}</p>
                  <p><strong className="text-slate-300">Role:</strong> {grant.role}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {grant.summary}
                </p>
              </div>

              {grant.partners && (
                <div className="pt-3 border-t border-white/10">
                  <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-cyan-400" /> Consortium Partners
                  </h4>
                  <ul className="space-y-1 text-[11px] text-slate-300">
                    {grant.partners.map((p, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-ibec-lime">›</span>
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
        <div className="border-b border-white/10 pb-3 flex items-center gap-2">
          <Building className="w-5 h-5 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Latest News & Announcements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

    </div>
  );
}
