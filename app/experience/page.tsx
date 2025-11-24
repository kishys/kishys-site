import FadeIn from "@/components/fade-in";
import NavigationMenu from "@/components/navigation-menu";
import Template from "@/components/template";
import Link from "next/link";
import { HiMiniFolder, HiMiniHome } from "react-icons/hi2";
import Background from "./components/background";
import ExperienceCard from "./components/experience-card";

export const metadata = {
  title: "Experience | Kishan Suhirthan",
  description: "Kishan Suhirthan - Experience",
};

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Royal Canadian Air Force",
    date: "2021 - Present",
    href: "rcaf",
    description: "Developing military software solutions and leading technical initiatives.",
  },
  {
    role: "Software Developer",
    company: "Various Projects",
    date: "2020 - Present",
    href: "freelance",
    description:
      "Building modern web applications with React, TypeScript, and cloud technologies.",
  },
  {
    role: "Technical Lead",
    company: "Development Teams",
    date: "2022 - Present",
    href: "leadership",
    description:
      "Leading cross-functional teams and mentoring junior developers.",
  },
];

export default function page() {
  const navigationMenuButtons = [
    { Icon: HiMiniHome, label: "Home", href: "/" },
    { Icon: HiMiniFolder, label: "Projects", href: "/projects" },
  ];
  return (
    <>
      <Background />
      <Template className="max-w-screen-lg">
        <FadeIn>
          <div className="mb-12">
            <h1 className="mb-8 text-5xl font-semibold">Experience.</h1>
            <p className="mb-4 font-medium text-muted-foreground">
              You can learn more about me on{" "}
              <span className="font-semibold italic underline underline-offset-2">
                <Link
                  target="_blank"
                  href="https://linkedin.com/in/kishan-suhirthan"
                >
                  Linkedin
                </Link>
              </span>
            </p>
            <NavigationMenu buttons={navigationMenuButtons} />
          </div>
          <FadeIn className="space-y-20">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.href}
                role={experience.role}
                company={experience.company}
                date={experience.date}
                href={experience.href}
                description={experience.description}
              />
            ))}
          </FadeIn>
        </FadeIn>
      </Template>
    </>
  );
}
