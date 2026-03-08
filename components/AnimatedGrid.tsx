"use client";

import { useEffect, useRef } from "react";

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

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const CELL = 60;
    const SPEED = 0.3;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const o = offset % CELL;

      // Vertical lines
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 240, 255, 0.06)";
      ctx.lineWidth = 1;
      for (let x = -CELL; x < width + CELL; x += CELL) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      ctx.stroke();

      // Horizontal lines (moving downward)
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 240, 255, 0.06)";
      ctx.lineWidth = 1;
      for (let y = -CELL + o; y < height + CELL; y += CELL) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Accent horizontal lines (brighter, further apart, faster)
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 240, 255, 0.12)";
      ctx.lineWidth = 1;
      const o2 = (offset * 1.8) % (CELL * 4);
      for (let y = -CELL * 4 + o2; y < height + CELL * 4; y += CELL * 4) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Intersection glow nodes
      ctx.fillStyle = "rgba(0, 240, 255, 0.25)";
      for (let x = 0; x < width + CELL; x += CELL) {
        for (let y = -CELL + o; y < height + CELL; y += CELL) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Radial fade overlay — bright center, dark edges
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      gradient.addColorStop(0, "rgba(11, 11, 15, 0)");
      gradient.addColorStop(1, "rgba(11, 11, 15, 0.92)");
      ctx.fillStyle = gradient;
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
