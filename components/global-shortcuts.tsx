"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import { openAndDownload } from "@/lib/utils";

export function GlobalShortcutsProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { toggleTheme } = useTheme();
  const slashPressed = React.useRef(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K for command palette
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
        return;
      }

      // Track / (slash) press for shortcuts
      if (e.key === "/" && !e.repeat && !e.ctrlKey && !e.metaKey) {
        slashPressed.current = true;
        setTimeout(() => {
          slashPressed.current = false;
        }, 500);
        return;
      }

      // / (slash) + letter shortcuts (works globally)
      if (slashPressed.current && !e.ctrlKey && !e.metaKey) {
        const key = e.key.toUpperCase();
        
        switch (key) {
          case "H":
            e.preventDefault();
            slashPressed.current = false;
            router.push("/");
            break;
          case "E":
            e.preventDefault();
            slashPressed.current = false;
            router.push("/experience");
            break;
          case "P":
            e.preventDefault();
            slashPressed.current = false;
            router.push("/projects");
            break;
          case "G":
            e.preventDefault();
            slashPressed.current = false;
            window.open("https://github.com/kishys", "_blank");
            break;
          case "L":
            e.preventDefault();
            slashPressed.current = false;
            window.open("https://www.linkedin.com/in/kishansuhirthan/", "_blank");
            break;
          case "M":
            e.preventDefault();
            slashPressed.current = false;
            window.location.href = "mailto:kishansuhirthan@gmail.com";
            break;
          case "R":
            e.preventDefault();
            slashPressed.current = false;
            openAndDownload("/Kishan%20Suhirthan%20-%20Resume.pdf", "Kishan Suhirthan - Resume.pdf");
            break;
          case "T":
            e.preventDefault();
            slashPressed.current = false;
            toggleTheme();
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router, toggleTheme]);

  return (
    <>
      {children}
      <CommandPaletteWrapper open={commandPaletteOpen} onOpenChange={setCommandPaletteOpen} />
    </>
  );
}

// Lazy load command palette to avoid circular dependencies
function CommandPaletteWrapper({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [CommandPalette, setCommandPalette] = React.useState<React.ComponentType<{ open: boolean; onOpenChange: (open: boolean) => void }> | null>(null);

  React.useEffect(() => {
    import("@/components/command-palette").then((mod) => {
      setCommandPalette(() => mod.default);
    });
  }, []);

  if (!CommandPalette) return null;
  
  return <CommandPalette open={open} onOpenChange={onOpenChange} />;
}
