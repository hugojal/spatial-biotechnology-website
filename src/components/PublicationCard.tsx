import { Publication } from '../types';
import { ExternalLink } from 'lucide-react';

interface PublicationCardProps {
  pub: Publication;
}

export default function PublicationCard({ pub }: PublicationCardProps) {
  return (
    <div className="rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 hover:border-[#0B0E14] transition-all p-6 md:p-7 space-y-3 shadow-sm">
      
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
      <p className="font-serif text-sm text-[#0B0E14]/85 leading-relaxed">
        {pub.authors}
      </p>

      {/* Journal, Year, DOI */}
      <div className="pt-2 border-t border-[#0B0E14]/15 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="font-sans text-[#0B0E14] font-medium">
          <span className="italic font-serif">{pub.journal}</span> ({pub.year})
          {pub.volume && <span>, {pub.volume}</span>}
          {pub.pages && <span>, {pub.pages}</span>}
        </div>

        <a
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-[#0B0E14] hover:text-[#4A5471] px-2.5 py-1 rounded bg-[#EEF0EA] border border-[#0B0E14]/20 hover:border-[#0B0E14] transition-colors"
        >
          <span>DOI: {pub.doi}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
}
