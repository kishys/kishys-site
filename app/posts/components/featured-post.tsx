import BentoCard from "@/components/bento-card";
import { PostDataProps } from "@/data";
import { HiArrowUpRight, HiCalendarDays } from "react-icons/hi2";

interface FeaturedPostProps {
  post: PostDataProps;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const platformColor = {
    substack: "#FF6B35",
    medium: "#00AB6C",
    linkedin: "#0077B5"
  };

  const platformName = {
    substack: "Substack",
    medium: "Medium",
    linkedin: "LinkedIn"
  };

  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
      <BentoCard className="p-8 md:p-10 group cursor-pointer hover:scale-[1.02] transition-all duration-300">
        <div className="flex flex-col h-full">
          {/* Header with platform badge */}
          <div className="flex items-center justify-between mb-6">
            <div 
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: platformColor[post.platform] }}
            >
              <span>{platformName[post.platform]}</span>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <HiCalendarDays className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          {/* Featured badge */}
          <div className="inline-flex items-center w-fit px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
            ✨ Featured Post
          </div>

          {/* Title and content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>
          </div>

          {/* Read more button */}
          <div className="flex items-center justify-between pt-6 border-t border-border">
            <div className="text-sm text-muted-foreground">
              Latest post
            </div>
            <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
              <span>Read more</span>
              <HiArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </BentoCard>
    </a>
  );
}