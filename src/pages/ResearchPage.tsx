import { researchLines } from '../data/researchData';
import ResearchCard from '../components/ResearchCard';
import { Microscope, Dna, Cpu, Sparkles } from 'lucide-react';

export default function ResearchPage() {
  return (
    <div className="bg-[#EEF0EA] text-[#0B0E14] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="px-2.5 py-1 rounded bg-[#0B0E14] text-[#EEF0EA] text-xs font-mono font-semibold">
            SCIENTIFIC PROGRAM
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-[#0B0E14] tracking-tight">
            Research Lines & Technologies
          </h1>
          <p className="font-serif text-base sm:text-lg text-[#0B0E14]/85 leading-relaxed">
            Cells continuously sense and remodel their environment by integrating multiple input signals. We deconstruct the conserved principles governing the spatial organization of multiple cell types and clonal interactions in solid tumors.
          </p>
        </div>

        {/* 4 Research Lines Detail */}
        <section className="space-y-8">
          <div className="border-b border-[#0B0E14]/15 pb-3">
            <h2 className="text-2xl font-bold font-sans text-[#0B0E14] tracking-tight">
              The Four Research Lines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchLines.map((line) => (
              <ResearchCard key={line.id} line={line} />
            ))}
          </div>
        </section>

        {/* Technological Frameworks */}
        <section className="p-8 md:p-12 rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 space-y-10 shadow-sm">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4A5471]">
              PLATFORM CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#0B0E14]">
              Integrated Experimental & Computational Suite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-2.5">
              <div className="w-8 h-8 rounded bg-[#0B0E14] text-[#EEF0EA] flex items-center justify-center">
                <Microscope className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold font-sans text-[#0B0E14]">
                Multiplexed Ion Beam Imaging (MIBI)
              </h3>
              <p className="font-serif text-xs text-[#0B0E14]/85 leading-relaxed">
                Detects 40+ isotopic mass-tagged antibodies simultaneously in tissue sections without spectral overlap, enabling deep single-cell phenotyping of tumor-stroma architecture.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-8 h-8 rounded bg-[#0B0E14] text-[#EEF0EA] flex items-center justify-center">
                <Dna className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold font-sans text-[#0B0E14]">
                In Vivo Clonal Barcoding & CRISPR
              </h3>
              <p className="font-serif text-xs text-[#0B0E14]/85 leading-relaxed">
                High-diversity genomic barcoding coupled with pooled CRISPR screens to follow subclonal fitness trajectories and identify genes mediating clonal cooperation in vivo.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-8 h-8 rounded bg-[#0B0E14] text-[#EEF0EA] flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold font-sans text-[#0B0E14]">
                Automated 3D Organoid Assays
              </h3>
              <p className="font-serif text-xs text-[#0B0E14]/85 leading-relaxed">
                Liquid-handling robotic screening of patient-derived organoids cultured in microfluidically defined metabolic gradients to test therapy synergies at scale.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
