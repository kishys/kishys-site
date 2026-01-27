"use client";
import FadeIn from "@/components/fade-in";
import Template from "@/components/template";
import { projectData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi2";
import { FiSun, FiMoon, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
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

  const clean = (slug: string) => slug.toLowerCase().replaceAll(" ", "-");
  const project = projectData.find((p) => clean(p.title) === params.slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  const { title, description, tags, date, summary, href } = project;
  const cleanTitle = clean(title);

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
                  href="/projects"
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
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-semibold">{title}</h1>
                </div>
                <p className="text-sm text-accent">{date}</p>
              </div>

              {/* Image */}
              <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-border/50">
                <Image
                  src={`/images/projects/${cleanTitle}.png`}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Centered Repo/Website icons like experiences */}
              <div className="flex gap-3 justify-center mt-3">
                <a
                  href={project.repo || `https://github.com/kishys/${cleanTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => { if (!project.repo) { /* allow default to github based on cleanTitle */ } }}
                  aria-label="Repo"
                  className="px-3 py-1.5 rounded-md border border-border/50 hover:border-accent hover:text-accent transition-colors flex items-center"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={project.website || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => { if (!project.website) e.preventDefault(); }}
                  aria-label="Website"
                  className="px-3 py-1.5 rounded-md border border-border/50 hover:border-accent hover:text-accent transition-colors flex items-center"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-accent/10 text-muted-foreground border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>{summary}</p>
                <p>{description}</p>
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
