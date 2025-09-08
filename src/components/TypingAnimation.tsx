"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function TypingAnimation({ 
  text, 
  delay = 0, 
  speed = 100,
  className = "" 
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [cursorSymbolIndex, setCursorSymbolIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Creative symbols representing video editor, developer, and social media manager
  const cursorSymbols = [
    "🔍", // magnifying glass - analysis/attention to detail
    "💻", // laptop - development
    "🎬", // film camera - video editing
    "📱", // phone - social media
    "⚙️", // gear - technical work
    "✂️", // scissors - video editing
    "📊", // chart - analytics/social media
    "🚀", // rocket - growth/innovation
    "💾", // save icon - development
    "🎞️", // film strip - video editing
  ];

  // Start typing after delay
  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const delayTimer = setTimeout(() => {
        setShowCursor(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    }
  }, [delay, currentIndex]);

  // Typing animation
  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      // Wait for delay before starting
      const startTimer = setTimeout(() => {
        if (currentIndex < text.length) {
          const nextIndex = currentIndex + 1;
          setDisplayText(text.slice(0, nextIndex));
          setCurrentIndex(nextIndex);
        }
      }, delay);
      return () => clearTimeout(startTimer);
    } else if (currentIndex > 0 && currentIndex < text.length) {
      // Continue typing
      const timer = setTimeout(() => {
        const nextIndex = currentIndex + 1;
        setDisplayText(text.slice(0, nextIndex));
        setCurrentIndex(nextIndex);
      }, speed);
      return () => clearTimeout(timer);
    } else if (currentIndex >= text.length && !isComplete) {
      // Typing complete
      setIsComplete(true);
    }
  }, [currentIndex, text, delay, speed, isComplete]);

  // Rotate cursor symbols while typing
  useEffect(() => {
    if (showCursor && !isComplete) {
      const symbolRotationTimer = setInterval(() => {
        setCursorSymbolIndex((prev) => (prev + 1) % cursorSymbols.length);
      }, 350); // Change symbol every 350ms

      return () => clearInterval(symbolRotationTimer);
    }
  }, [isComplete, showCursor, cursorSymbols.length]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [0.9, 1.2, 0.9],
            rotate: [0, 8, -8, 0],
            y: [0, -2, 0]
          }}
          transition={{ 
            duration: 0.6, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="ml-2 inline-block text-2xl"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))',
            textShadow: '0 0 12px rgba(6, 182, 212, 0.4)',
            color: '#22d3ee'
          }}
        >
          {cursorSymbols[cursorSymbolIndex]}
        </motion.span>
      )}
      {showCursor && isComplete && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.1, 1],
            rotate: [0, 3, -3, 0]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="ml-2 inline-block text-2xl"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))',
            textShadow: '0 0 15px rgba(6, 182, 212, 0.5)',
            color: '#22d3ee'
          }}
        >
          🔍
        </motion.span>
      )}
    </span>
  );
}