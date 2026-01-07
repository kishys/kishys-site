"use client";
import React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import BentoCard from "@/components/bento-card";
import { projectData } from "@/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./project-card";

export default function ProjectsCarousel2() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  
  return (
    <Carousel
      opts={{
        loop: true,
        dragFree: true,
      }}
      plugins={[plugin.current]}
      className="group/carousel"
    >
      <CarouselContent>
        {projectData.map((project, index) => {
          const slug = project.title.toLowerCase().replaceAll(" ", "-");
          return (
            <CarouselItem
              key={index}
              className="group aspect-video basis-full sm:basis-1/2 lg:basis-1/2"
            >
              <Link href={`/projects/${slug}`}>
                <BentoCard className="!p-0">
                  <ProjectCard {...project} />
                </BentoCard>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-2 hidden md:flex opacity-0 transition-opacity group-hover/carousel:opacity-100" />
      <CarouselNext className="right-2 hidden md:flex opacity-0 transition-opacity group-hover/carousel:opacity-100" />
    </Carousel>
  );
}
