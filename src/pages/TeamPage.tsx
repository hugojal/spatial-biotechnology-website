import { useState } from 'react';
import { teamMembers } from '../data/teamData';
import { Linkedin, Mail, Check } from 'lucide-react';
import { publicAsset } from '../utils/publicAsset';

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
        
        {/* Page Title */}
        <header className="border-b border-[#0B0E14]/15 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-[#0B0E14] tracking-tight">
            Team
          </h1>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((member) => {
            const displayName = member.degree ? `${member.name}, ${member.degree}` : member.name;
            const isCopied = copiedEmail === member.email;

            return (
              <div key={member.id} className="group flex flex-col space-y-3">
                
                {/* Photo: B&W by default -> Color on hover */}
                <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-[#D3D8CB] border border-[#0B0E14]/20 shadow-sm">
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
                    <div className="w-full h-full flex items-center justify-center text-xl font-bold text-[#4A5471]">
                      {member.name.slice(0, 2)}
                    </div>
                  )}
                </div>

                {/* Info underneath */}
                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-lg text-[#0B0E14] leading-tight">
                    {displayName}
                  </h3>
                  
                  <p className="font-sans text-xs text-[#4A5471] font-medium">
                    {member.role}
                  </p>

                  {/* Actions: LinkedIn + Email */}
                  <div className="pt-2 flex items-center gap-3">
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-[#4A5471] hover:text-[#0077B5] hover:bg-white/60 transition-colors"
                        title={`${member.name} on LinkedIn`}
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}

                    {member.email ? (
                      <button
                        onClick={(e) => handleCopyEmail(member.email, e)}
                        className="p-1.5 rounded text-[#4A5471] hover:text-[#0B0E14] hover:bg-white/60 transition-colors flex items-center gap-1"
                        title={isCopied ? 'Copied!' : `Copy email (${member.email})`}
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Mail className="w-4 h-4" />
                        )}
                      </button>
                    ) : null}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Group Photo Section */}
        <div className="pt-12 border-t border-[#0B0E14]/15">
          <div className="rounded-md overflow-hidden border border-[#0B0E14]/20 shadow-sm">
            <img
              src={publicAsset('images/team/teampic.JPG')}
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
