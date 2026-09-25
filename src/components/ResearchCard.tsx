import { useState } from 'react';
import { ResearchLine } from '../types';
import { ChevronDown, ChevronUp, Target, Layers, Sparkles } from 'lucide-react';

interface ResearchCardProps {
  line: ResearchLine;
}

export default function ResearchCard({ line }: ResearchCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 hover:border-[#0B0E14] transition-all duration-300 flex flex-col justify-between shadow-sm">
      <div className="p-6 md:p-8 space-y-4">
        
        {/* Header Strip */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded bg-[#0B0E14] flex items-center justify-center font-mono font-bold text-xs text-[#EEF0EA]">
              0{line.number}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold font-sans text-[#4A5471]">
              Research Line
            </span>
          </div>
          <div className="flex gap-1">
            {line.technologies.slice(0, 2).map((tech, i) => (
              <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#EEF0EA] text-[#0B0E14] border border-[#0B0E14]/15">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Core Question */}
        <div>
          <h3 className="text-xl font-bold font-sans text-[#0B0E14] tracking-tight">
            {line.title}
          </h3>
          <p className="mt-2 text-sm font-serif font-medium text-[#4A5471] italic">
            "{line.shortQuestion}"
          </p>
        </div>

        {/* Summary in Source Serif 4 */}
        <p className="font-serif text-sm text-[#0B0E14]/90 leading-relaxed">
          {line.summary}
        </p>

        {/* Expandable Details */}
        {expanded && (
          <div className="pt-4 border-t border-[#0B0E14]/15 space-y-4 text-sm text-[#0B0E14]">
            <div>
              <h4 className="flex items-center gap-1.5 font-semibold text-[#0B0E14] text-xs uppercase font-sans tracking-wider mb-1.5">
                <Target className="w-3.5 h-3.5 text-[#4A5471]" /> Background & Rationale
              </h4>
              <p className="font-serif text-xs text-[#0B0E14]/80 leading-relaxed">
                {line.background}
              </p>
            </div>

            <div>
              <h4 className="flex items-center gap-1.5 font-semibold text-[#0B0E14] text-xs uppercase font-sans tracking-wider mb-1.5">
                <Layers className="w-3.5 h-3.5 text-channelCyan" /> Methodological Framework
              </h4>
              <ul className="space-y-1 text-xs text-[#0B0E14]/90 font-sans">
                {line.methodology.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-channelCyan font-bold">›</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded bg-[#EEF0EA] border border-[#0B0E14]/15">
              <h4 className="flex items-center gap-1.5 font-semibold text-[#0B0E14] text-xs uppercase font-sans tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-channelMagenta" /> Translational Impact
              </h4>
              <p className="font-serif text-xs text-[#0B0E14]/85 leading-relaxed">
                {line.impact}
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Footer Toggle Button */}
      <div className="px-6 md:px-8 py-3 bg-[#EEF0EA]/60 border-t border-[#0B0E14]/15 flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-semibold font-sans text-[#0B0E14] hover:text-[#4A5471] transition-colors"
        >
          <span>{expanded ? 'Show Less' : 'Explore Detailed Framework'}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <span className="text-[11px] font-mono text-[#4A5471]">
          {line.technologies.length} Platforms
        </span>
      </div>
    </div>
  );
}
