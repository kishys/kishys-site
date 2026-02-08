"use client";
import Link from "next/link";
import BentoCard from "@/components/bento-card";
import { HiFolder, HiBriefcase, HiPencilSquare } from "react-icons/hi2";

export default function NavButtons() {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      <Link href="/experience" className="block group">
        <BentoCard className="!py-3 !px-4 md:!py-4 md:!px-6 transition-all duration-300 group-hover:border-accent/30">
          <div className="flex items-center justify-center gap-2 text-muted-foreground group-hover:text-accent transition-colors">
            <HiBriefcase className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base font-medium">Experience</span>
          </div>
        </BentoCard>
      </Link>
      <Link href="/projects" className="block group">
        <BentoCard className="!py-3 !px-4 md:!py-4 md:!px-6 transition-all duration-300 bg-foreground group-hover:bg-accent">
          <div className="flex items-center justify-center gap-2 text-background group-hover:text-background transition-colors">
            <HiFolder className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base font-medium">Projects</span>
          </div>
        </BentoCard>
      </Link>
      <Link href="/writing" className="block group">
        <BentoCard className="!py-3 !px-4 md:!py-4 md:!px-6 transition-all duration-300 border-accent/20 group-hover:border-accent/50 group-hover:bg-accent/5">
          <div className="flex items-center justify-center gap-2 text-muted-foreground group-hover:text-accent transition-colors">
            <HiPencilSquare className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base font-medium">Writing</span>
          </div>
        </BentoCard>
      </Link>
    </div>
  );
}
