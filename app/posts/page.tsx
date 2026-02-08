import { postsData, platformsData } from "@/data";
import Background from "./components/background";
import FeaturedPost from "./components/featured-post";
import PlatformCard from "./components/platform-card";

export default function PostsPage() {
  const featuredPost = postsData.find(post => post.featured) || postsData[0];

  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent to-muted-foreground bg-clip-text text-transparent mb-4">
              My Posts
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my thoughts, insights, and experiences across different platforms
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="max-w-7xl mx-auto">
            {/* Featured Post - Large Display */}
            {featuredPost && (
              <div className="mb-8">
                <FeaturedPost post={featuredPost} />
              </div>
            )}

            {/* Platform Cards - 3 boxes underneath */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platformsData.map((platform) => (
                <PlatformCard key={platform.platform} platform={platform} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}