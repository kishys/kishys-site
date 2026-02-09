"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  FiHome, 
  FiBriefcase, 
  FiFolder, 
  FiPenTool,
  FiSun,
  FiMoon,
  FiMail,
  FiCode,
  FiSearch,
  FiCommand,
  FiFileText
} from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useTheme } from "@/components/theme-provider";
import { openAndDownload } from "@/lib/utils";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type CommandItem = {
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
  action: () => void;
};

type CommandGroup = {
  title: string;
  items: CommandItem[];
};

export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");
  const { theme, toggleTheme } = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const slashPressed = React.useRef(false);

  const commandGroups: CommandGroup[] = React.useMemo(() => [
    {
      title: "Navigation",
      items: [
        {
          icon: <FiHome className="h-4 w-4" />,
          label: "Go to Home",
          shortcut: "H",
          action: () => {
            router.push("/");
            onOpenChange(false);
          },
        },
        {
          icon: <FiBriefcase className="h-4 w-4" />,
          label: "Go to Experience",
          shortcut: "E",
          action: () => {
            router.push("/experience");
            onOpenChange(false);
          },
        },
        {
          icon: <FiFolder className="h-4 w-4" />,
          label: "Go to Projects",
          shortcut: "P",
          action: () => {
            router.push("/projects");
            onOpenChange(false);
          },
        },
        {
          icon: <FiPenTool className="h-4 w-4" />,
          label: "Go to Writing",
          shortcut: "W",
          action: () => {
            router.push("/writing");
            onOpenChange(false);
          },
        },
      ],
    },
    {
      title: "Links",
      items: [
        {
          icon: <SiGithub className="h-4 w-4" />,
          label: "GitHub Profile",
          shortcut: "G",
          action: () => {
            window.open("https://github.com/kishys", "_blank");
            onOpenChange(false);
          },
        },
        {
          icon: <SiLinkedin className="h-4 w-4" />,
          label: "LinkedIn Profile",
          shortcut: "L",
          action: () => {
            window.open("https://www.linkedin.com/in/kishansuhirthan/", "_blank");
            onOpenChange(false);
          },
        },
        {
          icon: <FiMail className="h-4 w-4" />,
          label: "Email",
          shortcut: "M",
          action: () => {
            window.location.href = "mailto:kishansuhirthan@gmail.com";
            onOpenChange(false);
          },
        },
        {
          icon: <FiFileText className="h-4 w-4" />,
          label: "Resume",
          shortcut: "R",
          action: () => {
            openAndDownload("/Kishan%20Suhirthan%20-%20Resume.pdf", "Kishan Suhirthan - Resume.pdf");
            onOpenChange(false);
          },
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          icon: theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />,
          label: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
          shortcut: "T",
          action: () => {
            toggleTheme();
            onOpenChange(false);
          },
        },
      ],
    },
  ], [router, toggleTheme, onOpenChange, theme]);

  // Filter items based on search query
  const filteredGroups = commandGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  // Get flat list of all filtered items for keyboard navigation
  const allItems = filteredGroups.flatMap((group) => group.items);

  // Handle keyboard shortcuts and navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      
      // Track / (slash) press
      if (e.key === "/" && !e.repeat) {
        slashPressed.current = true;
        // Reset after a short delay if no letter key follows
        setTimeout(() => {
          slashPressed.current = false;
        }, 500);
      }

      if (e.key === "/" && !e.ctrlKey && !e.metaKey) {
        // Check if a letter key was pressed right before
        return;
      }
      
      // / (slash) + letter shortcuts
      if (slashPressed.current && !e.ctrlKey && !e.metaKey) {
        const key = e.key.toUpperCase();
        for (const group of commandGroups) {
          for (const item of group.items) {
            if (item.shortcut === key) {
              e.preventDefault();
              slashPressed.current = false;
              item.action();
              return;
            }
          }
        }
      }

      // Arrow navigation
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % allItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
      } else if (e.key === "Enter" && allItems[selectedIndex]) {
        e.preventDefault();
        allItems[selectedIndex].action();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, theme, allItems, selectedIndex, commandGroups]);

  // Focus input when opened and reset state
  React.useEffect(() => {
    if (open) {
      setSearchQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  // Reset selected index when search changes
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  let itemIndex = -1;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-accent/20 bg-card/95 shadow-[0_0_50px_-12px_hsl(var(--accent)/0.3)] backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <DialogPrimitive.Title className="sr-only">Command Palette</DialogPrimitive.Title>
          {/* Decorative gradient line */}
          <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
          
          {/* Home Header */}
          <div className="flex items-center gap-4 border-b border-accent/10 bg-accent/5 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent shadow-inner">
              <FiCommand className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Command Center</h2>
              <p className="text-sm text-muted-foreground">Quick actions & navigation</p>
            </div>
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-accent/10 px-5 py-4">
            <FiSearch className="h-4 w-4 text-accent/60" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>

          {/* Command Groups */}
          <div className="max-h-72 overflow-y-auto p-3">
            {filteredGroups.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No results found for &quot;{searchQuery}&quot;
              </div>
            ) : (
              filteredGroups.map((group) => (
                <div key={group.title} className="mb-3 last:mb-0">
                  <p className="mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-accent/70">
                    {group.title}
                  </p>
                  {group.items.map((item) => {
                    itemIndex++;
                    const isSelected = itemIndex === selectedIndex;
                    return (
                      <button
                        key={item.label}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(itemIndex)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all duration-150",
                          isSelected
                            ? "bg-accent/15 text-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span className={cn(
                            "transition-colors",
                            isSelected ? "text-accent" : ""
                          )}>
                            {item.icon}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        {item.shortcut && (
                          <div className="flex items-center gap-1.5 text-[10px]">
                            <kbd className={cn(
                              "rounded-md px-1.5 py-0.5 font-mono transition-colors",
                              isSelected 
                                ? "bg-accent/20 text-accent" 
                                : "bg-muted text-muted-foreground"
                            )}>
                              /
                            </kbd>
                            <span className="text-muted-foreground/50">+</span>
                            <kbd className={cn(
                              "rounded-md px-1.5 py-0.5 font-mono transition-colors",
                              isSelected 
                                ? "bg-accent/20 text-accent" 
                                : "bg-muted text-muted-foreground"
                            )}>
                              {item.shortcut}
                            </kbd>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-accent/10 bg-accent/5 px-5 py-3 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <kbd className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-muted-foreground">↑↓</kbd>
                <span>navigate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <kbd className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-muted-foreground">↵</kbd>
                <span>select</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-muted-foreground">esc</kbd>
              <span>close</span>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

// Command Palette Provider to handle global keyboard shortcut
export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {children}
      <CommandPalette open={open} onOpenChange={setOpen} />
    </>
  );
}

// Trigger button component - just a visual button, global shortcuts handle the actual opening
export function CommandPaletteTrigger({ className, variant }: { className?: string; variant?: "kbd" | "button" }) {
  const handleClick = () => {
    // Dispatch a keyboard event to trigger the global shortcut handler
    const event = new KeyboardEvent("keydown", {
      key: "k",
      ctrlKey: true,
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  if (variant === "button") {
    return (
      <button
        onClick={handleClick}
        className={cn(
          "flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-foreground hover:shadow-[0_0_20px_-8px_hsl(var(--accent)/0.5)]",
          className
        )}
        aria-label="Open Command Center"
      >
        <FiCommand className="h-4 w-4 text-accent" />
        <span className="font-medium">Command</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-foreground hover:shadow-[0_0_20px_-8px_hsl(var(--accent)/0.5)]",
        className
      )}
    >
      <span className="font-mono text-[10px] text-accent/70">ctrl</span>
      <span className="text-accent/40">+</span>
      <span className="font-mono text-[10px] text-accent/70">K</span>
    </button>
  );
}
