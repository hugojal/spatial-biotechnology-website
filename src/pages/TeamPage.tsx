import { teamMembers } from '../data/teamData';
import TeamCard from '../components/TeamCard';
import { Users, GraduationCap, Award, Linkedin, Mail, BookOpen } from 'lucide-react';

export default function TeamPage() {
  const pi = teamMembers.filter((m) => m.category === 'pi');
  const management = teamMembers.filter((m) => m.category === 'management');
  const postdocs = teamMembers.filter((m) => m.category === 'postdoc');
  const phdStudents = teamMembers.filter((m) => m.category === 'phd');
  const interns = teamMembers.filter((m) => m.category === 'intern');

  return (
    <div className="bg-[#EEF0EA] text-[#0B0E14] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <span className="px-2.5 py-1 rounded bg-[#0B0E14] text-[#EEF0EA] text-xs font-mono font-semibold">
            RESEARCH GROUP
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-[#0B0E14] tracking-tight">
            Team Members
          </h1>
          <p className="font-serif text-base sm:text-lg text-[#0B0E14]/85 leading-relaxed">
            An interdisciplinary team of bioengineers, cancer biologists, data scientists, and technicians at IBEC Barcelona.
          </p>
        </div>

        {/* Principal Investigator Section */}
        <section className="space-y-6">
          <div className="border-b border-[#0B0E14]/15 pb-2.5 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#4A5471]" />
            <h2 className="text-2xl font-bold font-sans text-[#0B0E14] tracking-tight">
              Principal Investigator
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {pi.map((member) => (
              <div
                key={member.id}
                className="group rounded-md bg-[#E1E4DB] border border-[#0B0E14]/20 hover:border-[#0B0E14] transition-all p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start shadow-sm"
              >
                {/* PI Headshot with B&W -> Color Hover */}
                <div className="w-full md:w-64 aspect-square rounded-md overflow-hidden bg-[#D3D8CB] shrink-0 relative border border-[#0B0E14]/20">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={`${member.name}, ${member.degree}`}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#D3D8CB] grayscale group-hover:grayscale-0 transition-all -z-10">
                    <span className="text-2xl font-bold font-sans text-[#0B0E14]">XR</span>
                    <span className="text-xs text-[#4A5471] mt-1 font-mono">
                      {member.photo?.split('/').pop()}
                    </span>
                  </div>
                </div>

                {/* PI Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl md:text-3xl font-extrabold font-sans text-[#0B0E14]">
                        {member.name}, {member.degree}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded text-xs font-semibold font-sans bg-[#0B0E14] text-[#EEF0EA]">
                        Principal Investigator
                      </span>
                    </div>
                    <p className="text-xs text-[#4A5471] font-sans font-medium mt-1">
                      Institute for Bioengineering of Catalonia (IBEC) · Junior Group Leader
                    </p>
                  </div>

                  <p className="font-serif text-sm text-[#0B0E14]/90 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Education / Background */}
                  {member.education && (
                    <div className="pt-2">
                      <h4 className="text-xs uppercase tracking-wider text-[#4A5471] font-semibold font-sans mb-1.5 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-[#0B0E14]" /> Background & Training
                      </h4>
                      <ul className="space-y-1 text-xs text-[#0B0E14]/90 font-serif">
                        {member.education.map((edu, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#0B0E14] font-sans font-bold">›</span>
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contact & Social Links */}
                  <div className="pt-4 border-t border-[#0B0E14]/15 flex flex-wrap items-center gap-3 text-xs">
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0077B5] text-white hover:bg-[#005E93] transition-all font-sans font-semibold"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LinkedIn Profile</span>
                      </a>
                    )}

                    {member.scholar && (
                      <a
                        href={member.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#EEF0EA] hover:bg-white text-[#0B0E14] border border-[#0B0E14]/20 transition-all font-sans"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#4A5471]" />
                        <span>Google Scholar</span>
                      </a>
                    )}

                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#EEF0EA] hover:bg-white text-[#0B0E14] border border-[#0B0E14]/20 transition-all font-mono text-[11px]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#4A5471]" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lab Management & Operations */}
        <section className="space-y-6">
          <div className="border-b border-[#0B0E14]/15 pb-2.5 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#4A5471]" />
            <h2 className="text-xl font-bold font-sans text-[#0B0E14] tracking-tight">
              Lab Management & Senior Technical Staff
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {management.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Postdoctoral Researchers */}
        <section className="space-y-6">
          <div className="border-b border-[#0B0E14]/15 pb-2.5 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#4A5471]" />
            <h2 className="text-xl font-bold font-sans text-[#0B0E14] tracking-tight">
              Postdoctoral Researchers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {postdocs.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* PhD Candidates */}
        <section className="space-y-6">
          <div className="border-b border-[#0B0E14]/15 pb-2.5 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#4A5471]" />
            <h2 className="text-xl font-bold font-sans text-[#0B0E14] tracking-tight">
              PhD Candidates
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phdStudents.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Undergraduate & Research Interns */}
        <section className="space-y-6">
          <div className="border-b border-[#0B0E14]/15 pb-2.5 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#4A5471]" />
            <h2 className="text-xl font-bold font-sans text-[#0B0E14] tracking-tight">
              Undergraduate & Research Interns
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interns.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
