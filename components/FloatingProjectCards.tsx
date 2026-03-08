"use client";

import { motion } from "motion/react";

const previewCards = [
  {
    title: "InboxSignal",
    subtitle: "Job Pipeline Tracker",
    stack: ["Python", "Flask", "SQLite"],
    accent: "cyan",
    delay: 0,
    rotate: -3,
    offset: { x: 0, y: 0 },
  },
  {
    title: "CineMatch",
    subtitle: "Movie Recommender",
    stack: ["Scikit-learn", "NLP", "Python"],
    accent: "pink",
    delay: 0.15,
    rotate: 2,
    offset: { x: 30, y: 60 },
  },
  {
    title: "VisionDigits",
    subtitle: "Digit Recognition CNN",
    stack: ["TensorFlow", "Keras", "CNN"],
    accent: "yellow",
    delay: 0.3,
    rotate: -1.5,
    offset: { x: -10, y: 120 },
  },
];

const accentColors = {
  cyan: {
    border: "border-neon-cyan/25",
    dot: "bg-neon-cyan",
    text: "text-neon-cyan",
    tag: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
    glow: "shadow-[0_0_30px_rgba(0,240,255,0.12)]",
  },
  pink: {
    border: "border-neon-pink/25",
    dot: "bg-neon-pink",
    text: "text-neon-pink",
    tag: "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
    glow: "shadow-[0_0_30px_rgba(255,46,136,0.12)]",
  },
  yellow: {
    border: "border-neon-yellow/25",
    dot: "bg-neon-yellow",
    text: "text-neon-yellow",
    tag: "bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20",
    glow: "shadow-[0_0_30px_rgba(255,211,0,0.12)]",
  },
};

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 3.5 + i * 0.6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.4,
    },
  }),
};

export default function FloatingProjectCards() {
  return (
    <div className="relative w-full h-80 hidden lg:block">
      {previewCards.map((card, i) => {
        const a = accentColors[card.accent as keyof typeof accentColors];

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: card.delay + 1.2,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            custom={i}
            className="absolute"
            style={{
              left: `${i * 30}%`,
              top: `${i * 18}%`,
              zIndex: 3 - i,
            }}
          >
            <motion.div
              animate={{ y: [0, -(8 + i * 3), 0] }}
              transition={{
                duration: 3.5 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{ rotate: card.rotate }}
              className={`w-52 panel-base rounded-lg p-4 border ${a.border} ${a.glow} backdrop-blur-md`}
            >
              {/* Card header */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                <span className={`font-orbitron text-[9px] font-bold tracking-[0.2em] uppercase ${a.text}`}>
                  Project
                </span>
              </div>

              {/* Title */}
              <p className="font-orbitron text-sm font-bold text-text-primary mb-0.5 leading-snug">
                {card.title}
              </p>
              <p className="text-text-muted text-[10px] mb-3">{card.subtitle}</p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1">
                {card.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-[8px] font-medium px-1.5 py-0.5 rounded border ${a.tag} tracking-wide uppercase`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
