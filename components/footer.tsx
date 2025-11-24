"use client";
import React, { useState, useEffect } from "react";
import BentoCard from "@/components/bento-card";
import Link from "next/link";
import FlipLink from "./flip-link";

export default function Footer({ ...props }: React.HTMLProps<HTMLDivElement>) {
  const [hue, setHue] = useState(200);

  useEffect(() => {
    // Update CSS variable for accent color
    document.documentElement.style.setProperty('--accent', `${hue} 90% 50%`);
  }, [hue]);

  return (
    <footer {...props} className="w-full space-y-2.5">
      <BentoCard className="flex flex-col items-center justify-between gap-4 !px-6 !py-4 sm:flex-row">
        <p className="font-medium">Kishan Suhirthan</p>
        <FlipLink
          href="https://innovire.ca/"
          className="text-accent-foreground hover:text-accent"
        >
          innovire.ca
        </FlipLink>
      </BentoCard>
      
      <BentoCard className="sticky bottom-2.5 !px-6 !py-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-muted-foreground">Theme</span>
          
          <div className="relative flex h-4 flex-1 items-center overflow-visible rounded-full shadow-inner">
            {/* Rainbow gradient track */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(to right, hsl(0, 100%, 50%), hsl(30, 100%, 50%), hsl(60, 100%, 50%), hsl(90, 100%, 50%), hsl(120, 100%, 50%), hsl(150, 100%, 50%), hsl(180, 100%, 50%), hsl(210, 100%, 50%), hsl(240, 100%, 50%), hsl(270, 100%, 50%), hsl(300, 100%, 50%), hsl(330, 100%, 50%), hsl(360, 100%, 50%))',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 -1px 2px rgba(255, 255, 255, 0.1)'
              }}
            />
            
            {/* Glossy overlay */}
            <div 
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.2) 100%)'
              }}
            />
            
            {/* Animated shimmer effect */}
            <div 
              className="absolute inset-0 rounded-full opacity-40"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                animation: 'shimmer 3s infinite',
                backgroundSize: '200% 100%'
              }}
            />
            
            <style jsx>{`
              @keyframes shimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
              }
            `}</style>
            
            {/* Slider input */}
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              className="relative z-10 h-full w-full cursor-pointer appearance-none bg-transparent"
              style={{
                WebkitAppearance: 'none',
              }}
            />
            
            {/* Slider thumb styling */}
            <style jsx>{`
              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                width: 28px;
                height: 18px;
                border-radius: 20px;
                background: linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%);
                border: 2.5px solid hsl(var(--background));
                box-shadow: 
                  0 0 0 1px hsl(var(--border)),
                  0 3px 8px rgba(0, 0, 0, 0.4),
                  0 0 16px hsl(${hue}, 100%, 50%, 0.5),
                  inset 0 1px 1px rgba(255, 255, 255, 0.3);
                cursor: grab;
                transition: all 0.2s ease;
              }
              
              input[type="range"]:active::-webkit-slider-thumb {
                cursor: grabbing;
                transform: scale(1.08);
                box-shadow: 
                  0 0 0 1px hsl(var(--border)),
                  0 4px 10px rgba(0, 0, 0, 0.5),
                  0 0 20px hsl(${hue}, 100%, 50%, 0.7),
                  inset 0 1px 1px rgba(255, 255, 255, 0.3);
              }
              
              input[type="range"]::-webkit-slider-thumb:hover {
                box-shadow: 
                  0 0 0 1px hsl(var(--border)),
                  0 3px 9px rgba(0, 0, 0, 0.45),
                  0 0 18px hsl(${hue}, 100%, 50%, 0.6),
                  inset 0 1px 1px rgba(255, 255, 255, 0.3);
              }
              
              input[type="range"]::-moz-range-thumb {
                width: 28px;
                height: 18px;
                border-radius: 20px;
                background: linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%);
                border: 2.5px solid hsl(var(--background));
                box-shadow: 
                  0 0 0 1px hsl(var(--border)),
                  0 3px 8px rgba(0, 0, 0, 0.4),
                  0 0 16px hsl(${hue}, 100%, 50%, 0.5),
                  inset 0 1px 1px rgba(255, 255, 255, 0.3);
                cursor: grab;
                transition: all 0.2s ease;
              }
              
              input[type="range"]:active::-moz-range-thumb {
                cursor: grabbing;
                transform: scale(1.08);
                box-shadow: 
                  0 0 0 1px hsl(var(--border)),
                  0 4px 10px rgba(0, 0, 0, 0.5),
                  0 0 20px hsl(${hue}, 100%, 50%, 0.7),
                  inset 0 1px 1px rgba(255, 255, 255, 0.3);
              }
              
              input[type="range"]::-moz-range-thumb:hover {
                box-shadow: 
                  0 0 0 1px hsl(var(--border)),
                  0 3px 9px rgba(0, 0, 0, 0.45),
                  0 0 18px hsl(${hue}, 100%, 50%, 0.6),
                  inset 0 1px 1px rgba(255, 255, 255, 0.3);
              }
            `}</style>
          </div>
          
          <span className="font-mono text-sm text-muted-foreground">{hue}°</span>
        </div>
      </BentoCard>
    </footer>
  );
}
