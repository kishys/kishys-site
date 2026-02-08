import { PlatformDataProps } from "@/data";
import { HiArrowUpRight } from "react-icons/hi2";
import { useState } from "react";

interface PlatformCardProps {
  platform: PlatformDataProps;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const platformColors = {
    substack: "#FF6B35", // Orange
    medium: "#6B7280",   // Grey
    linkedin: "#0077B5"  // Blue
  };

  const borderColor = platformColors[platform.platform as keyof typeof platformColors];

  return (
    <a 
      href={platform.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative overflow-hidden p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer h-[56px] flex items-center justify-center group"
        style={{ 
          borderColor: borderColor,
          backgroundColor: isHovered ? borderColor : 'transparent'
        }}
      >
        {/* Sliding background animation */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            background: borderColor,
            transform: isHovered ? 'translateX(0%)' : 'translateX(-100%)',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Logo and name - centered when not hovered */}
          <div className={`flex items-center transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'} ${!isHovered ? 'w-full justify-center' : ''}`}>
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-medium text-sm flex-shrink-0 mr-3"
              style={{ backgroundColor: borderColor }}
            >
              {platform.name[0]}
            </div>
            <h3 className="font-medium text-sm text-foreground">
              {platform.name}
            </h3>
          </div>
          
          {/* Hover state text */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-white font-medium text-sm">
              go to {platform.name}
            </span>
          </div>
          
          {/* Website link icon - always visible */}
          <div className="flex-shrink-0">
            <svg 
              className={`w-4 h-4 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-muted-foreground group-hover:text-accent'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}