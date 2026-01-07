"use client";
import BentoCard from "@/components/bento-card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { HiDocumentText, HiHome } from "react-icons/hi2";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { CommandPaletteTrigger } from "@/components/command-palette";
import { useTheme } from "@/components/theme-provider";
import MobileMenu from "@/components/mobile-menu";

export default function Navbar() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState("00:00:00");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on projects or experience pages (not home)
  const isSubPage = pathname.startsWith("/projects") || pathname.startsWith("/experience");
  
  // Check if we're on a detail page (has a slug)
  const isDetailPage = (pathname.startsWith("/projects/") && pathname !== "/projects") || 
                       (pathname.startsWith("/experience/") && pathname !== "/experience");
  
  // Check if we're on main experience or projects page (not detail)
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

  const leftLinks = [
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
  ];

  const rightLinks = [
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

  const renderLink = (link: typeof leftLinks[0]) => (
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
  );

  return (
    <BentoCard className="flex items-center justify-between !px-4 !py-4 md:!px-8 md:!py-6">
      {/* Left section - Name/Location */}
      <div className="hidden md:block">
        {isDetailPage ? (
          <Link 
            href="/" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            Kishan Suhirthan
          </Link>
        ) : (
          <span className="text-sm font-medium text-muted-foreground">
            Toronto, CA
          </span>
        )}
      </div>

      {/* Mobile menu - visible only on mobile */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
      
      {/* Center section */}
      {isMainSubPage ? (
        // Home icon for experience/projects main pages
        <Link 
          href="/"
          className="group hidden md:flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-4 py-2 text-muted-foreground transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_20px_-8px_hsl(var(--accent)/0.5)] hover:scale-105"
        >
          <HiHome className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
          <span className="text-sm font-medium">Home</span>
          <span className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">↵</span>
        </Link>
      ) : isDetailPage ? (
        // Clock for detail pages
        <span className="font-mono text-sm font-medium text-muted-foreground tabular-nums hidden md:block">
          {mounted ? `${time} EST` : "00:00:00 EST"}
        </span>
      ) : (
        // Full navbar with icons for home page
        <div className="hidden md:flex items-center gap-20 text-2xl">
          {/* Left icons */}
          <div className="flex items-center gap-20">
            {leftLinks.map(renderLink)}
          </div>
          
          {/* Clock in the middle */}
          <span className="font-mono text-sm font-medium text-muted-foreground tabular-nums px-6">
            {mounted ? `${time} EST` : "00:00:00 EST"}
          </span>
          
          {/* Right icons */}
          <div className="flex items-center gap-20">
            {rightLinks.map(renderLink)}
          </div>
        </div>
      )}
      
      {/* Right section - Theme toggle and command palette */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-muted-foreground transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_20px_-8px_hsl(var(--accent)/0.5)]"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <FiSun className="h-4 w-4" />
          ) : (
            <FiMoon className="h-4 w-4" />
          )}
        </button>
        <div className="hidden md:block">
          <CommandPaletteTrigger />
        </div>
      </div>
    </BentoCard>
  );
}
