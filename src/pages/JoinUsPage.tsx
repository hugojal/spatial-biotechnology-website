import { jobPositions } from '../data/positionsData';
import { Briefcase, Send, CheckCircle2, Heart, Award, Sparkles, Mail } from 'lucide-react';

export default function JoinUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="px-3 py-1 rounded-full bg-ibec-lime/20 text-ibec-lime text-xs font-mono border border-ibec-lime/30">
          Careers & Fellowships
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Join Our Laboratory
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          We welcome ambitious, curious, and collaborative scientists to tackle fundamental and translational challenges in spatial multi-omics and cancer biology.
        </p>
      </div>

      {/* Why Join IBEC Card Grid */}
      <section className="p-8 md:p-10 rounded-3xl bg-[#0b1329]/90 border border-white/10 space-y-8">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Why do research with us in Barcelona?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-ibec-lime/20 text-ibec-lime flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Pioneering Technologies</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Direct access to Multiplexed Ion Beam Imaging (MIBI), automated liquid robotics, organoid biobanks, and high-performance computing.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Global Collaborations</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Work alongside international consortia including Stanford University, Harvard Medical School, DKFZ Heidelberg, and Duke University.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Barcelona Ecosystem</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Located at the Barcelona Science Park (PCB), offering a vibrant international scientific community with high quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="space-y-6">
        <div className="border-b border-white/10 pb-3 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-ibec-lime" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Current Calls & Opportunities
          </h2>
        </div>

        <div className="space-y-6">
          {jobPositions.map((pos) => (
            <div
              key={pos.id}
              className="rounded-2xl bg-[#0b1329]/80 border border-white/10 hover:border-ibec-lime/40 transition-all p-6 md:p-8 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-ibec-lime/20 text-ibec-lime border border-ibec-lime/30">
                    {pos.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {pos.reference}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Deadline: <strong className="text-slate-200">{pos.deadline}</strong>
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {pos.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {pos.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Key Requirements:
                </h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  {pos.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ibec-lime shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Send CV, letter of interest & references to:
                </span>
                <a
                  href={`mailto:xrovirac@ibecbarcelona.eu?subject=Application%20${encodeURIComponent(pos.reference)}%20-%20${encodeURIComponent(pos.title)}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ibec-lime text-slate-950 font-bold hover:bg-ibec-lime-light transition-all text-xs shadow-md"
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
      <section className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">Spontaneous Applications & Fellowships</h3>
          <p className="text-xs text-slate-400">
            Interested in applying for Marie Skłodowska-Curie (MSCA), EMBO, FPU, or 'la Caixa' INPhINIT fellowships with our group?
          </p>
        </div>
        <a
          href="mailto:xrovirac@ibecbarcelona.eu?subject=Spontaneous%20Fellowship%20Inquiry%20-%20Spatial%20Biotechnology"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-all shrink-0"
        >
          <Mail className="w-3.5 h-3.5 text-ibec-lime" />
          <span>Contact Xavier Rovira-Clavé, PhD</span>
        </a>
      </section>

    </div>
  );
}
