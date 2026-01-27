import FadeIn from "@/components/fade-in";
import { ProjectDataProps } from "@/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ title, summary, website, repo, href }: ProjectDataProps) {
  const slug = href || title.toLowerCase().replaceAll(" ", "-");
  const router = useRouter();
  return (
    <div role="link" tabIndex={0} onClick={() => router.push(`/projects/${slug}`)} onKeyDown={(e) => { if (e.key === 'Enter') router.push(`/projects/${slug}`); }}>
      <FadeIn className="group flex flex-col gap-4 hover:cursor-pointer">
        <div className="group relative aspect-video w-full max-w-screen-sm rounded-sm bg-gradient-to-br from-background to-transparent bg-cover">
          <Image
            quality={1}
            src={`/images/projects/${slug}.png`}
            alt={title}
            fill
            className="absolute inset-0 object-cover opacity-0 blur-3xl saturate-200 transition-opacity duration-300 ease-smooth group-hover:opacity-80"
          />
          <Image
            src={`/images/projects/${slug}.png`}
            alt={title}
            fill
            className="relative aspect-video rounded-sm object-cover"
          />
        </div>

        <div className="flex h-full flex-col justify-center gap-1">
          <span className="flex items-center gap-4">
            <h3 className="font-medium"> {title} </h3>
            <FaArrowRight className="-translate-x-1 scale-95 opacity-0 duration-200 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />
          </span>
          <p className="whitespace-pre-wrap text-muted-foreground">{summary}</p>
          <div className="flex gap-2 mt-3">
            <a
              href={repo || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { if (!repo) e.preventDefault(); e.stopPropagation(); }}
              aria-label={`${title} repo`}
              className="px-2 py-1 rounded-md border border-border/50 hover:border-accent hover:text-accent transition-colors flex items-center"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { if (!website) e.preventDefault(); e.stopPropagation(); }}
              aria-label={`${title} website`}
              className="px-2 py-1 rounded-md border border-border/50 hover:border-accent hover:text-accent transition-colors flex items-center"
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
