"use client";

import Image from "next/image";
import { useState } from "react";
import { CertificationDataProps } from "@/data";
import { FiX } from "react-icons/fi";

interface CertificationCardProps {
  cert: CertificationDataProps;
}

export default function CertificationCard({ cert }: CertificationCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setLightboxOpen(true)}
        className="group block w-full text-left rounded-lg border border-border/50 overflow-hidden hover:border-accent/30 transition-all hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent/40"
      >
        {/* Certificate Image */}
        <div className="relative aspect-[4/3] w-full bg-muted/30">
          <Image
            src={cert.certificateImage}
            alt={cert.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        {/* Info Area */}
        <div className="relative p-4">
          {/* Org logo in corner */}
          <div className="absolute right-3 top-3 h-8 w-8 rounded-md overflow-hidden border border-border/30 bg-background">
            <Image
              src={cert.orgLogo}
              alt={cert.organization}
              fill
              className="object-contain p-0.5"
            />
          </div>

          <div className="pr-10 space-y-1">
            <h3 className="font-medium text-sm group-hover:text-accent transition-colors">
              {cert.title}
            </h3>
            <p className="text-xs text-muted-foreground">{cert.organization}</p>
            <p className="text-xs text-muted-foreground/70">{cert.dateObtained}</p>
          </div>
        </div>
      </button>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Close"
          >
            <FiX className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw] w-auto h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={cert.certificateImage}
              alt={cert.title}
              width={1200}
              height={900}
              className="rounded-lg object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}
