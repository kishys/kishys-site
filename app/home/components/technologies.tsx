import BentoCard from "@/components/bento-card";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiAmazon,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

const icons = [
  <SiReact key="SiReact" />,
  <SiTypescript key="SiTypescript" />,
  <SiNextdotjs key="SiNextdotjs" />,
  <SiNodedotjs key="SiNodedotjs" />,
  <SiPython key="SiPython" />,
];

export default function Technologies() {
  return (
    <BentoCard className="relative flex w-full flex-col items-center justify-center md:items-start">
      <h2 className="mb-4 text-xl font-semibold leading-tight sm:text-2xl">
        What I like to use.
      </h2>
      <div className="flex flex-wrap justify-center gap-4 text-3xl text-accent-foreground md:items-start md:text-4xl">
        {icons.map((icon) => {
          return (
            <div key={icon.key} className="group">
              {icon}
              <span className="pointer-events-none absolute -bottom-5 -right-5 text-[150px] text-accent-foreground opacity-0 duration-200 group-hover:opacity-15">
                {icon}
              </span>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
}
