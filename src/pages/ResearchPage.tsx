import { researchLines } from '../data/researchData';
import ResearchCard from '../components/ResearchCard';
import { Microscope, Dna, Cpu, Sparkles } from 'lucide-react';

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="px-3 py-1 rounded-full bg-ibec-lime/20 text-ibec-lime text-xs font-mono border border-ibec-lime/30">
          Scientific Mission
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Research Program & Axes
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Cells continuously sense and remodel their environment by integrating multiple input signals. We deconstruct the principles governing the spatial organization of multiple cell types and clonal interactions in solid tumors.
        </p>
      </div>

      {/* 4 Research Lines Detail */}
      <section className="space-y-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            The Four Core Research Lines
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Combining genome editing, multiplexed ion beam imaging, and spatial computation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchLines.map((line) => (
            <ResearchCard key={line.id} line={line} />
          ))}
        </div>
      </section>

      {/* Technological Frameworks */}
      <section className="p-8 md:p-12 rounded-3xl bg-[#0b1329]/90 border border-white/10 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            Platform Capabilities
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Integrated Experimental & Computational Suite
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-ibec-lime/20 text-ibec-lime flex items-center justify-center">
              <Microscope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Multiplexed Ion Beam Imaging (MIBI)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Detects 40+ isotopic mass-tagged antibodies simultaneously in tissue sections without spectral overlap, enabling deep single-cell phenotyping of tumor-stroma architecture.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Dna className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              In Vivo Clonal Barcoding & CRISPR
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              High-diversity DNA/RNA barcoding coupled with pooled CRISPR screens to follow subclonal fitness trajectories and identify genes mediating clonal cooperation in vivo.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Automated 3D Organoid Assays
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Liquid-handling robotic screening of patient-derived organoids cultured in microfluidically defined metabolic gradients to test therapy synergies at scale.
            </p>
          </div>

        </div>
      </section>

      {/* Clinical & Societal Vision */}
      <section className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 space-y-4">
        <div className="flex items-center gap-2 text-ibec-lime font-mono text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" /> Translational Impact
        </div>
        <h3 className="text-xl font-bold text-white">
          From Principles to Precision Medicine
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
          Advances in decoding multicellular spatial patterning will manipulate tissue function for the direct benefit of society: from fundamental cancer ecology to predictive spatial biomarkers in clinical trials and enhanced adoptive cellular immunotherapies.
        </p>
      </section>

    </div>
  );
}
