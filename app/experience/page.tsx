import FadeIn from "@/components/fade-in";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Template from "@/components/template";
import Link from "next/link";
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
    href: "drint",
    description: "Developing military software solutions and leading technical initiatives.",
  },
  {
    role: "Software Developer",
    company: "Various Projects",
    date: "2020 - Present",
    href: "drint",
    description:
      "Building modern web applications with React, TypeScript, and cloud technologies.",
  },
  {
    role: "Technical Lead",
    company: "Development Teams",
    date: "2022 - Present",
    href: "drint",
    description:
      "Leading cross-functional teams and mentoring junior developers.",
  },
];

export default function page() {
  return (
    <>
      <Background />
      <Template>
        <Navbar />
        <FadeIn>
          <div className="mb-12 mt-8">
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
          </div>
          <FadeIn className="space-y-20 max-w-screen-lg mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${index}`}
                role={experience.role}
                company={experience.company}
                date={experience.date}
                href={experience.href}
                description={experience.description}
              />
            ))}
          </FadeIn>
        </FadeIn>
        <Footer className="mt-12" />
      </Template>
    </>
  );
}
