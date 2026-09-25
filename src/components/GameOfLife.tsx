import { useEffect, useRef, useCallback } from 'react';

interface GameOfLifeProps {
  className?: string;
  cellSize?: number;
  speedMs?: number;
}

export default function GameOfLife({
  className = "w-full h-full",
  cellSize = 16,
  speedMs = 120,
}: GameOfLifeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gridRef = useRef<number[][]>([]);

  const createEmptyGrid = useCallback((numRows: number, numCols: number) => {
    return Array.from({ length: numRows }, () => Array(numCols).fill(0));
  }, []);

  const populateInterestingSeed = useCallback((numRows: number, numCols: number) => {
    const newGrid = Array.from({ length: numRows }, () => Array(numCols).fill(0));
    const midR = Math.floor(numRows / 2);
    const midC = Math.floor(numCols / 2);

    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        const distFromCenter = Math.hypot(r - midR, c - midC);
        const prob = Math.max(0.04, 0.28 - distFromCenter * 0.012);
        if (Math.random() < prob) {
          const rand = Math.random();
          if (rand < 0.65) newGrid[r][c] = 1; // Slate
          else if (rand < 0.82) newGrid[r][c] = 2; // Channel Cyan
          else newGrid[r][c] = 3; // Channel Magenta
        }
      }
    }

    // Add stable acorn / glider seed near center
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
          nextGrid[r][c] = state;
          aliveCount++;
        } else if (state === 0 && liveNeighbors === 3) {
          if (cyanCount > magentaCount) {
            nextGrid[r][c] = 2;
          } else if (magentaCount > cyanCount) {
            nextGrid[r][c] = 3;
          } else {
            nextGrid[r][c] = 1;
          }
          aliveCount++;
        } else {
          nextGrid[r][c] = 0;
        }
      }
    }

    // If extinct, reseed gently
    if (aliveCount < 8) {
      gridRef.current = populateInterestingSeed(numRows, numCols);
    } else {
      gridRef.current = nextGrid;
    }
  }, [createEmptyGrid, populateInterestingSeed]);

  // Handle Resize and Grid Setup
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      const newCols = Math.max(12, Math.floor(width / cellSize));
      const newRows = Math.max(12, Math.floor(height / cellSize));

      gridRef.current = populateInterestingSeed(newRows, newCols);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cellSize, populateInterestingSeed]);

  // Tick loop and draw loop
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
        if (canvas.width !== containerRef.current.clientWidth || canvas.height !== containerRef.current.clientHeight) {
          canvas.width = containerRef.current.clientWidth;
          canvas.height = containerRef.current.clientHeight;
        }

        const currentGrid = gridRef.current;
        if (currentGrid && currentGrid.length > 0) {
          const numRows = currentGrid.length;
          const numCols = currentGrid[0].length;
          const cellWidth = canvas.width / numCols;
          const cellHeight = canvas.height / numRows;

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Subtle grid dots/lines
          ctx.strokeStyle = '#4A5471';
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = 0.12;

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

          // Draw cells
          for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
              const val = currentGrid[r][c];
              if (val > 0) {
                const x = c * cellWidth;
                const y = r * cellHeight;
                const pad = 1.2;

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

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [nextGeneration, speedMs]);

  // Click / drag to spawn cells interactively
  const handleInteraction = (e: React.MouseEvent<HTMLCanvasElement>) => {
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
      gridRef.current[row][col] = Math.random() < 0.5 ? 2 : 3;
    }
  };

  return (
    <div ref={containerRef} className={`relative select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onClick={handleInteraction}
        className="w-full h-full block cursor-crosshair"
      />
    </div>
  );
}
