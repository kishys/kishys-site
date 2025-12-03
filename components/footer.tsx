"use client";
import React from "react";
import BentoCard from "@/components/bento-card";
import Link from "next/link";
import FlipLink from "./flip-link";

export default function Footer({ ...props }: React.HTMLProps<HTMLDivElement>) {
  return (
    <footer {...props} className="w-full space-y-2.5">
      <BentoCard className="flex flex-col items-center justify-between gap-4 !px-6 !py-4 sm:flex-row">
        <p className="font-medium">Kishan Suhirthan</p>
        <FlipLink
          href="https://innovire.ca/"
          className="text-accent-foreground hover:text-accent"
        >
          innovire.ca
        </FlipLink>
      </BentoCard>
    </footer>
  );
}
