"use client";
import FadeIn from "@/components/fade-in";
import Template from "@/components/template";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { openAndDownload } from "@/lib/utils";
import { HiDocumentText } from "react-icons/hi2";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiHome } from "react-icons/hi2";
import { useTheme } from "@/components/theme-provider";
import { CommandPaletteTrigger } from "@/components/command-palette";
import Background from "./components/background";
import CertificationCard from "./components/certification-card";
import { certificationsData } from "@/data";

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/kishys", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/kishansuhirthan/", label: "LinkedIn" },
  { icon: SiGmail, href: "mailto:kishansuhirthan@gmail.com", label: "Email" },
  { icon: HiDocumentText, href: "/Kishan%20Suhirthan%20-%20Resume.pdf", label: "Resume" },
];

export default function CertificationsPage() {
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
    <>
      <Background />
      <Template>
        <FadeIn>
          <div className="flex min-h-screen items-start justify-center px-6 pt-[4vh]">
            <div className="w-full max-w-xl space-y-6">
              {/* Top Nav - Socials, Home, Theme, Command */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-6 text-lg text-muted-foreground">
                  {socialLinks.map(({ icon: Icon, href, label }) => {
                    if (label === "Resume") {
                      return (
                        <button
                          key={label}
                          onClick={() => openAndDownload(href, "Kishan Suhirthan - Resume.pdf")}
                          className="transition-colors hover:text-accent"
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
                        target="_blank"
                        className="transition-colors hover:text-accent"
                      >
                        <Icon />
                      </Link>
                    );
                  })}
                </div>

                {/* Centered Home */}
                <Link
                  href="/"
                  prefetch={true}
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
              <div>
                <h1 className="text-2xl font-bold mb-1">Certifications</h1>
                <p className="text-sm text-muted-foreground">
                  Professional certifications and qualifications.
                </p>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificationsData.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} />
                ))}
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
        </FadeIn>
      </Template>
    </>
  );
}
