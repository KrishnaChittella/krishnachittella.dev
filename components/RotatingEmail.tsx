"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const emails = [
  "hello@krishnachittella.dev",
  "build@krishnachittella.dev",
  "ideas@krishnachittella.dev",
  "ping@krishnachittella.dev",
  "contact@krishnachittella.dev",
];

export default function RotatingEmail() {
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % emails.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const current = emails[index];

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(current);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [current]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Email display + copy button */}
      <div className="group relative flex items-center gap-3">
        {/* Animated email link */}
        <div className="relative overflow-hidden h-9 flex items-center">
          <AnimatePresence mode="wait">
            <motion.a
              key={current}
              href={`mailto:${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-orbitron text-lg sm:text-xl font-semibold text-neon-yellow whitespace-nowrap
                         transition-all duration-300
                         hover:text-white hover:drop-shadow-[0_0_18px_rgba(255,211,0,0.85)]"
            >
              {current}
            </motion.a>
          </AnimatePresence>
        </div>

        {/* Copy button */}
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Copy email address"
          className="relative flex-shrink-0 p-2 rounded border border-white/10 bg-white/4
                     text-text-muted hover:text-neon-yellow hover:border-neon-yellow/40
                     hover:shadow-[0_0_14px_rgba(255,211,0,0.2)]
                     transition-all duration-200"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="block text-neon-yellow text-sm leading-none"
              >
                ✓
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="block text-sm leading-none"
              >
                ⎘
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Caption */}
      <p className="text-text-muted text-sm tracking-wide">
        Pick any. It reaches me.
      </p>

      {/* Dot indicators */}
      <div className="flex items-center gap-1.5">
        {emails.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show email ${i + 1}`}
            className="transition-all duration-300"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === index
                  ? "w-4 h-1.5 bg-neon-yellow shadow-[0_0_8px_rgba(255,211,0,0.7)]"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
