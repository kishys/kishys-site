import { PostDataProps } from "@/data";
import { HiCalendarDays } from "react-icons/hi2";
import { useState, useEffect } from "react";

interface FeaturedPostProps {
  post: PostDataProps;
}

interface RSSPost {
  title: string;
  pubDate: string;
  link: string;
  description?: string;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const [latestPost, setLatestPost] = useState<RSSPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const rssUrl = "https://medium.com/@kishansuhi/feed";
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          const latestPost = data.items[0];
          setLatestPost(latestPost);
        } else {
          setError('No posts found');
        }
      } catch (err) {
        setError('Failed to fetch latest post');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPost();
  }, []);

  return (
    <div className="p-6 rounded-lg border border-border/50 transition-all hover:border-border/70 bg-gradient-to-br from-background to-muted/20">
      <div className="flex flex-col h-[108px]">
        {/* Header with platform badge and date */}
        <div className="flex items-center justify-between mb-4">
          <div 
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm"
            style={{ backgroundColor: "#6B7280" }}
          >
            <span>Medium</span>
          </div>
          <div className="flex items-center text-muted-foreground text-xs">
            <HiCalendarDays className="w-3 h-3 mr-1" />
            Latest post
          </div>
        </div>

        {/* Post content */}
        <div className="flex-1 flex flex-col justify-center">
          {loading ? (
            <div className="text-muted-foreground text-sm text-center animate-pulse">
              Loading latest post...
            </div>
          ) : error ? (
            <div className="text-muted-foreground text-sm text-center">
              {error}
            </div>
          ) : latestPost ? (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold line-clamp-2 leading-tight text-foreground hover:text-accent transition-colors">
                {latestPost.title}
              </h3>
              <div className="flex items-center justify-between pt-1">
                <p className="text-xs text-muted-foreground font-medium">
                  {new Date(latestPost.pubDate).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
                <a 
                  href={latestPost.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent/80 font-medium hover:underline transition-all"
                >
                  Read more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ) : (
            <div className="text-muted-foreground text-sm text-center">
              No posts available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}