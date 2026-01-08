import BentoCard from "@/components/bento-card";
import Image from "next/image";

export default function Hero() {
  return (
    <BentoCard className="group grid text-center md:text-left">
      <div className="place-self-center flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Animated Logo */}
        <div className="relative w-28 h-28 md:w-32 md:h-32">
          {/* Pulsing glow effect */}
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl animate-pulse"></div>
          
          {/* Outer rotating border (clockwise) */}
          <div className="absolute -inset-2 rounded-full">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: '3s' }} viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="6"
                strokeDasharray="100 200"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>
          
          {/* Inner rotating border (counter-clockwise) */}
          <div className="absolute -inset-1 rounded-full">
            <svg className="w-full h-full" style={{ animation: 'spin 4s linear infinite reverse' }} viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="56"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="3"
                strokeDasharray="80 220"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          
          {/* Logo with hover scale */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-background border-2 border-accent/30 transition-transform duration-300 hover:scale-110">
            <Image
              src="/images/K-Logo.png"
              alt="Kishan Logo"
              fill
              className="object-cover object-center scale-125"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="font-semibold leading-tight tracking-tighter">
          <span className="mb-2 inline-block text-4xl sm:text-5xl md:text-6xl">
            Hey, I&apos;m Kishan
          </span>
          <br />
          <span className="bg-gradient-to-b from-accent to-accent/20 bg-clip-text text-2xl text-transparent transition-all duration-500 sm:text-3xl md:text-4xl md:group-hover:bg-accent/80">
            Building Something New
          </span>
        </h1>
      </div>
    </BentoCard>
  );
}
