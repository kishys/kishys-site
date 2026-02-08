import BentoCard from "@/components/bento-card";
import { PlatformDataProps } from "@/data";
import { HiArrowUpRight } from "react-icons/hi2";
import Image from "next/image";

interface PlatformCardProps {
  platform: PlatformDataProps;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
      <BentoCard className="p-6 h-full group hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="flex flex-col h-full">
          {/* Logo and platform name */}
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: platform.color }}
            >
              {platform.name[0]}
            </div>
            <div>
              <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                {platform.name}
              </h3>
            </div>
          </div>

          {/* Title and description */}
          <div className="flex-1 mb-4">
            <h4 className="font-medium mb-2 text-foreground">
              {platform.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {platform.description}
            </p>
          </div>

          {/* Visit link */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="text-sm text-muted-foreground">
              Visit {platform.name}
            </div>
            <HiArrowUpRight className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </BentoCard>
    </a>
  );
}