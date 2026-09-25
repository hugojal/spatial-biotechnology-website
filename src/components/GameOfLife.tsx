import { useEffect, useRef, useCallback } from 'react';

export type ProtectedZone = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

interface GameOfLifeProps {
  className?: string;
  cellSize?: number;
  speedMs?: number;
  /** Fade cells and grid lines to transparent near protected zones (e.g. quote text). */
  fadeGradient?: boolean;
  protectedZones?: ProtectedZone[];
}

const COLORS: Record<number, string> = {
  1: '#4A5471',
  2: '#1FA9A0',
  3: '#C23E77',
};

function isInZone(
  colRatio: number,
  rowRatio: number,
  zone: ProtectedZone
): boolean {
  return (
    colRatio >= zone.left &&
    colRatio <= zone.right &&
    rowRatio >= zone.top &&
    rowRatio <= zone.bottom
  );
}

function isProtected(
  colRatio: number,
  rowRatio: number,
  zones: ProtectedZone[]
): boolean {
  return zones.some((z) => isInZone(colRatio, rowRatio, z));
}

/** Quadratic fade from 0 inside zones to 1 outside, over `fadeDepth` normalized distance. */
function fadeAlpha(
  colRatio: number,
  rowRatio: number,
  zones: ProtectedZone[],
  fadeDepth = 0.14
): number {
  if (zones.length === 0) return 1;

  let minDist = Infinity;
  for (const zone of zones) {
    if (isInZone(colRatio, rowRatio, zone)) return 0;

    const dx =
      colRatio < zone.left
        ? zone.left - colRatio
        : colRatio > zone.right
          ? colRatio - zone.right
          : 0;
    const dy =
      rowRatio < zone.top
        ? zone.top - rowRatio
        : rowRatio > zone.bottom
          ? rowRatio - zone.bottom
          : 0;
    minDist = Math.min(minDist, Math.sqrt(dx * dx + dy * dy));
  }

  if (minDist >= fadeDepth) return 1;
  const t = minDist / fadeDepth;
  return t * t;
}

