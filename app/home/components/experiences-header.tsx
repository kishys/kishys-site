import BentoCard from "@/components/bento-card";
import Link from "next/link";

export default function ExperiencesHeader() {
  const pattern = [
    { text: "Experiences", className: "array font-light text-accent-foreground" },
    { text: "Experiences", className: "array font-light" },
  ];
  const times = 3;
  const items = Array.from({ length: times }, () => pattern).flat();

  return (
    <Link href="/experience" className="block group">
      <BentoCard className="!px-8 !py-6 transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-[0_0_30px_-10px_hsl(var(--accent)/0.3)]">
        <div className="inline-flex w-full overflow-hidden text-5xl font-semibold tracking-widest [mask-image:_linear-gradient(to_right,transparent_0,_black_24px,_black_calc(100%-24px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_144px,_black_calc(100%-144px),transparent_100%)]">
          <ul className="flex animate-infinite-scroll items-center justify-start [&_li]:mx-4">
            {items.map((item, index) => (
              <li key={index}>
                <span className={item.className}>{item.text}</span>
              </li>
            ))}
          </ul>
          <ul
            className="flex animate-infinite-scroll items-center justify-start [&_li]:mx-4"
            aria-hidden="true"
          >
            {items.map((item, index) => (
              <li key={index}>
                <span className={item.className}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </BentoCard>
    </Link>
  );
}
