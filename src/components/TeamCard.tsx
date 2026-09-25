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
    <div className="group relative rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 hover:border-[#0B0E14] transition-all duration-300 flex flex-col overflow-hidden shadow-sm">
      
      {/* Headshot Area with B&W -> Color Hover Effect */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#D3D8CB] border-b border-[#0B0E14]/15">
        {!imageError && member.photo ? (
          <img
            src={member.photo}
            alt={displayName}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
          />
        ) : (
          /* Fallback Initial Banner with Color Transition */
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#D3D8CB] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500">
            <div className="w-16 h-16 rounded-full border border-[#0B0E14]/20 flex items-center justify-center text-xl font-bold text-[#0B0E14] bg-[#EEF0EA] shadow-sm">
              {initials}
            </div>
            <span className="text-[11px] text-[#4A5471] mt-2 font-mono">
              {member.photo?.split('/').pop()}
            </span>
          </div>
        )}

        {/* Quick Social Floating Overlay */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-2">
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-[#0B0E14]/80 hover:bg-[#0077B5] text-white backdrop-blur-sm transition-all hover:scale-110"
              title={`${member.name} on LinkedIn`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Role Tag */}
        <div className="absolute bottom-2.5 left-2.5">
          <span className="px-2 py-0.5 rounded text-[10px] font-sans font-semibold uppercase tracking-wider bg-[#0B0E14] text-[#EEF0EA] shadow-sm">
            {member.role}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#E1E4DB]">
        <div>
          <h3 className="text-base font-bold font-sans text-[#0B0E14] leading-tight">
            {displayName}
          </h3>

          <p className="text-xs text-[#4A5471] font-sans font-medium mt-0.5">
            {member.role}
          </p>

          <p className="font-serif text-xs text-[#0B0E14]/85 mt-2.5 leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Research Focus Tags */}
        {member.researchFocus && member.researchFocus.length > 0 && (
          <div className="pt-1">
            <div className="flex flex-wrap gap-1">
              {member.researchFocus.slice(0, 3).map((focus, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 text-[10px] rounded bg-[#EEF0EA] text-[#0B0E14] border border-[#0B0E14]/15 font-sans"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact Strip */}
        <div className="pt-3 border-t border-[#0B0E14]/15 flex items-center justify-between text-xs text-[#4A5471]">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1 hover:text-[#0B0E14] transition-colors"
            title="Click to copy email address"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-channelCyan" />
            ) : (
              <Mail className="w-3.5 h-3.5" />
            )}
            <span className="truncate max-w-[160px] font-mono text-[11px]">{member.email}</span>
          </button>

          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-sans text-[11px] text-[#4A5471] hover:text-[#0B0E14] transition-colors font-medium"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}
        </div>

      </div>

    </div>
  );
}
