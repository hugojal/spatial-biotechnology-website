import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const CELL = 15;
const COLORS: Record<number, string> = {
  1: '#4A5471',
  2: '#1FA9A0',
  3: '#C23E77',
};

const BAND_ROWS = 28;
const LIFE_STEPS = 14;

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function createEmpty(cols: number, rows: number): number[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

function stepGrid(grid: number[][]): number[][] {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  if (cols === 0) return grid;
  const next = createEmpty(cols, rows);
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

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let live = 0;
      let n1 = 0;
      let n2 = 0;
      let n3 = 0;
      for (const [dr, dc] of dirs) {
        const nr = (r + dr + rows) % rows;
        const nc = (c + dc + cols) % cols;
        const v = grid[nr][nc];
        if (v > 0) {
          live++;
          if (v === 1) n1++;
          else if (v === 2) n2++;
          else n3++;
        }
      }
      const state = grid[r][c];
      if (state > 0 && (live === 2 || live === 3)) {
        next[r][c] = state;
      } else if (state === 0 && live === 3) {
        const total = n1 + n2 + n3;
        const pick = mulberry32(r * 928371 + c * 364479 + live * 17)() * total;
        if (pick < n1) next[r][c] = 1;
        else if (pick < n1 + n2) next[r][c] = 2;
        else next[r][c] = 3;
      }
    }
  }
  return next;
}

function seedBand(cols: number, rows: number, bandSeed: number): number[][] {
  const rnd = mulberry32(bandSeed);
  const g = createEmpty(cols, rows);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rnd() < 0.26) {
        g[r][c] = 1 + Math.floor(rnd() * 3);
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    const cr = Math.floor(rnd() * (rows - 3));
    const cc = Math.floor(rnd() * (cols - 3));
    const color = 1 + Math.floor(rnd() * 3);
    g[cr][cc] = color;
    g[cr][cc + 1] = color;
    g[cr + 1][cc] = color;
    g[cr + 1][cc + 1] = color;
  }
  return g;
}

const bandCache = new Map<string, number[][]>();

function bandGrid(cols: number, bandIndex: number, pathSeed: number): number[][] {
  const key = `${cols}:${bandIndex}:${pathSeed}`;
  const cached = bandCache.get(key);
  if (cached) return cached;

  let g = seedBand(cols, BAND_ROWS, bandIndex * 9973 + pathSeed * 131);
  for (let s = 0; s < LIFE_STEPS; s++) {
    g = stepGrid(g);
  }

  if (bandCache.size > 48) {
    const first = bandCache.keys().next().value;
    if (first) bandCache.delete(first);
  }
  bandCache.set(key, g);
  return g;
}

function pathSeed(pathname: string): number {
  let h = 0;
  for (let i = 0; i < pathname.length; i++) {
    h = (h * 31 + pathname.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function marginFadeAlpha(col: number, cols: number, side: 'left' | 'right'): number {
  if (cols <= 1) return 0;
  // 1 at outer viewport edge → 0 at content edge
  const t =
    side === 'left'
      ? (cols - 1 - col) / (cols - 1)
      : col / (cols - 1);
  return t * t;
}
function getContentBounds(): { left: number; right: number } {
  const main = document.querySelector('main');
  if (main) {
    const candidates = main.querySelectorAll('[class*="max-w-"]');
    let bestLeft = 0;
    let bestRight = 0;
    let found = false;
    candidates.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width < 120) return;
      if (!found || r.width > bestRight - bestLeft) {
        bestLeft = r.left;
        bestRight = r.right;
        found = true;
      }
    });
    if (found) return { left: bestLeft, right: bestRight };
  }

  const maxW = Math.min(1280, window.innerWidth);
  const left = (window.innerWidth - maxW) / 2;
  return { left, right: left + maxW };
}

export default function MarginCells() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  const location = useLocation();
  const routeSeed = pathSeed(location.pathname);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const targetW = Math.floor(vw * dpr);
    const targetH = Math.floor(vh * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    const header = document.querySelector('header');
    const footer = document.querySelector('footer.border-t');
    const headerBottom = header ? Math.max(0, header.getBoundingClientRect().bottom) : 72;
    const footerRect = footer?.getBoundingClientRect();
    const footerTop = footerRect?.top ?? vh + 1;

    const drawTop = headerBottom + 2;
    let drawBottom = vh;
    if (footerRect && footerTop < vh) {
      drawBottom = Math.min(drawBottom, footerTop - 4);
    }
    const drawHeight = drawBottom - drawTop;
    if (drawHeight < CELL * 2) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const { left: contentLeft, right: contentRight } = getContentBounds();
    const marginPad = 10;
    const leftX0 = marginPad;
    const leftX1 = contentLeft - marginPad;
    const rightX0 = contentRight + marginPad;
    const rightX1 = vw - marginPad;

    const leftCols = Math.floor((leftX1 - leftX0) / CELL);
    const rightCols = Math.floor((rightX1 - rightX0) / CELL);

    if (leftCols < 2 && rightCols < 2) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const scrollY = window.scrollY;
    const scrollRow = Math.floor(scrollY / CELL);
    const maxRow = Math.floor((drawBottom - drawTop) / CELL);

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, vw, vh);
    ctx.beginPath();
    ctx.rect(0, drawTop, vw, Math.max(0, drawBottom - drawTop));
    ctx.clip();

    const radius = CELL * 0.22;
    const pad = 1.5;
    const maxCellAlpha = 0.5;

    const paintStrip = (
      xStart: number,
      cols: number,
      sideOffset: number,
      side: 'left' | 'right'
    ) => {
      if (cols < 1) return;

      for (let vr = 0; vr <= maxRow; vr++) {
        const y = drawTop + vr * CELL;
        if (y + CELL > drawBottom) break;

        const docRow = scrollRow + vr;
        const bandIndex = Math.floor(docRow / BAND_ROWS);
        const localRow = docRow % BAND_ROWS;
        const source = bandGrid(cols, bandIndex, routeSeed + sideOffset);

        for (let c = 0; c < cols; c++) {
          const val = source[localRow]?.[c] ?? 0;
          if (val === 0) continue;

          const fade = marginFadeAlpha(c, cols, side);
          if (fade < 0.04) continue;

          const x = xStart + c * CELL;
          ctx.globalAlpha = maxCellAlpha * fade;
          ctx.fillStyle = COLORS[val] ?? COLORS[1];
          ctx.beginPath();
          ctx.roundRect(x + pad, y + pad, CELL - pad * 2, CELL - pad * 2, radius);
          ctx.fill();
        }
      }
    };

    paintStrip(leftX0, leftCols, 0, 'left');
    paintStrip(rightX0, rightCols, 1000, 'right');

    ctx.restore();
  }, [routeSeed]);

  const scheduleDraw = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(draw);
  }, [draw]);

  useEffect(() => {
    bandCache.clear();
    scheduleDraw();
  }, [location.pathname, scheduleDraw]);

  useEffect(() => {
    scheduleDraw();
    window.addEventListener('scroll', scheduleDraw, { passive: true });
    window.addEventListener('resize', scheduleDraw);
    return () => {
      window.removeEventListener('scroll', scheduleDraw);
      window.removeEventListener('resize', scheduleDraw);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scheduleDraw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] select-none"
      aria-hidden
    />
  );
}
