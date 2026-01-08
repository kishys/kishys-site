import BentoCard from "@/components/bento-card";
import Image from "next/image";

export default function Hero() {
  return (
    <BentoCard className="group grid text-center md:text-left">
      <div className="place-self-center flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Animated Logo */}
        <div className="relative">
          {/* Rotating border */}
          <div className="absolute inset-0 rounded-full">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: '3s' }} viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="56"
                fill="none"
                stroke="url(#blueGradient)"
                strokeWidth="4"
                strokeDasharray="50 300"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                  <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Logo */}
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-background border-2 border-blue-500/20">
            <Image
              src="/images/K-Logo.png"
              alt="Kishan Logo"
              fill
              className="object-cover p-2"
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
