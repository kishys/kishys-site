"use client";
import Link from "next/link";
import BentoCard from "@/components/bento-card";
import { HiFolder, HiBriefcase } from "react-icons/hi2";

export default function NavButtons() {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <Link href="/projects" className="block group">
        <BentoCard className="!py-3 !px-4 md:!py-4 md:!px-6 transition-all duration-300 group-hover:border-accent/30">
          <div className="flex items-center justify-center gap-2 text-muted-foreground group-hover:text-accent transition-colors">
            <HiFolder className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base font-medium">Projects</span>
          </div>
        </BentoCard>
      </Link>
      <Link href="/experience" className="block group">
        <BentoCard className="!py-3 !px-4 md:!py-4 md:!px-6 transition-all duration-300 group-hover:border-accent/30">
          <div className="flex items-center justify-center gap-2 text-muted-foreground group-hover:text-accent transition-colors">
            <HiBriefcase className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base font-medium">Experience</span>
          </div>
        </BentoCard>
      </Link>
    </div>
  );
}
