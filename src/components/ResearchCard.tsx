import React, { useState } from 'react';
import { ResearchLine } from '../types';
import { ChevronDown, ChevronUp, Sparkles, Target, Layers } from 'lucide-react';

interface ResearchCardProps {
  line: ResearchLine;
}

export default function ResearchCard({ line }: ResearchCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`rounded-2xl bg-[#0b1329]/80 border transition-all duration-300 overflow-hidden flex flex-col justify-between ${line.accentColor.split(' ')[0]} hover:shadow-xl`}>
      <div className="p-6 md:p-8 space-y-4">
        
        {/* Header Strip */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono font-bold text-sm text-white">
              0{line.number}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
              Research Axis
            </span>
          </div>
          <div className="flex gap-1">
            {line.technologies.slice(0, 2).map((tech, i) => (
              <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Core Question */}
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {line.title}
          </h3>
          <p className="mt-2 text-sm font-semibold text-ibec-lime italic">
            "{line.shortQuestion}"
          </p>
        </div>

        {/* Short Summary */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {line.summary}
        </p>

        {/* Expandable Details */}
        {expanded && (
          <div className="pt-4 border-t border-white/10 space-y-4 text-sm text-slate-300 animate-fadeIn">
            <div>
              <h4 className="flex items-center gap-1.5 font-semibold text-white text-xs uppercase tracking-wider mb-1.5">
                <Target className="w-3.5 h-3.5 text-ibec-lime" /> Background & Rationale
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                {line.background}
              </p>
            </div>

            <div>
              <h4 className="flex items-center gap-1.5 font-semibold text-white text-xs uppercase tracking-wider mb-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> Methodological Framework
              </h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {line.methodology.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-ibec-lime font-bold">›</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <h4 className="flex items-center gap-1.5 font-semibold text-emerald-400 text-xs uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Translational Impact
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {line.impact}
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Footer Toggle Button */}
      <div className="px-6 md:px-8 py-3 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-ibec-lime transition-colors"
        >
          <span>{expanded ? 'Show Less' : 'Explore Detailed Framework'}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <span className="text-[11px] font-mono text-slate-400">
          {line.technologies.length} Platforms
        </span>
      </div>
    </div>
  );
}
