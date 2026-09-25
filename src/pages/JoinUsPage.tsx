import { jobPositions } from '../data/positionsData';
import { Briefcase, Send, CheckCircle2 } from 'lucide-react';

export default function JoinUsPage() {
  return (
    <div className="bg-[#EEF0EA] text-[#0B0E14] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <header className="border-b border-[#0B0E14]/15 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-[#0B0E14] tracking-tight">
            Join Us
          </h1>
        </header>

        {/* Introduction */}
        <section className="font-serif text-base sm:text-lg text-[#0B0E14] leading-relaxed">
          <p>
            We are always interested in hearing from motivated postdoctoral scientists, PhD candidates, research technicians, and undergraduate/Master interns interested in spatial multi-omics, clonal tumor ecology, and bioengineering at the Barcelona Science Park (PCB).
          </p>
        </section>

        {/* Open Positions List */}
        <section className="space-y-6">
          <div className="border-b border-[#0B0E14]/15 pb-2.5 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#4A5471]" />
            <h2 className="text-2xl font-bold font-sans text-[#0B0E14] tracking-tight">
              Open Positions
            </h2>
          </div>

          <div className="space-y-6">
            {jobPositions.map((pos) => (
              <div
                key={pos.id}
                className="rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 hover:border-[#0B0E14] transition-all p-6 md:p-8 space-y-4 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[#0B0E14] text-[#EEF0EA]">
                      {pos.category}
                    </span>
                    <span className="text-xs font-mono text-[#4A5471]">
                      {pos.reference}
                    </span>
                  </div>
                  <span className="text-xs text-[#4A5471] font-mono">
                    Deadline: <strong className="text-[#0B0E14]">{pos.deadline}</strong>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-sans text-[#0B0E14]">
                  {pos.title}
                </h3>

                <p className="font-serif text-sm text-[#0B0E14]/90 leading-relaxed">
                  {pos.description}
                </p>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#4A5471] font-semibold font-sans mb-2">
                    Requirements:
                  </h4>
                  <ul className="space-y-1 text-xs text-[#0B0E14]/90 font-sans">
                    {pos.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B0E14] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#0B0E14]/15 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-[#4A5471]">
                    Send CV & statement of interest to:
                  </span>
                  <a
                    href={`mailto:xrovirac@ibecbarcelona.eu?subject=Application%20${encodeURIComponent(pos.reference)}%20-%20${encodeURIComponent(pos.title)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#0B0E14] text-[#EEF0EA] font-sans font-bold hover:bg-[#4A5471] transition-all text-xs shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Apply via Email</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fellowships note */}
        <section className="rounded-md border border-[#0B0E14]/20 bg-[#E1E4DB] p-6 text-sm font-serif text-[#0B0E14]/85 leading-relaxed">
          <p>
            Candidates wishing to apply for competitive doctoral or postdoctoral fellowships (e.g. MSCA, EMBO, FPU/FPI, 'la Caixa' INPhINIT) are encouraged to contact <strong>Xavier Rovira-Clavé, PhD</strong> (<a href="mailto:xrovirac@ibecbarcelona.eu" className="underline font-mono text-xs text-[#0B0E14]">xrovirac@ibecbarcelona.eu</a>) well in advance of the deadlines.
          </p>
        </section>

      </div>
    </div>
  );
}
