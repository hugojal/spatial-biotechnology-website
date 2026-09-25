import { Link } from 'react-router-dom';
import SpatialCanvas from '../components/SpatialCanvas';
import ResearchCard from '../components/ResearchCard';
import PublicationCard from '../components/PublicationCard';
import NewsCard from '../components/NewsCard';
import TeamCard from '../components/TeamCard';
import { researchLines } from '../data/researchData';
import { publications } from '../data/publicationsData';
import { newsItems } from '../data/newsData';
import { teamMembers } from '../data/teamData';
import { ArrowRight, Sparkles, Dna, Microscope, Cpu, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const featuredPubs = publications.slice(0, 2);
  const featuredNews = newsItems.slice(0, 3);
  const keyTeam = teamMembers.slice(0, 4);

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-ibec-lime">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Institute for Bioengineering of Catalonia (IBEC)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Deconstructing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ibec-lime via-emerald-400 to-cyan-400">
                Spatial Clonal Ecology
              </span> <br />
              in Solid Tumors
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              We engineer high-throughput spatial multi-omics, multiplexed ion beam imaging (MIBI), and perturbation platforms to understand how cellular clones organize, cooperate, and resist therapies in native tissue microenvironments.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ibec-lime text-slate-950 font-bold hover:bg-ibec-lime-light transition-all shadow-lg shadow-ibec-lime/20 hover:scale-105"
              >
                <span>Explore Research Axes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all hover:border-white/20"
              >
                <span>Open Positions</span>
              </Link>
            </div>

            {/* Metrics Ribbon */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10">
              <div>
                <div className="text-2xl font-extrabold text-white font-mono">40+</div>
                <div className="text-xs text-slate-400">MIBI Channels / Tissue</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-ibec-lime font-mono">ERC & HFSP</div>
                <div className="text-xs text-slate-400">Competitive Grants</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-cyan-400 font-mono">Single-Cell</div>
                <div className="text-xs text-slate-400">Spatial Cartography</div>
              </div>
            </div>
          </div>

          {/* Right Interactive Spatial Canvas */}
          <div className="lg:col-span-6 w-full h-[420px] lg:h-[480px]">
            <SpatialCanvas />
          </div>

        </div>
      </section>

      {/* Core Research Axes Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ibec-lime">
              Scientific Program
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Four Core Research Axes
            </h2>
          </div>
          <Link
            to="/research"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ibec-lime hover:text-white transition-colors"
          >
            <span>View detailed methodologies</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchLines.map((line) => (
            <ResearchCard key={line.id} line={line} />
          ))}
        </div>
      </section>

      {/* Technology Pillars */}
      <section className="bg-gradient-to-b from-[#0b1329]/60 to-[#070b14] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              Technological Platforms
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Interdisciplinary Engineering & Biology
            </h2>
            <p className="text-sm text-slate-400">
              State-of-the-art wet-lab and computational tools established at the Barcelona Science Park (PCB).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0b1329]/90 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-ibec-lime/20 text-ibec-lime flex items-center justify-center">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Multiplexed Ion Beam Imaging (MIBI)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Secondary ion mass spectrometry detecting 40+ isotopic mass tags simultaneously with sub-cellular resolution in clinical and preclinical specimens.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1329]/90 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Dna className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                In Vivo Barcoding & Pooled CRISPR
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                High-complexity genomic barcoding and pooled genetic screens to interrogate subclonal ecological fitness and clonal cooperation dynamics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1329]/90 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Computational Tissue Cartography
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Spatial point-pattern statistics, graph neural networks, and single-cell neighborhood modeling to predict therapeutic responses.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Publications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ibec-lime">
              Recent Discoveries
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Featured Publications
            </h2>
          </div>
          <Link
            to="/publications"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ibec-lime hover:text-white transition-colors"
          >
            <span>Browse all papers</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {featuredPubs.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
        </div>
      </section>

      {/* Team Preview with B&W -> Color Hover Effect */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ibec-lime">
              Our People
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Meet the Research Group
            </h2>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ibec-lime hover:text-white transition-colors"
          >
            <span>Full team roster & alumni</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyTeam.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Latest News & Grants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              Lab Milestones
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Grants & Announcements
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ibec-lime hover:text-white transition-colors"
          >
            <span>View all news & events</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Join Us Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#101b38] via-[#0b1329] to-[#101b38] border border-ibec-lime/30 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-ibec-lime/20 text-ibec-lime text-xs font-mono border border-ibec-lime/30">
              Recruitment & Fellowships
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Join the Spatial Biotechnology Lab
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We are actively looking for passionate Postdocs, PhD Candidates, Technicians, and Undergraduate/Master Interns to push the frontiers of cancer biology and spatial multi-omics in Barcelona.
            </p>
            <div className="pt-2">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ibec-lime text-slate-950 font-bold hover:bg-ibec-lime-light transition-all shadow-lg hover:scale-105"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
