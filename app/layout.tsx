import "@/app/globals.css";
import NoiseSVG from "@/components/noise-svg";
import { ThemeProvider } from "@/components/theme-provider";
import { GlobalShortcutsProvider } from "@/components/global-shortcuts";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const array = localFont({
  src: "./fonts/array.woff2",
  variable: "--font-array",
});

export const metadata: Metadata = {
  title: "Kishan Suhirthan",
  description:
    "Full-stack software engineer with expertise in modern web technologies. Experienced in building scalable applications and leading development teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-dvh ${inter.className} ${array.variable}`}>
        <ThemeProvider defaultTheme="dark">
          <GlobalShortcutsProvider>
            <NoiseSVG />
            {children}
          </GlobalShortcutsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
