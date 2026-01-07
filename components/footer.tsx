"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import BentoCard from "@/components/bento-card";
import FlipLink from "./flip-link";

export default function Footer({ ...props }: React.HTMLProps<HTMLDivElement>) {
  const [time, setTime] = useState("00:00:00");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on main experience or projects page
  const isMainSubPage = (pathname === "/projects" || pathname === "/experience");

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const estTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/Toronto",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(estTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer {...props} className="w-full space-y-2.5">
      <BentoCard className="flex flex-col items-center justify-between gap-4 !px-6 !py-4 sm:flex-row">
        {isMainSubPage ? (
          // Just clock centered for experience/projects pages
          <span className="font-mono text-sm font-medium text-muted-foreground tabular-nums w-full text-center">
            {mounted ? `${time} EST` : "00:00:00 EST"}
          </span>
        ) : (
          // Full footer for other pages
          <>
            <p className="font-medium">Kishan Suhirthan</p>
            <FlipLink
              href="https://innovire.ca/"
              className="text-accent-foreground hover:text-accent"
            >
              innovire.ca
            </FlipLink>
          </>
        )}
      </BentoCard>
    </footer>
  );
}
