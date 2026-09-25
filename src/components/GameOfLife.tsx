import { useEffect, useRef, useCallback } from 'react';

interface GameOfLifeProps {
  className?: string;
  cellSize?: number;
  speedMs?: number;
  fadeGradient?: boolean; // Fades from left to right (transparent near text)
}

export default function GameOfLife({
  className = "w-full h-full",
  cellSize = 16,
  speedMs = 130,
  fadeGradient = true,
}: GameOfLifeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gridRef = useRef<number[][]>([]);
  const lastReseedRef = useRef<number>(0);

  const createEmptyGrid = useCallback((numRows: number, numCols: number) => {
    return Array.from({ length: numRows }, () => Array(numCols).fill(0));
  }, []);

  // Seed gliders and clonal colonies
  const injectGlider = useCallback((grid: number[][], r: number, c: number, colorType: number) => {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const glider = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
    ];
    for (let dr = 0; dr < 3; dr++) {
      for (let dc = 0; dc < 3; dc++) {
        if (glider[dr][dc]) {
          grid[(r + dr + numRows) % numRows][(c + dc + numCols) % numCols] = colorType;
        }
      }
    }
  }, []);

  const populateInterestingSeed = useCallback((numRows: number, numCols: number) => {
    const newGrid = createEmptyGrid(numRows, numCols);

    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        // Bias activity towards the right half
        const colRatio = c / numCols;
        const baseProb = Math.max(0.04, colRatio * 0.32);

        if (Math.random() < baseProb) {
          const rand = Math.random();
          if (rand < 0.45) newGrid[r][c] = 1; // Slate
          else if (rand < 0.72) newGrid[r][c] = 2; // Channel Cyan
          else newGrid[r][c] = 3; // Channel Magenta
        }
      }
    }

    // Add several moving gliders and stable clonal colonies
    const colors = [1, 2, 3];
    for (let i = 0; i < 4; i++) {
      const r = Math.floor(Math.random() * (numRows - 5));
      const c = Math.floor(numCols * 0.3 + Math.random() * (numCols * 0.6));
      const col = colors[i % 3];
      injectGlider(newGrid, r, c, col);
    }

    return newGrid;
  }, [createEmptyGrid, injectGlider]);

  // Compute next generation with eternal coexistence rules
  const nextGeneration = useCallback(() => {
    const currentGrid = gridRef.current;
    const numRows = currentGrid.length;
    if (numRows === 0) return;
    const numCols = currentGrid[0].length;

    const nextGrid = createEmptyGrid(numRows, numCols);

    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1],
    ];

    let aliveCount = 0;
    let cyanTotal = 0;
    let magentaTotal = 0;
    let slateTotal = 0;

    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        let liveNeighbors = 0;
        let cyanNeighbors = 0;
        let magentaNeighbors = 0;
        let slateNeighbors = 0;

        for (const [dr, dc] of directions) {
          const nr = (r + dr + numRows) % numRows;
          const nc = (c + dc + numCols) % numCols;
          const val = currentGrid[nr][nc];
          if (val > 0) {
            liveNeighbors++;
            if (val === 1) slateNeighbors++;
            else if (val === 2) cyanNeighbors++;
            else if (val === 3) magentaNeighbors++;
          }
        }

        const state = currentGrid[r][c];

        if (state > 0 && (liveNeighbors === 2 || liveNeighbors === 3)) {
          // Survives
          nextGrid[r][c] = state;
          aliveCount++;
          if (state === 1) slateTotal++;
          else if (state === 2) cyanTotal++;
          else if (state === 3) magentaTotal++;
        } else if (state === 0 && liveNeighbors === 3) {
          // Born: balanced color inheritance with mutation to guarantee 3 colors never die out
          let bornColor = 1;
          const mutation = Math.random();

          // If one color is critically low in the neighborhood or globally, boost it
          if (mutation < 0.08) {
            bornColor = cyanTotal < magentaTotal ? 2 : 3;
          } else {
            if (cyanNeighbors > magentaNeighbors && cyanNeighbors >= slateNeighbors) {
              bornColor = 2;
            } else if (magentaNeighbors > cyanNeighbors && magentaNeighbors >= slateNeighbors) {
              bornColor = 3;
            } else if (slateNeighbors > 0) {
              bornColor = 1;
            } else {
              bornColor = Math.random() < 0.5 ? 2 : 3;
            }
          }

          nextGrid[r][c] = bornColor;
          aliveCount++;
          if (bornColor === 1) slateTotal++;
          else if (bornColor === 2) cyanTotal++;
          else if (bornColor === 3) magentaTotal++;
        } else {
          nextGrid[r][c] = 0;
        }
      }
    }

    // Keep simulation eternal: periodically spawn new gliders from edges or if activity decreases
    lastReseedRef.current++;
    if (aliveCount < 20 || lastReseedRef.current > 40 || cyanTotal === 0 || magentaTotal === 0) {
      lastReseedRef.current = 0;
      // Inject fresh gliders on the right side
      const randR = Math.floor(Math.random() * (numRows - 4));
      const randC = Math.floor(numCols * 0.4 + Math.random() * (numCols * 0.5));
      const neededColor = cyanTotal < magentaTotal ? 2 : magentaTotal < slateTotal ? 3 : 1;
      injectGlider(nextGrid, randR, randC, neededColor);
    }

    gridRef.current = nextGrid;
  }, [createEmptyGrid, injectGlider]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      const newCols = Math.max(16, Math.floor(width / cellSize));
      const newRows = Math.max(16, Math.floor(height / cellSize));

      gridRef.current = populateInterestingSeed(newRows, newCols);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cellSize, populateInterestingSeed]);

  // Main tick & draw loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTick = performance.now();

    const colorMap: Record<number, string> = {
      1: '#4A5471', // Slate
      2: '#1FA9A0', // Channel Cyan
      3: '#C23E77', // Channel Magenta
    };

    const loop = (now: number) => {
      if (now - lastTick > speedMs) {
        nextGeneration();
        lastTick = now;
      }

      if (canvas && containerRef.current) {
        const dpr = window.devicePixelRatio || 1;
        const rect = containerRef.current.getBoundingClientRect();
        
        if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
          canvas.width = Math.floor(rect.width * dpr);
          canvas.height = Math.floor(rect.height * dpr);
        }

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, rect.width, rect.height);

        const currentGrid = gridRef.current;
        if (currentGrid && currentGrid.length > 0) {
          const numRows = currentGrid.length;
          const numCols = currentGrid[0].length;
          const cellWidth = rect.width / numCols;
          const cellHeight = rect.height / numRows;

          // Grid lines
          ctx.strokeStyle = '#4A5471';
          ctx.lineWidth = 0.5;

          for (let r = 0; r <= numRows; r++) {
            ctx.beginPath();
            ctx.moveTo(0, r * cellHeight);
            ctx.lineTo(rect.width, r * cellHeight);
            ctx.globalAlpha = 0.08;
            ctx.stroke();
          }
          for (let c = 0; c <= numCols; c++) {
            ctx.beginPath();
            ctx.moveTo(c * cellWidth, 0);
            ctx.lineTo(c * cellWidth, rect.height);
            // Gradient transparency on lines if fadeGradient is enabled
            if (fadeGradient) {
              const alphaRatio = Math.max(0.02, Math.min(0.12, (c / numCols) * 0.15));
              ctx.globalAlpha = alphaRatio;
            } else {
              ctx.globalAlpha = 0.08;
            }
            ctx.stroke();
          }

          // Draw cells with gradient transparency towards text on the left
          for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
              const val = currentGrid[r][c];
              if (val > 0) {
                const x = c * cellWidth;
                const y = r * cellHeight;
                const pad = 1.2;

                let alpha = 1.0;
                if (fadeGradient) {
                  // Transparent near the left, fully visible on the right
                  const colRatio = c / numCols;
                  if (colRatio < 0.2) alpha = 0.0;
                  else if (colRatio < 0.5) alpha = (colRatio - 0.2) / 0.3;
                  else alpha = 1.0;
                }

                if (alpha > 0.05) {
                  ctx.globalAlpha = alpha;
                  ctx.fillStyle = colorMap[val] || '#4A5471';
                  const radius = Math.min(cellWidth, cellHeight) * 0.25;
                  ctx.beginPath();
                  ctx.roundRect(x + pad, y + pad, cellWidth - pad * 2, cellHeight - pad * 2, radius);
                  ctx.fill();
                }
              }
            }
          }
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [fadeGradient, nextGeneration, speedMs]);

  // Click to spawn cells
  const handleInteraction = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
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
      const chosenColor = Math.random() < 0.4 ? 2 : Math.random() < 0.7 ? 3 : 1;
      injectGlider(gridRef.current, Math.max(0, row - 1), Math.max(0, col - 1), chosenColor);
    }
  };

  return (
    <div ref={containerRef} className={`relative select-none overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        onClick={handleInteraction}
        className="w-full h-full block cursor-crosshair"
      />
    </div>
  );
}
