import { useState } from 'react';
import { TeamMember } from '../types';
import { Linkedin, Mail, ExternalLink, Check } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);

  const displayName = member.degree ? `${member.name}, ${member.degree}` : member.name;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(member.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Extract initials for fallback avatar
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="group relative rounded-2xl bg-[#0b1329]/80 border border-white/10 hover:border-ibec-lime/40 transition-all duration-500 hover:shadow-2xl hover:shadow-ibec-lime/10 flex flex-col overflow-hidden">
      
      {/* Headshot Area with B&W -> Color Hover Effect */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
        {!imageError && member.photo ? (
          <img
            src={member.photo}
            alt={displayName}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
          />
        ) : (
          /* Fallback Initial Banner with Color Transition */
          <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${member.avatarPlaceholderColor || 'from-slate-800 to-slate-900'} grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500`}>
            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center text-2xl font-bold text-white bg-slate-950/40 backdrop-blur-sm shadow-inner">
              {initials}
            </div>
            <span className="text-xs text-slate-400 mt-2 font-mono">
              {member.photo?.split('/').pop()}
            </span>
          </div>
        )}

        {/* Quick Social Floating Overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-950/70 hover:bg-[#0077B5] text-slate-300 hover:text-white backdrop-blur-md border border-white/10 shadow-lg transition-all hover:scale-110"
              title={`${member.name} on LinkedIn`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Category Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider backdrop-blur-md bg-slate-950/80 text-ibec-lime border border-ibec-lime/30 shadow-md">
            {member.role}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg font-bold text-white group-hover:text-ibec-lime transition-colors">
              {displayName}
            </h3>
          </div>

          <p className="text-xs text-slate-400 font-medium mt-0.5">
            {member.role}
          </p>

          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Research Focus Tags */}
        {member.researchFocus && member.researchFocus.length > 0 && (
          <div className="pt-2">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Focus Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {member.researchFocus.map((focus, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-slate-300 border border-white/10 font-mono"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact Strip */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 hover:text-ibec-lime transition-colors group/btn"
            title="Click to copy email address"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Mail className="w-3.5 h-3.5" />
            )}
            <span className="truncate max-w-[180px]">{member.email}</span>
          </button>

          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

      </div>

    </div>
  );
}
