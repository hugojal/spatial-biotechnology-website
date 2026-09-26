import { useState } from 'react';
import { teamMembers } from '../data/teamData';
import { Linkedin, Mail, Check } from 'lucide-react';

import { publicUrl } from '../lib/publicUrl';

export default function TeamPage() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="text-[#0B0E14] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="border-b border-[#0B0E14]/15 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-[#0B0E14] tracking-tight">
            Team
          </h1>
        </header>

        <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 sm:gap-x-6 sm:gap-y-8 lg:gap-x-8 lg:gap-y-12">
          {teamMembers.map((member) => {
            const displayName = member.degree ? `${member.name}, ${member.degree}` : member.name;
            const isCopied = copiedEmail === member.email;

            return (
              <div key={member.id} className="group flex flex-col space-y-1.5 sm:space-y-3">
                <div className="aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-md bg-[#D3D8CB] border border-[#0B0E14]/20 shadow-sm">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={displayName}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm sm:text-xl font-bold text-[#4A5471]">
                      {member.name.slice(0, 2)}
                    </div>
                  )}
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="font-sans font-bold text-[10px] leading-tight sm:text-sm lg:text-lg text-[#0B0E14]">
                    {displayName}
                  </h3>

                  <p className="font-sans text-[9px] sm:text-xs text-[#4A5471] font-medium line-clamp-2">
                    {member.role}
                  </p>

                  <div className="pt-0.5 sm:pt-2 flex items-center gap-1 sm:gap-3">
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-0.5 sm:p-1.5 rounded text-[#4A5471] hover:text-[#0077B5] hover:bg-white/60 transition-colors"
                        title={`${member.name} on LinkedIn`}
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}

                    {member.email ? (
                      <button
                        onClick={(e) => handleCopyEmail(member.email, e)}
                        className="p-0.5 sm:p-1.5 rounded text-[#4A5471] hover:text-[#0B0E14] hover:bg-white/60 transition-colors flex items-center gap-1"
                        title={isCopied ? 'Copied!' : `Copy email (${member.email})`}
                      >
                        {isCopied ? (
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                        ) : (
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        )}
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-12 border-t border-[#0B0E14]/15">
          <div className="rounded-md overflow-hidden border border-[#0B0E14]/20 shadow-sm">
            <img
              src={publicUrl('images/team/teampic.jpg')}
              alt="Spatial Biotechnology Lab Team Photo"
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <p className="font-serif text-xs text-[#4A5471] mt-2 text-center">
            Spatial Biotechnology Research Group at the Institute for Bioengineering of Catalonia (IBEC), Barcelona.
          </p>
        </div>
      </div>
    </div>
  );
}