function pickBirthColor(n1: number, n2: number, n3: number): 1 | 2 | 3 {
  const total = n1 + n2 + n3;
  if (total === 0) return (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;

  let r = Math.random() * total;
  if (r < n1) return 1;
  if (r < n1 + n2) return 2;
  return 3;
}

export default function GameOfLife({
  className = 'w-full h-full',
  cellSize = 18,
  speedMs = 120,
  fadeGradient = true,
  protectedZones = [],
}: GameOfLifeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gridRef = useRef<number[][]>([]);
  const tickRef = useRef(0);
  const zonesRef = useRef(protectedZones);
  zonesRef.current = protectedZones;

  const createEmptyGrid = (numRows: number, numCols: number): number[][] =>
    Array.from({ length: numRows }, () => Array(numCols).fill(0));

  const injectGlider = useCallback(
    (grid: number[][], r: number, c: number, color: number) => {
      const numRows = grid.length;
      if (numRows === 0) return;
      const numCols = grid[0].length;
      const pattern = [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
      ];
      for (let dr = 0; dr < 3; dr++) {
        for (let dc = 0; dc < 3; dc++) {
          if (!pattern[dr][dc]) continue;
          const nr = (r + dr + numRows) % numRows;
          const nc = (c + dc + numCols) % numCols;
          const colRatio = nc / numCols;
          const rowRatio = nr / numRows;
          if (isProtected(colRatio, rowRatio, zonesRef.current)) continue;
          grid[nr][nc] = color;
        }
      }
    },
    []
  );

  const injectRPentomino = useCallback(
    (grid: number[][], r: number, c: number, color: number) => {
      const numRows = grid.length;
      if (numRows === 0) return;
      const numCols = grid[0].length;
      const pattern = [
        [0, 1, 1],
        [1, 1, 0],
        [0, 1, 0],
      ];
      for (let dr = 0; dr < 3; dr++) {
        for (let dc = 0; dc < 3; dc++) {
          if (!pattern[dr][dc]) continue;
          const nr = (r + dr + numRows) % numRows;
          const nc = (c + dc + numCols) % numCols;
          const colRatio = nc / numCols;
          const rowRatio = nr / numRows;
          if (isProtected(colRatio, rowRatio, zonesRef.current)) continue;
          grid[nr][nc] = color;
        }
      }
    },
    []
  );

  const clearProtected = useCallback((grid: number[][]) => {
    const numRows = grid.length;
    if (numRows === 0) return;
    const numCols = grid[0].length;
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        if (isProtected(c / numCols, r / numRows, zonesRef.current)) {
          grid[r][c] = 0;
        }
      }
    }
  }, []);

  const seed = useCallback(
    (numRows: number, numCols: number): number[][] => {
      const g = createEmptyGrid(numRows, numCols);

      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          const colRatio = c / numCols;
          const rowRatio = r / numRows;
          if (isProtected(colRatio, rowRatio, zonesRef.current)) continue;

          const colRatioBias = c / numCols;
          const prob = Math.max(0.04, colRatioBias * 0.22 + 0.06);
          if (Math.random() < prob) {
            g[r][c] = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;
          }
        }
      }

      for (let i = 0; i < 8; i++) {
        const color = ((i % 3) + 1) as 1 | 2 | 3;
        const row = Math.floor(Math.random() * (numRows - 4));
        const col = Math.floor(numCols * 0.25 + Math.random() * numCols * 0.65);
        injectGlider(g, row, col, color);
      }
      for (let i = 0; i < 4; i++) {
        const color = ((i % 3) + 1) as 1 | 2 | 3;
        const row = Math.floor(Math.random() * (numRows - 4));
        const col = Math.floor(numCols * 0.35 + Math.random() * numCols * 0.55);
        injectRPentomino(g, row, col, color);
      }

      clearProtected(g);
      return g;
    },
    [clearProtected, injectGlider, injectRPentomino]
  );

  const injectBoost = useCallback(
    (grid: number[][], numCols: number, counts: { c1: number; c2: number; c3: number }) => {
      const numRows = grid.length;
      if (numRows === 0) return;

      const countFor = (c: 1 | 2 | 3) =>
        c === 1 ? counts.c1 : c === 2 ? counts.c2 : counts.c3;
      const order: Array<1 | 2 | 3> = ([1, 2, 3] as const)
        .slice()
        .sort((a, b) => countFor(a) - countFor(b));

      for (let attempt = 0; attempt < 12; attempt++) {
        const r = Math.floor(Math.random() * (numRows - 4));
        const c = Math.floor(numCols * 0.2 + Math.random() * numCols * 0.75);
        const colRatio = c / numCols;
        const rowRatio = r / numRows;
        if (isProtected(colRatio, rowRatio, zonesRef.current)) continue;
        injectGlider(grid, r, c, order[attempt % 3]);
        break;
      }

      for (let attempt = 0; attempt < 12; attempt++) {
        const r = Math.floor(Math.random() * (numRows - 4));
        const c = Math.floor(numCols * 0.3 + Math.random() * numCols * 0.65);
        if (isProtected(c / numCols, r / numRows, zonesRef.current)) continue;
        injectRPentomino(grid, r, c, order[(attempt + 1) % 3]);
        break;
      }
    },
    [injectGlider, injectRPentomino]
  );

  const nextGeneration = useCallback(
    (numCols: number) => {
      const cur = gridRef.current;
      const numRows = cur.length;
      if (numRows === 0) return;

      const next = createEmptyGrid(numRows, numCols);
      const dirs = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];

      let alive = 0;
      let c1 = 0;
      let c2 = 0;
      let c3 = 0;

      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          const colRatio = c / numCols;
          const rowRatio = r / numRows;

          if (isProtected(colRatio, rowRatio, zonesRef.current)) {
            next[r][c] = 0;
            continue;
          }

          let live = 0;
          let n1 = 0;
          let n2 = 0;
          let n3 = 0;

          for (const [dr, dc] of dirs) {
            const nr = (r + dr + numRows) % numRows;
            const nc = (c + dc + numCols) % numCols;
            const v = cur[nr][nc];
            if (v > 0) {
              live++;
              if (v === 1) n1++;
              else if (v === 2) n2++;
              else n3++;
            }
          }

          const state = cur[r][c];
          let born = 0;

          if (state > 0 && (live === 2 || live === 3)) {
            born = state;
          } else if (state === 0 && live === 3) {
            born = pickBirthColor(n1, n2, n3);
            if (Math.random() < 0.1) {
              born = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;
            }
          }

          next[r][c] = born;
          if (born > 0) {
            alive++;
            if (born === 1) c1++;
            else if (born === 2) c2++;
            else c3++;
          }
        }
      }

      tickRef.current += 1;

      const lowActivity = alive < 20;
      const missingColor = c1 === 0 || c2 === 0 || c3 === 0;
      const periodic = tickRef.current % 45 === 0;

      if (lowActivity || missingColor || periodic) {
        injectBoost(next, numCols, { c1, c2, c3 });
      }

      if (alive === 0) {
        gridRef.current = seed(numRows, numCols);
        return;
      }

      clearProtected(next);
      gridRef.current = next;
    },
    [clearProtected, injectBoost, seed]
  );

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;
      const numCols = Math.max(16, Math.floor(w / cellSize));
      const numRows = Math.max(16, Math.floor(h / cellSize));
      gridRef.current = seed(numRows, numCols);
      tickRef.current = 0;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cellSize, seed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let lastTick = performance.now();

    const loop = (now: number) => {
      const container = containerRef.current;
      if (!container) {
        animId = requestAnimationFrame(loop);
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;

      const targetW = Math.floor(W * dpr);
      const targetH = Math.floor(H * dpr);
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      if (now - lastTick > speedMs) {
        const cur = gridRef.current;
        const numCols = cur.length > 0 ? cur[0].length : 0;
        if (numCols > 0) nextGeneration(numCols);
        lastTick = now;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, W, H);

      const grid = gridRef.current;
      if (grid.length === 0) {
        ctx.restore();
        animId = requestAnimationFrame(loop);
        return;
      }

      const numRows = grid.length;
      const numCols = grid[0].length;
      const cw = W / numCols;
      const ch = H / numRows;
      const zones = zonesRef.current;

      ctx.strokeStyle = '#4A5471';
      ctx.lineWidth = 0.5;

      for (let r = 0; r <= numRows; r++) {
        const rowRatio = Math.min(1, r / numRows);
        const alpha = fadeGradient
          ? 0.04 + 0.08 * fadeAlpha(0.75, rowRatio, zones)
          : 0.06;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(0, r * ch);
        ctx.lineTo(W, r * ch);
        ctx.stroke();
      }

      for (let c = 0; c <= numCols; c++) {
        const colRatio = c / numCols;
        const alpha = fadeGradient
          ? 0.04 + 0.08 * fadeAlpha(colRatio, 0.5, zones)
          : 0.06;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(c * cw, 0);
        ctx.lineTo(c * cw, H);
        ctx.stroke();
      }

      const pad = 1.5;
      const radius = Math.min(cw, ch) * 0.22;

      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          const val = grid[r][c];
          if (val === 0) continue;

          const colRatio = (c + 0.5) / numCols;
          const rowRatio = (r + 0.5) / numRows;

          if (isProtected(colRatio, rowRatio, zones)) continue;

          const alpha = fadeGradient ? fadeAlpha(colRatio, rowRatio, zones) : 1;
          if (alpha < 0.02) continue;

          ctx.globalAlpha = alpha;
          ctx.fillStyle = COLORS[val] ?? '#4A5471';
          ctx.beginPath();
          ctx.roundRect(c * cw + pad, r * ch + pad, cw - pad * 2, ch - pad * 2, radius);
          ctx.fill();
        }
      }

      ctx.restore();
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [fadeGradient, nextGeneration, speedMs]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const grid = gridRef.current;
    if (grid.length === 0) return;
    const numRows = grid.length;
    const numCols = grid[0].length;
    const col = Math.floor((x / rect.width) * numCols);
    const row = Math.floor((y / rect.height) * numRows);

    if (row >= 0 && row < numRows && col >= 0 && col < numCols) {
      if (isProtected(col / numCols, row / numRows, zonesRef.current)) return;
      const color = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;
      injectGlider(grid, Math.max(0, row - 1), Math.max(0, col - 1), color);
    }
  };

  return (
    <div ref={containerRef} className={`relative select-none overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        onClick={handleClick}
        className="w-full h-full block cursor-crosshair"
      />
    </div>
  );
}
