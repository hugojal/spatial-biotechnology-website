import GameOfLife from '../components/GameOfLife';
import IbecLogo from '../components/IbecLogo';

export default function HomePage() {
  return (
    <div className="bg-[#EEF0EA] text-[#0B0E14] min-h-[calc(100vh-90px)] flex flex-col justify-between">
      
      {/* Central Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12 md:py-16 max-w-[1400px] mx-auto w-full">
        
        {/* Clean, spacious card container */}
        <div className="w-full rounded-md border border-[#0B0E14]/30 bg-[#E1E4DB] p-8 sm:p-12 md:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            
            {/* Left Column: Core Quote */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#0B0E14] leading-[1.6] tracking-tight">
                “Cells continuously sense their environment by integrating multiple input signals from neighbouring cells and respond to them with a fast-flowing cascade of abundant outputs. In turn, these outputs modify the environment.”
              </blockquote>
            </div>

            {/* Right Column: Unconstrained Live Cellular Simulation */}
            <div className="lg:col-span-7 w-full h-[320px] sm:h-[400px] md:h-[480px]">
              <GameOfLife cellSize={18} speedMs={110} />
            </div>

          </div>
        </div>

      </main>

      {/* Centered IBEC Logo Presentation */}
      <footer className="py-8 px-4 flex flex-col items-center justify-center bg-[#EEF0EA]">
        <a
          href="https://ibecbarcelona.eu/research-groups/spatial-biotechnology/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center transition-transform hover:scale-105"
          title="Spatial Biotechnology at Institute for Bioengineering of Catalonia (IBEC)"
        >
          <IbecLogo className="h-16 sm:h-20 w-auto" />
          <span className="text-xs font-mono text-[#4A5471] mt-2 group-hover:text-[#0B0E14] transition-colors">
            Parc Científic de Barcelona · Severo Ochoa Centre of Excellence
          </span>
        </a>
      </footer>

    </div>
  );
}
