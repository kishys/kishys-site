"use client";
import FadeIn from "@/components/fade-in";
import Template from "@/components/template";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiExternalLink, FiCreditCard } from "react-icons/fi";
import { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi2";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiHome } from "react-icons/hi2";
import { useTheme } from "@/components/theme-provider";
import { CommandPaletteTrigger } from "@/components/command-palette";
import Background from "./components/background";
import { experienceData } from "@/data";

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

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/kishys", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/kishansuhirthan/", label: "LinkedIn" },
  { icon: SiGmail, href: "mailto:kishansuhirthan@gmail.com", label: "Email" },
  { icon: HiDocumentText, href: "/resume.pdf", label: "Resume" },
];

export default function Page() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
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
    <>
      <Background />
      <Template>
        <FadeIn>
          <div className="flex min-h-screen items-start justify-center px-6 pt-[4vh]">
            <div className="w-full max-w-xl space-y-6">
              {/* Top Nav - Socials, Home, Theme, Command */}
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
                  href="/"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
                >
                  <HiHome className="w-4 h-4" />
                  <span>Home</span>
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
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold">Experience</h1>
                <p className="text-muted-foreground">
                  Learn more on{" "}
                  <Link
                    target="_blank"
                    href="https://linkedin.com/in/kishansuhirthan"
                    className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </Link>
                </p>
              </div>

              {/* Experience List */}
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    role="link"
                    tabIndex={0}
                    onClick={() => router.push(`/experience/${exp.href}`)}
                    onKeyDown={(e) => { if (e.key === "Enter") router.push(`/experience/${exp.href}`); }}
                    className="block group"
                  >
                    <div className="p-4 rounded-lg border border-border/50 hover:border-accent/30 transition-all hover:bg-accent/5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-medium group-hover:text-accent transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {exp.summary}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground whitespace-nowrap">{exp.date}</div>
                          <div className="text-xs text-muted-foreground mt-1">{calcDuration(exp.startDate, exp.endDate)}</div>
                          <div className="flex gap-2 justify-end mt-2">
                            <a
                              href={exp.website || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => { if (!exp.website) e.preventDefault(); e.stopPropagation(); }}
                              aria-label={`${exp.title} website`}
                              className="px-2 py-1 text-xs rounded-md border border-border/50 hover:border-accent hover:text-accent transition-colors flex items-center"
                            >
                              <FiExternalLink className="w-4 h-4" />
                            </a>
                            <a
                              href={exp.vcard || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => { if (!exp.vcard) e.preventDefault(); e.stopPropagation(); }}
                              aria-label={`${exp.title} vCard`}
                              className="px-2 py-1 text-xs rounded-md border border-border/50 hover:border-accent hover:text-accent transition-colors flex items-center"
                            >
                              <FiCreditCard className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
