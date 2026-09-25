import { jobPositions } from '../data/positionsData';
import { Briefcase, Send, CheckCircle2, Heart, Award, Sparkles, Mail } from 'lucide-react';

export default function JoinUsPage() {
  return (
    <div className="bg-[#EEF0EA] text-[#0B0E14] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <span className="px-2.5 py-1 rounded bg-[#0B0E14] text-[#EEF0EA] text-xs font-mono font-semibold">
            CAREERS & FELLOWSHIPS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-[#0B0E14] tracking-tight">
            Join Our Laboratory
          </h1>
          <p className="font-serif text-base sm:text-lg text-[#0B0E14]/85 leading-relaxed">
            We welcome ambitious, curious, and collaborative scientists to tackle fundamental and translational challenges in spatial multi-omics and cancer biology.
          </p>
        </div>

        {/* Why Join IBEC Card Grid */}
        <section className="p-8 md:p-10 rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 space-y-6 shadow-sm">
          <h2 className="text-xl font-bold font-sans text-[#0B0E14] tracking-tight">
            Why do research with us in Barcelona?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded bg-[#0B0E14] text-[#EEF0EA] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-bold font-sans text-[#0B0E14] text-base">Pioneering Technologies</h3>
              <p className="font-serif text-xs text-[#0B0E14]/85 leading-relaxed">
                Direct access to Multiplexed Ion Beam Imaging (MIBI), automated liquid robotics, organoid biobanks, and high-performance computing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded bg-[#0B0E14] text-[#EEF0EA] flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="font-bold font-sans text-[#0B0E14] text-base">Global Collaborations</h3>
              <p className="font-serif text-xs text-[#0B0E14]/85 leading-relaxed">
                Work alongside international consortia including Stanford University, Harvard Medical School, DKFZ Heidelberg, and Duke University.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded bg-[#0B0E14] text-[#EEF0EA] flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-bold font-sans text-[#0B0E14] text-base">Barcelona Ecosystem</h3>
              <p className="font-serif text-xs text-[#0B0E14]/85 leading-relaxed">
                Located at the Barcelona Science Park (PCB), offering a vibrant international scientific community with exceptional quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions List */}
        <section className="space-y-6">
          <div className="border-b border-[#0B0E14]/15 pb-2.5 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#4A5471]" />
            <h2 className="text-2xl font-bold font-sans text-[#0B0E14] tracking-tight">
              Current Calls & Opportunities
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
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#0B0E14] text-[#EEF0EA]">
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

                <h3 className="text-xl font-bold font-sans text-[#0B0E14]">
                  {pos.title}
                </h3>

                <p className="font-serif text-sm text-[#0B0E14]/90 leading-relaxed">
                  {pos.description}
                </p>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#4A5471] font-semibold font-sans mb-2">
                    Key Requirements:
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0B0E14] text-[#EEF0EA] font-sans font-bold hover:bg-[#4A5471] transition-all text-xs shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Apply via Email</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* General Inquiry Banner */}
        <section className="rounded-md border border-[#0B0E14]/20 bg-[#E1E4DB] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-sans text-[#0B0E14]">Spontaneous Applications & Fellowships</h3>
            <p className="font-serif text-xs text-[#0B0E14]/80">
              Interested in applying for MSCA, EMBO, FPU, or 'la Caixa' INPhINIT fellowships with our laboratory?
            </p>
          </div>
          <a
            href="mailto:xrovirac@ibecbarcelona.eu?subject=Fellowship%20Inquiry%20-%20Spatial%20Biotechnology"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0B0E14] hover:bg-[#4A5471] text-[#EEF0EA] font-sans font-semibold text-xs transition-all shrink-0 shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Xavier Rovira-Clavé, PhD</span>
          </a>
        </section>

      </div>
    </div>
  );
}
