"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MatrixRain } from "./MatrixRain";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Start showing text after SD animation
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1200);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800); // Small delay before transitioning
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => {
      clearTimeout(textTimer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0f0f] flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Matrix Rain Background - Subtle */}
      <div className="absolute inset-0 opacity-30">
        <MatrixRain />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Sliding SD Logo Container */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background sliding track */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "280px", opacity: 0.3 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.3
            }}
            className="absolute h-24 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rounded-2xl"
          />

          {/* SD Logo - Sliding Animation */}
          <motion.div
            initial={{ 
              x: -300, 
              scale: 0.5, 
              rotate: -45,
              opacity: 0 
            }}
            animate={{ 
              x: 0, 
              scale: 1, 
              rotate: 0,
              opacity: 1 
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.5
            }}
            className="relative"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-2xl">
              <span className="text-white text-4xl font-bold">SD</span>
              
              {/* Animated border with slide effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(6, 182, 212, 0.3)",
                    "0 0 40px rgba(6, 182, 212, 0.6)",
                    "0 0 20px rgba(6, 182, 212, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Sliding light effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut",
                  delay: 1.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </div>

            {/* Sliding trail effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/40 to-transparent"
              initial={{ x: -50, opacity: 0.8 }}
              animate={{ x: 0, opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </motion.div>

        {/* Name Text with slide in from right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: showText ? 1 : 0, 
            x: showText ? 0 : 50 
          }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="space-y-2"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold teal-text-primary"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Sandra Demition
          </motion.h1>
          <motion.p 
            className="text-lg text-muted code"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Creative Developer
          </motion.p>
        </motion.div>

        {/* Loading Progress with slide animation */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: showText ? 1 : 0,
            scaleX: showText ? 1 : 0
          }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mx-auto"
          style={{ width: "300px", transformOrigin: "left" }}
        >
          <div className="relative">
            {/* Progress bar background */}
            <div className="h-1 bg-[#1e2832] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Sliding highlight effect on progress bar */}
              <motion.div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            </div>
            
            {/* Progress percentage */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, ease: "easeOut" }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <span className="code text-xs text-cyan-400">{Math.round(progress)}%</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Loading dots animation with staggered slide in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : 20 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex items-center justify-center gap-2 pt-4"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-cyan-400 rounded-full"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 1.8 + index * 0.1,
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <motion.div
                className="w-full h-full bg-cyan-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal-style loading text with typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : 20 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="code text-sm text-muted"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 2.5, duration: 1.5, ease: "easeInOut" }}
            className="inline-block overflow-hidden"
          >
            Initializing creative workspace
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 2.5 }}
          >
            ...
          </motion.span>
        </motion.div>
      </div>

      {/* Subtle background effects with sliding animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent)',
          }}
          initial={{ x: -200, opacity: 0 }}
          animate={{ 
            x: 0,
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            x: { duration: 2, ease: "easeOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3), transparent)',
          }}
          initial={{ x: 200, opacity: 0 }}
          animate={{ 
            x: 0,
            opacity: [0.05, 0.1, 0.05],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            x: { duration: 2.5, ease: "easeOut", delay: 0.5 },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        />

        {/* Sliding particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: [0, 100, 200],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 3 + i * 0.5, 
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}