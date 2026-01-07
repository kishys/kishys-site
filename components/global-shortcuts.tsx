"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/theme-provider";

export function GlobalShortcutsProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { toggleTheme } = useTheme();
  const arrowUpPressed = React.useRef(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K for command palette
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
        return;
      }

      // Track arrow up press for shortcuts
      if (e.key === "ArrowUp" && !e.repeat && !e.ctrlKey && !e.metaKey) {
        arrowUpPressed.current = true;
        setTimeout(() => {
          arrowUpPressed.current = false;
        }, 500);
        return;
      }

      // Arrow Up + letter shortcuts (works globally)
      if (arrowUpPressed.current && !e.ctrlKey && !e.metaKey) {
        const key = e.key.toUpperCase();
        
        switch (key) {
          case "H":
            e.preventDefault();
            arrowUpPressed.current = false;
            router.push("/");
            break;
          case "E":
            e.preventDefault();
            arrowUpPressed.current = false;
            router.push("/experience");
            break;
          case "P":
            e.preventDefault();
            arrowUpPressed.current = false;
            router.push("/projects");
            break;
          case "G":
            e.preventDefault();
            arrowUpPressed.current = false;
            window.open("https://github.com/kishys", "_blank");
            break;
          case "L":
            e.preventDefault();
            arrowUpPressed.current = false;
            window.open("https://www.linkedin.com/in/kishansuhirthan/", "_blank");
            break;
          case "M":
            e.preventDefault();
            arrowUpPressed.current = false;
            window.location.href = "mailto:kishansuhirthan@gmail.com";
            break;
          case "R":
            e.preventDefault();
            arrowUpPressed.current = false;
            window.open("/resume.pdf", "_blank");
            break;
          case "T":
            e.preventDefault();
            arrowUpPressed.current = false;
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
