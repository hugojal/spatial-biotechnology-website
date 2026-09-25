import { NewsItem } from '../types';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <div className="rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 hover:border-[#0B0E14] transition-all p-6 space-y-3 flex flex-col justify-between shadow-sm">
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold font-sans bg-[#0B0E14] text-[#EEF0EA]">
            {item.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-[#4A5471] font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.date}</span>
          </div>
        </div>

        <h3 className="text-base font-bold font-sans text-[#0B0E14] leading-snug">
          {item.title}
        </h3>

        <p className="font-serif text-xs text-[#0B0E14]/85 leading-relaxed">
          {item.summary}
        </p>
      </div>

      {item.link && (
        <div className="pt-2 border-t border-[#0B0E14]/15">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold font-sans text-[#0B0E14] hover:text-[#4A5471] transition-colors"
          >
            <span>Read Announcement</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
