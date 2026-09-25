import GameOfLife from '../components/GameOfLife';

export default function HomePage() {
  return (
    <div className="relative bg-[#EEF0EA] text-[#0B0E14] min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden">
      
      {/* Full-surface Game of Life background with gradient fading towards the left text */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <GameOfLife cellSize={18} speedMs={110} fadeGradient={true} />
      </div>

      {/* Main Quote Content Layer (Directly on background, no constraining box) */}
      <main className="relative z-10 flex-1 flex items-center px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1440px] mx-auto w-full pointer-events-none">
        <div className="max-w-xl lg:max-w-2xl">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0B0E14] leading-[1.5] tracking-tight drop-shadow-sm">
            “Cells continuously sense their environment by integrating multiple input signals from neighbouring cells and respond to them with a fast-flowing cascade of abundant outputs. In turn, these outputs modify the environment.”
          </blockquote>
        </div>
      </main>

      {/* Official IBEC Logo Presentation at the bottom */}
      <footer className="relative z-10 py-10 px-4 flex flex-col items-center justify-center bg-transparent">
        <a
          href="https://ibecbarcelona.eu/research-groups/spatial-biotechnology/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center transition-transform hover:scale-105"
          title="Spatial Biotechnology Research Group at Institute for Bioengineering of Catalonia (IBEC)"
        >
          <img
            src="/images/logos/ibec-standard.png"
            alt="IBEC - Institute for Bioengineering of Catalonia · Severo Ochoa Centre of Excellence"
            className="h-14 sm:h-18 w-auto object-contain"
            onError={(e) => {
              // Fallback if image path has spaces or needs alternate
              const target = e.target as HTMLImageElement;
              if (target.src.indexOf('ibec-logo.png') === -1) {
                target.src = '/images/logos/ibec-logo.png';
              }
            }}
          />
        </a>
      </footer>

    </div>
  );
}
