import { Link } from 'react-router-dom';
import GameOfLife from '../components/GameOfLife';
import IbecLogo from '../components/IbecLogo';
import { researchLines } from '../data/researchData';
import { publications } from '../data/publicationsData';
import { teamMembers } from '../data/teamData';
import { newsItems } from '../data/newsData';
import ResearchCard from '../components/ResearchCard';
import PublicationCard from '../components/PublicationCard';
import TeamCard from '../components/TeamCard';
import NewsCard from '../components/NewsCard';
import { ArrowRight, ChevronRight, Layers } from 'lucide-react';

export default function HomePage() {
  const featuredPubs = publications.slice(0, 2);
  const featuredTeam = teamMembers.slice(0, 4);
  const featuredNews = newsItems.slice(0, 3);

  return (
    <div className="bg-[#EEF0EA] text-[#0B0E14] min-h-[calc(100vh-80px)] flex flex-col justify-between">
      
      {/* Central Framed Hero Section (Matching User's Mockup) */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* The Mockup Box Container */}
        <div className="rounded-none sm:rounded-md border border-[#0B0E14] bg-[#E1E4DB] p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Column: Core Quote in Source Serif 4 */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-[#0B0E14] leading-[1.6] tracking-tight">
                “Cells continuously sense their environment by integrating multiple input signals from neighbouring cells and respond to them with a fast-flowing cascade of abundant outputs. In turn, these outputs modify the environment.”
              </blockquote>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/research"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0B0E14] text-[#EEF0EA] font-sans font-semibold text-sm hover:bg-[#4A5471] transition-colors"
                >
                  <span>Explore Research</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#EEF0EA] hover:bg-white text-[#0B0E14] font-sans font-semibold text-sm border border-[#0B0E14]/30 transition-colors"
                >
                  <span>Meet the Lab</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Game of Life Simulation */}
            <div className="lg:col-span-7 w-full h-[380px] sm:h-[420px] md:h-[460px] bg-[#EEF0EA] border border-[#0B0E14]/30 rounded-md p-4 flex flex-col shadow-inner">
              <GameOfLife initialRows={26} initialCols={38} speedMs={110} />
            </div>

          </div>
        </div>

      </section>

      {/* Center IBEC Logo Presentation (Matching User's Mockup) */}
      <section className="py-8 px-4 flex flex-col items-center justify-center border-t border-[#0B0E14]/10 bg-[#EEF0EA]">
        <a
          href="https://ibecbarcelona.eu/research-groups/spatial-biotechnology/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center transition-transform hover:scale-105"
          title="Spatial Biotechnology at Institute for Bioengineering of Catalonia (IBEC)"
        >
          <IbecLogo className="h-16 sm:h-20 w-auto" />
          <span className="text-[11px] font-mono text-[#4A5471] mt-1 group-hover:text-[#0B0E14] transition-colors">
            Parc Científic de Barcelona · Severo Ochoa Centre of Excellence
          </span>
        </a>
      </section>

      {/* Research Axes Section */}
      <section className="border-t border-[#0B0E14]/15 bg-[#E1E4DB]/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#4A5471] font-semibold">
                Scientific Program
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#0B0E14] tracking-tight mt-1">
                The Four Research Lines
              </h2>
            </div>
            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B0E14] hover:text-[#4A5471] transition-colors font-sans"
            >
              <span>View full experimental framework</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchLines.map((line) => (
              <ResearchCard key={line.id} line={line} />
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Preprints Highlight */}
      <section className="border-t border-[#0B0E14]/15 bg-[#EEF0EA] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#4A5471] font-semibold">
                Outputs
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#0B0E14] tracking-tight mt-1">
                Selected High-Impact Publications
              </h2>
            </div>
            <Link
              to="/publications"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B0E14] hover:text-[#4A5471] transition-colors font-sans"
            >
              <span>View all publications</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-6">
            {featuredPubs.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview with B&W -> Color Hover */}
      <section className="border-t border-[#0B0E14]/15 bg-[#E1E4DB]/40 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#4A5471] font-semibold">
                Group Members
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#0B0E14] tracking-tight mt-1">
                Spatial Biotechnology Team
              </h2>
            </div>
            <Link
              to="/team"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B0E14] hover:text-[#4A5471] transition-colors font-sans"
            >
              <span>Meet the whole team</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Grants & News */}
      <section className="border-t border-[#0B0E14]/15 bg-[#EEF0EA] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#4A5471] font-semibold">
                Lab Milestones
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#0B0E14] tracking-tight mt-1">
                Grants & News
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B0E14] hover:text-[#4A5471] transition-colors font-sans"
            >
              <span>View all news</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
