import GameOfLife from '../components/GameOfLife';
import { publicAsset } from '../utils/publicAsset';

/** Viewport-fraction regions where live cells are cleared every tick (readability). */
const PROTECTED_ZONES = [
  { left: 0.0, top: 0.06, right: 0.58, bottom: 0.78 },
  { left: 0.18, top: 0.72, right: 0.82, bottom: 1.0 },
];

export default function HomePage() {
  return (
    <div className="relative text-[#0B0E14] min-h-[calc(100svh-5rem)] flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <GameOfLife
          cellSize={16}
          speedMs={100}
          fadeGradient
          protectedZones={PROTECTED_ZONES}
        />
      </div>

      <main className="relative z-10 flex-1 flex items-center px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1440px] mx-auto w-full pointer-events-none">
        <div className="max-w-xl lg:max-w-2xl">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0B0E14] leading-[1.55] tracking-tight drop-shadow-[0_0_12px_rgba(238,240,234,0.85)]">
            "Cells continuously sense their environment by integrating multiple input signals from neighbouring cells and respond to them with a fast-flowing cascade of abundant outputs. In turn, these outputs modify the environment."
          </blockquote>
        </div>
      </main>

      <footer className="relative z-10 pb-10 md:pb-12 pt-6 px-4 flex flex-col items-center justify-center pointer-events-none">
        <a
          href="https://ibecbarcelona.eu/research-groups/spatial-biotechnology/"
          target="_blank"
          rel="noopener noreferrer"
          className="group transition-transform hover:scale-[1.02] pointer-events-auto"
          title="Institute for Bioengineering of Catalonia (IBEC)"
        >
          <img
            src={publicAsset('images/logos/ibec-logo.png')}
            alt="IBEC — Institute for Bioengineering of Catalonia"
            className="h-28 sm:h-36 md:h-44 lg:h-48 w-auto max-w-[min(92vw,520px)] object-contain drop-shadow-[0_0_16px_rgba(238,240,234,0.9)]"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              const alt = publicAsset('images/logos/IBEC logo.png');
              const std = publicAsset('images/logos/ibec-standard.png');
              if (!t.src.endsWith(encodeURI('IBEC logo.png')) && !t.src.includes('IBEC%20logo.png')) {
                t.src = alt;
              } else if (!t.src.includes('ibec-standard.png')) {
                t.src = std;
              }
            }}
          />
        </a>
      </footer>
    </div>
  );
}
