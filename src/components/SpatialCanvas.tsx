import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: 'tumor' | 'caf' | 'tcell' | 'endothelial';
  color: string;
  alpha: number;
}

export default function SpatialCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color definitions for cell types (spatial multi-omics channels)
    const cellColors = {
      tumor: '#abb330',      // Clonal tumor (IBEC lime)
      caf: '#f43f5e',        // Cancer-associated fibroblast (Rose)
      tcell: '#06b6d4',      // Infiltrating T cell (Cyan)
      endothelial: '#10b981' // Endothelial vessel (Emerald)
    };

    const types: ('tumor' | 'caf' | 'tcell' | 'endothelial')[] = ['tumor', 'caf', 'tcell', 'endothelial'];
    const nodeCount = Math.min(Math.floor((width * height) / 10000), 75);

    const nodes: Node[] = Array.from({ length: nodeCount }, () => {
      const type = types[Math.floor(Math.random() * types.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: type === 'tumor' ? 4.5 : type === 'caf' ? 3.5 : 3.0,
        type,
        color: cellColors[type],
        alpha: 0.75 + Math.random() * 0.25
      };
    });

    // Mouse interactivity
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect spatial neighbors (neighborhood graph modeling)
      const maxDistance = 110;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(171, 179, 48, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and update each cell node
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from walls
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse avoidance/attraction
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 100) {
          const force = (100 - distToMouse) / 100;
          node.x -= (dx / distToMouse) * force * 1.5;
          node.y -= (dy / distToMouse) * force * 1.5;
        }

        // Draw glow halo
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 3
        );
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.3;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Draw node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-slate-950/60 backdrop-blur-sm">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />
      
      {/* Multiplex Channel Legend Overlay */}
      <div className="absolute bottom-3 right-3 flex flex-wrap items-center gap-2 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono shadow-lg pointer-events-none">
        <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] mr-1">
          Channels:
        </span>
        <span className="flex items-center gap-1 text-slate-200">
          <span className="w-2 h-2 rounded-full bg-[#abb330]" /> Tumor Clones
        </span>
        <span className="flex items-center gap-1 text-slate-200">
          <span className="w-2 h-2 rounded-full bg-[#06b6d4]" /> CD3+ T Cells
        </span>
        <span className="flex items-center gap-1 text-slate-200">
          <span className="w-2 h-2 rounded-full bg-[#f43f5e]" /> FAP+ CAFs
        </span>
        <span className="flex items-center gap-1 text-slate-200">
          <span className="w-2 h-2 rounded-full bg-[#10b981]" /> Endothelium
        </span>
      </div>

      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300 pointer-events-none">
        <span className="text-ibec-lime font-bold">●</span> Interactive Spatial Point-Process Simulator
      </div>
    </div>
  );
}
