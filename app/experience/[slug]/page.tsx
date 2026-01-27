"use client";
import FadeIn from "@/components/fade-in";
import Template from "@/components/template";
import { experienceData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiCreditCard } from "react-icons/fi";
import { useState, useEffect, use } from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi2";
import { FiSun, FiMoon, FiArrowLeft } from "react-icons/fi";
import { useTheme } from "@/components/theme-provider";
import { CommandPaletteTrigger } from "@/components/command-palette";

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/kishys", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/kishansuhirthan/", label: "LinkedIn" },
  { icon: SiGmail, href: "mailto:kishansuhirthan@gmail.com", label: "Email" },
  { icon: HiDocumentText, href: "/resume.pdf", label: "Resume" },
];

export default function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = use(props.params);
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

  const experience = experienceData.find(
    (exp) => exp.href === params.slug || exp.title.toLowerCase().replaceAll(" ", "-") === params.slug
  );

  if (!experience) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Experience not found</p>
      </div>
    );
  }

  const { title, description, tags, date, href, summary } = experience;
  const imageSlug = href || title.toLowerCase().replaceAll(" ", "-");

  function calcDuration(start?: string, end?: string) {
    if (!start) return "";
    try {
      const s = new Date(start);
      const e = end === "Present" || !end ? new Date() : new Date(end);
      const years = e.getFullYear() - s.getFullYear();
      const months = e.getMonth() - s.getMonth();
      const totalMonths = years * 12 + months;
      if (totalMonths < 0) return "";
      if (totalMonths < 12) return `${totalMonths} mo${totalMonths !== 1 ? "s" : ""}`;
      const y = Math.floor(totalMonths / 12);
      const m = totalMonths % 12;
      return m === 0 ? `${y} yr${y !== 1 ? "s" : ""}` : `${y} yr ${m} mo`;
    } catch (e) {
      return "";
    }
  }

  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full animate-background overflow-clip opacity-15 duration-1000 ease-smooth">
        <div className="absolute top-0 h-1/4 w-full bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)),transparent,transparent)] blur-3xl" />
        <div className="absolute -left-20 h-full w-1/4 bg-[radial-gradient(ellipse_at_left,hsl(var(--accent)),transparent,transparent)] blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-3/4 w-5/6 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)),transparent,transparent)] blur-3xl" />
      </div>
      <Template>
        <FadeIn>
          <div className="flex min-h-screen items-start justify-center px-6 pt-[4vh]">
            <div className="w-full max-w-xl space-y-6">
              {/* Top Nav - Socials, Back, Theme, Command */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-6 text-lg text-muted-foreground">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      className="hover:text-accent transition-colors"
                    >
                      <Icon />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/experience"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
                >
                  <FiArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </Link>
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleTheme}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
                  </button>
                  <CommandPaletteTrigger />
                </div>
              </div>

              {/* Header */}
              <div className="space-y-1">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className="text-sm text-accent">{date} {"•"} {calcDuration((experience as any).startDate, (experience as any).endDate)}</p>
              </div>

              {/* Image */}
              <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-border/50">
                <Image
                  src={`/images/experience/${imageSlug}.png`}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Buttons (Website / vCard) centered */}
              <div className="flex gap-3 justify-center">
                <a
                  href={(experience as any).website || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => { if (!(experience as any).website) e.preventDefault(); }}
                  aria-label="Website"
                  className="px-3 py-1.5 rounded-md border border-border/50 hover:border-accent hover:text-accent transition-colors flex items-center"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={(experience as any).vcard || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => { if (!(experience as any).vcard) e.preventDefault(); }}
                  aria-label="vCard"
                  className="px-3 py-1.5 rounded-md border border-border/50 hover:border-accent hover:text-accent transition-colors flex items-center"
                >
                  <FiCreditCard className="w-5 h-5" />
                </a>
              </div>

              {/* Description */}
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>{summary}</p>
                <p>{description}</p>
              </div>

              {/* Progression / Positions */}
              <div className="mt-4">
                <h4 className="text-sm font-medium">Positions & Progression</h4>
                <div className="mt-2 text-sm text-muted-foreground">
                  {((experience as any).positions && (experience as any).positions.length > 0) ? (
                    <ul className="space-y-3">
                      {(experience as any).positions.map((pos: any, i: number) => {
                        const title = typeof pos === "string" ? pos : pos.title;
                        const posDate = typeof pos === "string" ? date : (pos.date || date);
                        return (
                          <li key={i} className="flex items-center justify-between">
                            <span>{title}</span>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{posDate}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="italic">No progression data available — replace with actual positions.</p>
                  )}
                </div>
              </div>

              {/* Footer - Location & Time centered */}
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span>Toronto, CA</span>
                  <span>•</span>
                  <span className="font-mono tabular-nums">{mounted ? `${time} EST` : "00:00:00 EST"}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Template>
    </>
  );
}
