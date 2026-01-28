"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi2";
import { FiSun, FiMoon } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";
import { useTheme } from "@/components/theme-provider";
import { CommandPaletteTrigger } from "@/components/command-palette";
import { openAndDownload } from "@/lib/utils";

const techIcons = [
  { icon: SiReact, key: "react", name: "React" },
  { icon: SiTypescript, key: "typescript", name: "TypeScript" },
  { icon: SiNextdotjs, key: "nextjs", name: "Next.js" },
  { icon: SiNodedotjs, key: "nodejs", name: "Node.js" },
  { icon: SiPython, key: "python", name: "Python" },
];

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/kishys", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/kishansuhirthan/", label: "LinkedIn" },
  { icon: SiGmail, href: "mailto:kishansuhirthan@gmail.com", label: "Email" },
  { icon: HiDocumentText, href: "/Kishan%20Suhirthan%20-%20Resume.pdf", label: "Resume" },
];

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState("00:00:00");
  const [mounted, setMounted] = useState(false);

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
    <div className="flex min-h-screen items-start justify-center px-6 pt-[4vh]">
      <div className="w-full max-w-xl space-y-6">
        {/* Top Nav - Socials, Theme, Command */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6 text-lg text-muted-foreground">
            {socialLinks.map(({ icon: Icon, href, label }) => {
              if (label === "Resume") {
                return (
                  <button
                    key={label}
                    onClick={() => openAndDownload(href, "Kishan Suhirthan - Resume.pdf")}
                    className="hover:text-accent transition-colors"
                    aria-label="Open resume"
                  >
                    <Icon />
                  </button>
                );
              }

              return (
                <Link
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  className="hover:text-accent transition-colors"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
            </button>
            <div className="hidden md:block">
              <CommandPaletteTrigger />
            </div>
            <div className="md:hidden">
              <CommandPaletteTrigger variant="button" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-5 text-base">
          {/* Logo + Name + Building */}
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:text-left">
            {/* Compact Animated Logo */}
            <div className="relative w-14 h-14 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-md animate-pulse"></div>
              <div className="absolute -inset-1 rounded-full">
                <svg className="w-full h-full animate-spin" style={{ animationDuration: '3s' }} viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(var(--accent))" strokeWidth="6" strokeDasharray="100 200" strokeLinecap="round" opacity="0.8" />
                </svg>
              </div>
              <div className="absolute -inset-0.5 rounded-full">
                <svg className="w-full h-full" style={{ animation: 'spin 4s linear infinite reverse' }} viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="56" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" strokeDasharray="80 220" strokeLinecap="round" opacity="0.5" />
                </svg>
              </div>
              <div className="relative w-full h-full rounded-full overflow-hidden bg-background border border-accent/30">
                <Image src="/images/K-Logo.png" alt="K" fill className="object-cover scale-125" priority />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xl">Hey, I&apos;m Kishan Suhi</span>
              <span className="text-accent text-lg">Building Something New</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">»</span>
            <span className="italic text-muted-foreground mr-2">What I like to use:</span>
            <div className="flex items-center gap-3 text-xl">
              {techIcons.map(({ icon: Icon, key }) => (
                <Icon
                  key={key}
                  className="text-muted-foreground hover:text-accent transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Experiences Section */}
          <div className="space-y-1.5">
            {/* Scrolling Experiences Header */}
            <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_8px,black_calc(100%-8px),transparent)]">
              <div className="flex">
                <div className="flex shrink-0 animate-infinite-scroll">
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">experiences</span>
                </div>
                <div className="flex shrink-0 animate-infinite-scroll" aria-hidden="true">
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">experiences</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">experiences</span>
                </div>
              </div>
            </div>
            <div className="ml-4 space-y-1 text-muted-foreground">
              <div className="flex items-center gap-1 flex-nowrap max-[408px]:flex-col max-[408px]:items-center max-[408px]:text-center">
                <div className="flex items-center gap-2 whitespace-nowrap max-[408px]:whitespace-normal">
                  <span className="text-sm">└</span>
                  <span>Mechanical Member: </span>
                </div>
                <Link href="/experience/team1325" className="font-medium text-foreground underline decoration-accent/50 hover:text-accent transition-colors whitespace-nowrap max-[408px]:whitespace-normal">
                  FRC Team 1325
                </Link>
              </div>

              <div className="flex items-center gap-1 flex-nowrap max-[464px]:items-start max-[464px]:text-left max-[408px]:flex-col max-[408px]:items-center max-[408px]:text-center">
                <div className="flex items-center gap-2 whitespace-nowrap max-[408px]:whitespace-normal">
                  <span className="text-sm">└</span>
                  <span>Logistics Team + Web Dev:</span>
                </div>
                <Link href="/experience/innovire" className="font-medium text-foreground underline decoration-accent/50 hover:text-accent transition-colors whitespace-nowrap max-[408px]:whitespace-normal">
                  Innovire
                </Link>
              </div>

              <div className="flex items-center gap-1 flex-nowrap max-[464px]:items-start max-[464px]:text-left max-[408px]:flex-col max-[408px]:items-center max-[408px]:text-center">
                <div className="flex items-center gap-2 whitespace-nowrap max-[408px]:whitespace-normal">
                  <span className="text-sm">└</span>
                  <span>Deputy Executive Director:</span>
                </div>
                <Link href="/experience/drint" className="font-medium text-foreground underline decoration-accent/50 hover:text-accent transition-colors whitespace-nowrap max-[408px]:whitespace-normal">
                  Dr. Interested
                </Link>
              </div>

              <div className="flex items-center gap-1 flex-nowrap max-[464px]:items-start max-[464px]:text-left max-[408px]:flex-col max-[408px]:items-center max-[408px]:text-center">
                <div className="flex items-center gap-2 whitespace-nowrap max-[408px]:whitespace-normal">
                  <span className="text-sm">└</span>
                  <span>Operations, Logistics, and Growth:</span>
                </div>
                <Link href="/experience/ex3" className="font-medium text-foreground underline decoration-accent/50 hover:text-accent transition-colors whitespace-nowrap max-[408px]:whitespace-normal">
                  Explore3
                </Link>
              </div>

              <div className="flex items-center gap-1 flex-nowrap max-[464px]:items-start max-[464px]:text-left max-[408px]:flex-col max-[408px]:items-center max-[408px]:text-center">
                <div className="flex items-center gap-2 whitespace-nowrap max-[408px]:whitespace-normal">
                  <span className="text-sm">└</span>
                  <span>Flight Sergeant:</span>
                </div>
                <Link href="/experience/fsgtnco" className="font-medium text-foreground underline decoration-accent/50 hover:text-accent transition-colors whitespace-nowrap max-[408px]:whitespace-normal">
                  RCAirCS
                </Link>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-1.5">
            {/* Scrolling Projects Header */}
            <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_8px,black_calc(100%-8px),transparent)]">
              <div className="flex">
                <div className="flex shrink-0 animate-infinite-scroll">
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">projects</span>
                </div>
                <div className="flex shrink-0 animate-infinite-scroll" aria-hidden="true">
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-muted-foreground mx-2 whitespace-nowrap">projects</span>
                  <span className="italic text-accent-foreground mx-2 whitespace-nowrap">projects</span>
                </div>
              </div>
            </div>
            <div className="ml-4">
              <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded border border-accent/30">coming soon</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <Link
            href="/experience"
            prefetch={true}
            className="flex-1 py-3 px-4 text-center text-base font-medium bg-foreground text-background rounded-lg hover:bg-accent transition-colors"
          >
            see my experience ↗
          </Link>
          <Link
            href="/projects"
            prefetch={true}
            className="flex-1 py-3 px-4 text-center text-base font-medium border border-border rounded-lg text-muted-foreground hover:border-accent hover:text-accent transition-colors"
          >
            view projects ↗
          </Link>
        </div>

        {/* Footer - Location & Time centered */}
        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Toronto, CA</span>
            <span>•</span>
            <span className="font-mono tabular-nums">{mounted ? `${time} EST` : "00:00:00 EST"}</span>
            <span>•</span>
            <span>Kishan Suhirthan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
