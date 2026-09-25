import { NewsItem } from '../types';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const categoryColors = {
    Grant: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Publication: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    Event: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    Team: 'bg-ibec-lime/20 text-ibec-lime border-ibec-lime/30',
    Outreach: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  };

  return (
    <div className="rounded-2xl bg-[#0b1329]/80 border border-white/10 hover:border-ibec-lime/40 transition-all p-6 space-y-3 flex flex-col justify-between">
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${categoryColors[item.category]}`}>
            {item.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.date}</span>
          </div>
        </div>

        <h3 className="text-base font-bold text-white group-hover:text-ibec-lime transition-colors leading-snug">
          {item.title}
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed">
          {item.summary}
        </p>
      </div>

      {item.link && (
        <div className="pt-2 border-t border-white/5">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-ibec-lime hover:text-white transition-colors"
          >
            <span>Read Announcement</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
