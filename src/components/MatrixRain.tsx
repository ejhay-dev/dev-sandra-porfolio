"use client";

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  className?: string;
}

export function MatrixRain({ className = "" }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - expanded coding symbols and characters
    const matrixChars = [
      // Programming symbols
      '{', '}', '[', ']', '(', ')', '<', '>', '=', '+', '-', '*', '/', '\\',
      '|', '&', '%', '$', '#', '@', '!', '?', '^', '~', '`', '"', "'",
      ';', ':', '.', ',', '_', 
      // Code keywords (shortened)
      'if', 'fn', 'var', 'let', 'def', 'end', 'new', 'try', 'for', 'int', 'str', 'obj',
      'css', 'js', 'py', 'go', 'rs', 'ts', 'jsx', 'vue', 'sql', 'api', 'git', 'npm',
      // Numbers and hex
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f',
      // Common programming characters
      'x', 'y', 'z', 'i', 'j', 'k', 'n', 'm', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
      // Binary
      '0', '1', '0', '1', '0', '1',
    ];

    const fontSize = 16; // Slightly bigger for better visibility
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(0);
    const chars: string[] = Array(columns).fill('');
    const speeds: number[] = Array(columns).fill(0);
    const opacities: number[] = Array(columns).fill(0);
    const brightnesses: number[] = Array(columns).fill(0);

    // Initialize each column
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start with random delays
      speeds[i] = Math.random() * 4 + 2; // Random speed between 2-6 (faster)
      opacities[i] = Math.random() * 0.4 + 0.6; // Random opacity 0.6-1.0 (brighter)
      brightnesses[i] = Math.random() * 0.3 + 0.7; // Random brightness 0.7-1.0
      chars[i] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    }

    let animationId: number;

    const draw = () => {
      // Create trailing effect - much less fade for sharper characters
      ctx.fillStyle = 'rgba(10, 15, 15, 0.02)'; // Very minimal fade to keep characters sharp
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'JetBrains Mono', 'Courier New', monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < columns; i++) {
        const char = chars[i];
        const x = i * fontSize + fontSize / 2;
        const y = drops[i] * fontSize;

        // Draw trail characters (sharper, no blur)
        for (let trail = 1; trail <= 4; trail++) {
          const trailY = y - trail * fontSize;
          const trailOpacity = opacities[i] * (1 - trail * 0.2);
          
          if (trailY > 0 && trailOpacity > 0.1) {
            // Use different shades of teal/cyan for depth without blur
            if (trail === 1) {
              ctx.fillStyle = `rgba(6, 182, 212, ${trailOpacity * 0.8})`; // Bright cyan
            } else if (trail === 2) {
              ctx.fillStyle = `rgba(20, 184, 166, ${trailOpacity * 0.6})`; // Teal
            } else if (trail === 3) {
              ctx.fillStyle = `rgba(13, 148, 136, ${trailOpacity * 0.4})`; // Darker teal
            } else {
              ctx.fillStyle = `rgba(15, 118, 110, ${trailOpacity * 0.2})`; // Dark teal
            }
            
            ctx.fillText(char, x, trailY);
          }
        }

        // Main character (brightest and sharpest)
        const mainBrightness = brightnesses[i];
        const mainOpacity = Math.min(opacities[i] + 0.4, 1);
        
        // Bright cyan for the head character
        ctx.fillStyle = `rgba(34, 211, 238, ${mainOpacity})`;
        ctx.fillText(char, x, y);

        // Add slight glow effect with a second render slightly offset (no blur)
        if (mainBrightness > 0.8) {
          ctx.fillStyle = `rgba(103, 232, 249, ${mainOpacity * 0.3})`;
          ctx.fillText(char, x + 0.5, y);
          ctx.fillText(char, x - 0.5, y);
        }

        // Update position
        drops[i] += speeds[i] * 0.5; // Slower for more readable effect

        // Reset when off screen or randomly
        if (y > canvas.height + fontSize || (Math.random() > 0.998 && y > fontSize * 15)) {
          drops[i] = Math.random() * -100; // Random restart delay
          chars[i] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          speeds[i] = Math.random() * 4 + 2;
          opacities[i] = Math.random() * 0.4 + 0.6;
          brightnesses[i] = Math.random() * 0.3 + 0.7;
        }

        // Randomly change character occasionally for more dynamic effect
        if (Math.random() > 0.96) {
          chars[i] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ 
        opacity: 0.6, // Higher opacity for more visible characters
        mixBlendMode: 'normal'
      }}
    />
  );
}