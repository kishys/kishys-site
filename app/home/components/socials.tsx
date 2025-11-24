import BentoCard from "@/components/bento-card";
import FadeIn from "@/components/fade-in";
import SocialButton from "@/components/social-button";
import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

const socialButtonsData = [
  {
    icon: <SiGithub />,
    description: "kishansuhirthan",
    href: "https://github.com/kishansuhirthan",
  },
  {
    icon: <SiLinkedin />,
    description: "Kishan Suhirthan",
    href: "https://www.linkedin.com/in/kishan-suhirthan/",
  },
  {
    icon: <SiX />,
    description: "kishansuhirthan",
    href: "https://www.x.com/kishansuhirthan",
  },
  {
    icon: <SiGmail />,
    description: "kishan.suhirthan@gmail.com",
    href: "mailto:kishan.suhirthan@gmail.com",
  },
];

export default function Socials() {
  return (
    <BentoCard className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
      <p className="text-lg leading-snug sm:text-2xl">
        I love meeting new people and I&apos;m always up for a great
        conversation.
        <span className="block text-accent-foreground xl:inline">
          {" "}
          Feel free to reach out and chat.
        </span>
      </p>
      <FadeIn staggerChildren={0.2} className="mt-8 flex gap-8">
        {socialButtonsData.map((button, index) => (
          <SocialButton
            key={index}
            icon={button.icon}
            description={button.description}
            href={button.href}
          />
        ))}
      </FadeIn>
    </BentoCard>
  );
}
