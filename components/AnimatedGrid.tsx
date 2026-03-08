"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: "cyan" | "pink";
}

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let offset = 0;
    const particles: Particle[] = [];

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Spawn particles at random grid intersections
    const spawnParticle = () => {
      const CELL = 60;
      const cols = Math.floor(width / CELL);
      const rows = Math.floor(height / CELL);
      const col = Math.floor(Math.random() * cols);
      const row = Math.floor(Math.random() * rows);
      particles.push({
        x: col * CELL,
        y: row * CELL,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.3,
        life: 0,
        maxLife: 120 + Math.random() * 180,
        size: 1 + Math.random() * 2,
        color: Math.random() > 0.7 ? "pink" : "cyan",
      });
    };

    let spawnTimer = 0;

    const CELL = 60;
    const SPEED = 0.3;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const o = offset % CELL;

      // Vertical grid lines
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 240, 255, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width + CELL; x += CELL) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      ctx.stroke();

      // Moving horizontal lines
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 240, 255, 0.05)";
      ctx.lineWidth = 1;
      for (let y = -CELL + o; y < height + CELL; y += CELL) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Brighter accent scan line
      const o2 = (offset * 1.6) % (CELL * 5);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 240, 255, 0.10)";
      ctx.lineWidth = 1;
      for (let y = -CELL * 5 + o2; y < height + CELL * 5; y += CELL * 5) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Pink accent scan line (slower, rarer)
      const o3 = (offset * 0.6) % (CELL * 8);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 46, 136, 0.06)";
      ctx.lineWidth = 1;
      for (let y = -CELL * 8 + o3; y < height + CELL * 8; y += CELL * 8) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Grid intersection nodes
      for (let x = 0; x < width + CELL; x += CELL) {
        for (let y = -CELL + o; y < height + CELL; y += CELL) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(0, 240, 255, 0.2)";
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Particles
      spawnTimer++;
      if (spawnTimer > 18 && particles.length < 40) {
        spawnParticle();
        spawnTimer = 0;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;
        const alpha = progress < 0.2
          ? (progress / 0.2) * 0.7
          : progress > 0.8
          ? ((1 - progress) / 0.2) * 0.7
          : 0.7;

        const [r, g, b] =
          p.color === "cyan" ? [0, 240, 255] : [255, 46, 136];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`;
        ctx.fill();

        // Glow ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.08})`;
        ctx.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }

      // Radial vignette fade
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.72
      );
      gradient.addColorStop(0, "rgba(11, 11, 15, 0)");
      gradient.addColorStop(0.6, "rgba(11, 11, 15, 0.4)");
      gradient.addColorStop(1, "rgba(11, 11, 15, 0.95)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Ambient neon bloom (center)
      const bloom = ctx.createRadialGradient(
        width / 2, height * 0.55, 0,
        width / 2, height * 0.55, width * 0.4
      );
      bloom.addColorStop(0, "rgba(0, 240, 255, 0.03)");
      bloom.addColorStop(1, "rgba(0, 240, 255, 0)");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, width, height);

      offset += SPEED;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
