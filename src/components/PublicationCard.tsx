import React, { useState } from 'react';
import { Publication } from '../types';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';

interface PublicationCardProps {
  pub: Publication;
}

export default function PublicationCard({ pub }: PublicationCardProps) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyCitation = () => {
    const citation = `${pub.authors} (${pub.year}). "${pub.title}". ${pub.journal}${pub.volume ? ` ${pub.volume}` : ''}${pub.pages ? `, ${pub.pages}` : ''}. DOI: https://doi.org/${pub.doi}`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-[#0b1329]/80 border border-white/10 hover:border-ibec-lime/30 transition-all p-6 md:p-8 space-y-4">
      
      {/* Top Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-ibec-lime/20 text-ibec-lime border border-ibec-lime/30 font-mono">
            {pub.year}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            {pub.journal}
          </span>
          {pub.openAccess && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Open Access
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCitation}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
            title="Copy BibTeX / formatted citation"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Cite'}</span>
          </button>
          
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-ibec-lime hover:text-white px-3 py-1 rounded-md bg-ibec-lime/10 hover:bg-ibec-lime/20 border border-ibec-lime/30 transition-colors"
          >
            <span>DOI</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
        <a
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ibec-lime transition-colors"
        >
          {pub.title}
        </a>
      </h3>

      {/* Authors */}
      <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
        {pub.authors}
      </p>

      {/* Keywords */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {pub.keywords.map((kw, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/5 text-slate-300 border border-white/5"
          >
            {kw}
          </span>
        ))}
      </div>

      {/* Expandable Abstract */}
      <div className="pt-2">
        <button
          onClick={() => setShowAbstract(!showAbstract)}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-ibec-lime transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>{showAbstract ? 'Hide Abstract' : 'Read Full Abstract'}</span>
          {showAbstract ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showAbstract && (
          <div className="mt-3 p-4 rounded-xl bg-slate-950/70 border border-white/10 text-xs text-slate-300 leading-relaxed text-justify animate-fadeIn">
            <p>{pub.abstract}</p>
          </div>
        )}
      </div>

    </div>
  );
}
