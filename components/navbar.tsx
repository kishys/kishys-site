"use client";
import BentoCard from "@/components/bento-card";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi2";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("00:00:00");
  const [mounted, setMounted] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

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

  const socialLinks = [
    { 
      icon: <SiGithub />, 
      label: "GitHub", 
      href: "https://github.com/kishys",
      id: "github"
    },
    { 
      icon: <SiLinkedin />, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/kishansuhirthan/",
      id: "linkedin"
    },
    { 
      icon: <SiGmail />, 
      label: "Gmail", 
      href: "mailto:kishansuhirthan@gmail.com",
      id: "email"
    },
    { 
      icon: <HiDocumentText />, 
      label: "Resume", 
      href: "/resume.pdf",
      id: "resume"
    },
  ];

  return (
    <BentoCard className="flex items-center justify-between !px-8 !py-6">
      <span className="text-sm font-medium text-muted-foreground">
        Toronto, CA
      </span>
      
      <div className="flex items-center gap-24 text-2xl">
        {socialLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target={link.id !== "email" ? "_blank" : undefined}
            className="group relative flex items-center transition-colors hover:text-accent"
            onMouseEnter={() => setHoveredIcon(link.id)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <span className="relative z-10">
              {link.icon}
            </span>
            <span 
              className={`absolute left-8 whitespace-nowrap text-base font-medium transition-opacity duration-700 ease-out ${
                hoveredIcon === link.id 
                  ? "opacity-100" 
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
      
      <span className="font-mono text-sm font-medium text-muted-foreground tabular-nums">
        {mounted ? `${time} EST` : "00:00:00 EST"}
      </span>
    </BentoCard>
  );
}
