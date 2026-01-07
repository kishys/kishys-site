"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi2";
import { FiMenu, FiX } from "react-icons/fi";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

interface MobileMenuLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  target?: string;
}

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const isDetailPage =
    (pathname.startsWith("/projects/") && pathname !== "/projects") ||
    (pathname.startsWith("/experience/") && pathname !== "/experience");

  const isMainSubPage = pathname === "/projects" || pathname === "/experience";

  const menuLinks: MobileMenuLink[] = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "Experiences", href: "/experience", icon: "💼" },
    { label: "Projects", href: "/projects", icon: "📁" },
    { label: "GitHub", href: "https://github.com/kishys", icon: <SiGithub /> },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kishansuhirthan/",
      icon: <SiLinkedin />,
    },
    { label: "Gmail", href: "mailto:kishansuhirthan@gmail.com", icon: <SiGmail /> },
    { label: "Resume", href: "/resume.pdf", icon: <HiDocumentText /> },
  ];

  return (
    <SheetPrimitive.Root open={open} onOpenChange={setOpen}>
      <SheetPrimitive.Trigger asChild>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-muted-foreground transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_20px_-8px_hsl(var(--accent)/0.5)] md:hidden"
          aria-label="Open menu"
        >
          <FiMenu className="h-5 w-5" />
        </button>
      </SheetPrimitive.Trigger>

      <SheetPrimitive.Portal>
        <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <SheetPrimitive.Content className="fixed right-0 top-0 z-50 h-full w-full max-w-xs border-l border-accent/20 bg-background/95 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-accent/10 px-6 py-4">
              <h2 className="font-semibold text-foreground">Menu</h2>
              <SheetPrimitive.Close asChild>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 hover:border-accent/40 hover:text-accent transition-all"
                  aria-label="Close menu"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </SheetPrimitive.Close>
            </div>

            {/* Menu items */}
            <nav className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-2">
                {menuLinks.map((link) => {
                  const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto");
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => !isExternal && setOpen(false)}
                      className="flex items-center gap-3 rounded-lg border border-accent/10 bg-accent/5 px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                    >
                      <span className="text-lg flex-shrink-0">
                        {typeof link.icon === "string" ? link.icon : link.icon}
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Footer info */}
            <div className="border-t border-accent/10 px-6 py-4 text-center">
              <p className="text-xs text-muted-foreground">
                {isDetailPage || isMainSubPage ? "" : "Kishan Suhirthan"}
              </p>
            </div>
          </div>
        </SheetPrimitive.Content>
      </SheetPrimitive.Portal>
    </SheetPrimitive.Root>
  );
}
