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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="px-3 py-1 rounded-full bg-ibec-lime/20 text-ibec-lime text-xs font-mono border border-ibec-lime/30">
          Our Team
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          People & Researchers
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          An international and interdisciplinary team of bioengineers, cancer biologists, data scientists, and technicians at IBEC Barcelona.
        </p>
      </div>

      {/* Principal Investigator Section */}
      <section className="space-y-6">
        <div className="border-b border-white/10 pb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-ibec-lime" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Principal Investigator
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {pi.map((member) => (
            <div
              key={member.id}
              className="group rounded-3xl bg-[#0b1329]/90 border border-white/10 hover:border-ibec-lime/40 transition-all p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start shadow-xl"
            >
              {/* PI Headshot with B&W -> Color Hover */}
              <div className="w-full md:w-72 aspect-square rounded-2xl overflow-hidden bg-slate-900 shrink-0 relative border border-white/10">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-ibec-lime/30 to-emerald-500/30 grayscale group-hover:grayscale-0 transition-all -z-10">
                  <span className="text-3xl font-bold text-white">XR</span>
                  <span className="text-xs text-slate-400 mt-2 font-mono">
                    {member.photo?.split('/').pop()}
                  </span>
                </div>
              </div>

              {/* PI Details */}
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-ibec-lime transition-colors">
                      {member.name}, {member.degree}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-ibec-lime/20 text-ibec-lime border border-ibec-lime/30">
                      Junior Group Leader
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1 font-medium">
                    Institute for Bioengineering of Catalonia (IBEC)
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {member.bio}
                </p>

                {/* Education / Background */}
                {member.education && (
                  <div className="pt-2">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-ibec-lime" /> Background & Training
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {member.education.map((edu, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-ibec-lime">›</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact & Social Links */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs">
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0077B5]/20 text-[#38bdf8] hover:bg-[#0077B5] hover:text-white border border-[#0077B5]/30 transition-all font-semibold"
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
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-ibec-lime" />
                      <span>Google Scholar</span>
                    </a>
                  )}

                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
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
        <div className="border-b border-white/10 pb-3 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Lab Management & Technical Operations
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
        <div className="border-b border-white/10 pb-3 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-emerald-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
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
        <div className="border-b border-white/10 pb-3 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-amber-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
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
        <div className="border-b border-white/10 pb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-ibec-lime" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
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
  );
}
