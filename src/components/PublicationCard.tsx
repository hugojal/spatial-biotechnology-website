import { useState } from 'react';
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
    <div className="rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 hover:border-[#0B0E14] transition-all p-6 md:p-8 space-y-4 shadow-sm">
      
      {/* Top Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#0B0E14] text-[#EEF0EA] font-mono">
            {pub.year}
          </span>
          <span className="text-xs font-semibold font-sans uppercase tracking-wider text-[#4A5471]">
            {pub.journal}
          </span>
          {pub.openAccess && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold font-sans bg-[#EEF0EA] text-[#0B0E14] border border-[#0B0E14]/20">
              Open Access
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCitation}
            className="flex items-center gap-1 text-xs font-sans text-[#4A5471] hover:text-[#0B0E14] px-2.5 py-1 rounded bg-[#EEF0EA] hover:bg-white border border-[#0B0E14]/15 transition-colors"
            title="Copy BibTeX / formatted citation"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-channelCyan" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Cite'}</span>
          </button>
          
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold font-mono text-[#0B0E14] hover:text-[#4A5471] px-3 py-1 rounded bg-[#EEF0EA] hover:bg-white border border-[#0B0E14]/25 transition-colors"
          >
            <span>DOI</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold font-sans text-[#0B0E14] leading-snug">
        <a
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#4A5471] transition-colors"
        >
          {pub.title}
        </a>
      </h3>

      {/* Authors in Source Serif 4 */}
      <p className="font-serif text-xs md:text-sm text-[#0B0E14]/80 leading-relaxed">
        {pub.authors}
      </p>

      {/* Keywords */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {pub.keywords.map((kw, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-[11px] font-sans rounded bg-[#EEF0EA] text-[#4A5471] border border-[#0B0E14]/10"
          >
            {kw}
          </span>
        ))}
      </div>

      {/* Expandable Abstract in Source Serif 4 */}
      <div className="pt-2">
        <button
          onClick={() => setShowAbstract(!showAbstract)}
          className="flex items-center gap-1.5 text-xs font-semibold font-sans text-[#0B0E14] hover:text-[#4A5471] transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>{showAbstract ? 'Hide Abstract' : 'Read Full Abstract'}</span>
          {showAbstract ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showAbstract && (
          <div className="mt-3 p-4 rounded bg-[#EEF0EA] border border-[#0B0E14]/15 font-serif text-xs text-[#0B0E14]/90 leading-relaxed text-justify">
            <p>{pub.abstract}</p>
          </div>
        )}
      </div>

    </div>
  );
}
