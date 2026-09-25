import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Shuffle } from 'lucide-react';

interface GameOfLifeProps {
  initialRows?: number;
  initialCols?: number;
  speedMs?: number;
}

export default function GameOfLife({
  initialRows = 28,
  initialCols = 38,
  speedMs = 120,
}: GameOfLifeProps) {
  const [rows, setRows] = useState(initialRows);
  const [cols, setCols] = useState(initialCols);
  const [isRunning, setIsRunning] = useState(true);
  const [generation, setGeneration] = useState(0);
  const [activeCellCount, setActiveCellCount] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Grid state: 0 = dead, 1 = slate, 2 = channelCyan, 3 = channelMagenta
  const gridRef = useRef<number[][]>([]);

  // Initialize a randomized interesting grid or preset
  const createEmptyGrid = useCallback((numRows: number, numCols: number) => {
    return Array.from({ length: numRows }, () => Array(numCols).fill(0));
  }, []);

  const populateInterestingSeed = useCallback((numRows: number, numCols: number) => {
    const newGrid = Array.from({ length: numRows }, () => Array(numCols).fill(0));

    // Seed some classic oscillators and glider patterns + randomized clonal seeds
    const midR = Math.floor(numRows / 2);
    const midC = Math.floor(numCols / 2);

    // Gosper Glider / Pulsar seeds or randomized clusters in the center
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        // Density higher towards center
        const distFromCenter = Math.hypot(r - midR, c - midC);
        const prob = Math.max(0.05, 0.35 - distFromCenter * 0.015);
        if (Math.random() < prob) {
          // Color channels
          const rand = Math.random();
          if (rand < 0.6) newGrid[r][c] = 1; // Slate
          else if (rand < 0.8) newGrid[r][c] = 2; // Channel Cyan
          else newGrid[r][c] = 3; // Channel Magenta
        }
      }
    }

    // Add stable glider gun / acorn seed in the center if bounds permit
    const acorn = [
      [0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 1, 1],
    ];
    if (midR + 3 < numRows && midC + 7 < numCols) {
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 7; c++) {
          if (acorn[r][c]) {
            newGrid[midR + r - 1][midC + c - 3] = (r + c) % 2 === 0 ? 2 : 3;
          }
        }
      }
    }

    return newGrid;
  }, []);

  // Compute next generation according to Conway's Game of Life rules
  const nextGeneration = useCallback(() => {
    const currentGrid = gridRef.current;
    const numRows = currentGrid.length;
    if (numRows === 0) return;
    const numCols = currentGrid[0].length;

    const nextGrid = createEmptyGrid(numRows, numCols);
    let aliveCount = 0;

    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1],
    ];

    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        let liveNeighbors = 0;
        let cyanCount = 0;
        let magentaCount = 0;

        for (const [dr, dc] of directions) {
          const nr = (r + dr + numRows) % numRows;
          const nc = (c + dc + numCols) % numCols;
          const val = currentGrid[nr][nc];
          if (val > 0) {
            liveNeighbors++;
            if (val === 2) cyanCount++;
            if (val === 3) magentaCount++;
          }
        }

        const state = currentGrid[r][c];

        if (state > 0 && (liveNeighbors === 2 || liveNeighbors === 3)) {
          // Survives
          nextGrid[r][c] = state;
          aliveCount++;
        } else if (state === 0 && liveNeighbors === 3) {
          // Born - inherits clonal color from neighbor majority
          if (cyanCount > magentaCount) {
            nextGrid[r][c] = 2; // Cyan
          } else if (magentaCount > cyanCount) {
            nextGrid[r][c] = 3; // Magenta
          } else {
            nextGrid[r][c] = 1; // Slate
          }
          aliveCount++;
        } else {
          nextGrid[r][c] = 0; // Dies
        }
      }
    }

    gridRef.current = nextGrid;
    setGeneration((prev) => prev + 1);
    setActiveCellCount(aliveCount);
  }, [createEmptyGrid]);

  // Handle Resize and Grid Initialization
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      const cellSize = 16;
      const newCols = Math.max(16, Math.floor(width / cellSize));
      const newRows = Math.max(16, Math.floor(height / cellSize));

      setRows(newRows);
      setCols(newCols);

      gridRef.current = populateInterestingSeed(newRows, newCols);
      setGeneration(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [populateInterestingSeed]);

  // Main game tick loop
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      nextGeneration();
    }, speedMs);

    return () => clearInterval(interval);
  }, [isRunning, nextGeneration, speedMs]);

  // Draw on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentGrid = gridRef.current;
    if (!currentGrid || currentGrid.length === 0) return;

    const numRows = currentGrid.length;
    const numCols = currentGrid[0].length;

    const cellWidth = canvas.width / numCols;
    const cellHeight = canvas.height / numRows;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Grid Lines (Subtle slate hairline)
    ctx.strokeStyle = '#4A5471';
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.18;

    for (let r = 0; r <= numRows; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * cellHeight);
      ctx.lineTo(canvas.width, r * cellHeight);
      ctx.stroke();
    }

    for (let c = 0; c <= numCols; c++) {
      ctx.beginPath();
      ctx.moveTo(c * cellWidth, 0);
      ctx.lineTo(c * cellWidth, canvas.height);
      ctx.stroke();
    }

    ctx.globalAlpha = 1.0;

    // Colors according to brand tokens
    const colorMap: Record<number, string> = {
      1: '#4A5471', // Slate
      2: '#1FA9A0', // Channel Cyan
      3: '#C23E77', // Channel Magenta
    };

    // Draw Active Cells
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        const val = currentGrid[r][c];
        if (val > 0) {
          const x = c * cellWidth;
          const y = r * cellHeight;
          const pad = 1.5;

          ctx.fillStyle = colorMap[val] || '#4A5471';
          
          // Draw rounded or square cell
          const radius = Math.min(cellWidth, cellHeight) * 0.25;
          ctx.beginPath();
          ctx.roundRect(x + pad, y + pad, cellWidth - pad * 2, cellHeight - pad * 2, radius);
          ctx.fill();
        }
      }
    }
  }, [generation, rows, cols]);

  // Click / Drag to toggle cells
  const handleCanvasInteraction = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const numRows = gridRef.current.length;
    if (numRows === 0) return;
    const numCols = gridRef.current[0].length;

    const cellWidth = rect.width / numCols;
    const cellHeight = rect.height / numRows;

    const col = Math.floor(x / cellWidth);
    const row = Math.floor(y / cellHeight);

    if (row >= 0 && row < numRows && col >= 0 && col < numCols) {
      const current = gridRef.current[row][col];
      // Cycle: 0 -> Cyan(2) -> Magenta(3) -> Slate(1) -> 0
      const nextVal = current === 0 ? 2 : current === 2 ? 3 : current === 3 ? 1 : 0;
      gridRef.current[row][col] = nextVal;
      setGeneration((g) => g + 1);
    }
  };

  const handleReset = () => {
    gridRef.current = populateInterestingSeed(rows, cols);
    setGeneration(0);
  };

  const handleClear = () => {
    gridRef.current = createEmptyGrid(rows, cols);
    setGeneration(0);
    setActiveCellCount(0);
  };

  return (
    <div ref={containerRef} className="relative w-full h-full flex flex-col justify-between select-none">
      
      {/* Simulation Title & Metric Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#0B0E14]/15">
        <div className="flex items-center gap-2">
          <span className="font-sans font-bold text-sm tracking-wider text-[#0B0E14] uppercase">
            GAME OF LIFE SIMULATION
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-channelCyan animate-pulse" />
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-slate-700">
          <span>Gen: <strong className="text-ink font-semibold">{generation}</strong></span>
          <span>Alive: <strong className="text-ink font-semibold">{activeCellCount}</strong></span>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative flex-1 my-3 rounded-lg overflow-hidden bg-[#EEF0EA]/70 border border-[#0B0E14]/10 min-h-[220px]">
        <canvas
          ref={canvasRef}
          width={600}
          height={380}
          onClick={handleCanvasInteraction}
          className="w-full h-full cursor-crosshair block"
          title="Click to draw or spawn cells"
        />

        {/* Legend Overlay on Canvas */}
        <div className="absolute bottom-2 left-2 flex items-center gap-2 px-2 py-1 rounded bg-paper/85 border border-[#0B0E14]/10 font-mono text-[10px] text-slate-700 pointer-events-none">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-channelCyan" /> Subclone A
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-channelMagenta" /> Subclone B
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-slate" /> Stroma
          </span>
        </div>
      </div>

      {/* Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#0B0E14]/15 text-xs">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-ink text-paper hover:bg-slate transition-colors font-medium"
            title={isRunning ? "Pause Simulation" : "Start Simulation"}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isRunning ? "Pause" : "Play"}</span>
          </button>

          <button
            onClick={nextGeneration}
            disabled={isRunning}
            className="px-2.5 py-1.5 rounded-md bg-paperDim hover:bg-paper border border-[#0B0E14]/20 text-ink disabled:opacity-40 transition-colors"
            title="Step 1 generation forward"
          >
            Step
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-paperDim hover:bg-paper border border-[#0B0E14]/20 text-ink transition-colors"
            title="Re-seed Clonal Patterns"
          >
            <Shuffle className="w-3.5 h-3.5 text-slate-700" />
            <span>Randomize</span>
          </button>

          <button
            onClick={handleClear}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-paperDim hover:bg-paper border border-[#0B0E14]/20 text-slate-700 hover:text-ink transition-colors"
            title="Clear grid"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear</span>
          </button>
        </div>

        <span className="text-[11px] font-mono text-slate-600 hidden sm:inline-block">
          Interactive cellular automaton
        </span>
      </div>

    </div>
  );
}
