import FadeIn from "@/components/fade-in";
import NavigationMenu from "@/components/navigation-menu";
import Template from "@/components/template";
import { experienceData } from "@/data";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export async function generateStaticParams() {
  return experienceData.map((experience) => {
    return { slug: experience.href || experience.title.toLowerCase().replaceAll(" ", "-") };
  });
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  let experience = experienceData.find((exp) => exp.href === params.slug || exp.title.toLowerCase().replaceAll(" ", "-") === params.slug);
  if (!experience) {
    return;
  }

  let { title, summary: description } = experience;

  return {
    title: `${title} | Kishan Suhirthan`,
    description,
    openGraph: {
      title: `${title} - Kishan Suhirthan`,
      description,
      type: "website",
      url: `https://kishansuhirthan.com/experience/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Kishan Suhirthan`,
      description,
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const navButtons = [{ Icon: FiArrowLeft, label: "Back", href: "/experience" }];
  
  let experience = experienceData.find(
    (exp) => exp.href === params.slug || exp.title.toLowerCase().replaceAll(" ", "-") === params.slug,
  );
  
  if (!experience) return;
  
  const { title, description, tags, date, href } = experience;
  const imageSlug = href || title.toLowerCase().replaceAll(" ", "-");
  
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full animate-background overflow-clip opacity-15 duration-1000 ease-smooth">
        <div className="absolute top-0 h-1/4 w-full bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)),transparent,transparent)] blur-3xl" />
        <div className="absolute -left-20 h-full w-1/4 bg-[radial-gradient(ellipse_at_left,hsl(var(--accent)),transparent,transparent)] blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-3/4 w-5/6 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)),transparent,transparent)] blur-3xl" />
      </div>
      <Template className="flex min-h-dvh max-w-screen-2xl flex-col items-center px-8 md:px-20">
        <FadeIn className="max-w-prose">
          <div className="mb-6">
            <h1 className="mb-2 text-6xl font-semibold">{title}.</h1>
            <p className="text-xl text-accent-foreground">{date}</p>
          </div>
          
          <div className="relative mb-8 aspect-video w-full max-w-full animate-appear place-self-center rounded-lg duration-1000 ease-smooth">
            <div className="absolute -inset-0.5 h-full w-full animate-tilt rounded-lg bg-gradient-to-tr from-accent/50 to-accent-foreground/50 blur-xl" />
            <Image
              src={`/images/experience/${imageSlug}.png`}
              alt={title}
              quality={1}
              fill
              className="absolute h-full w-full scale-110 object-cover blur-3xl saturate-200"
            />
            <Image
              src={`/images/experience/${imageSlug}.png`}
              alt={title}
              fill
              className="pointer-events-none relative rounded-lg object-cover"
            />
          </div>
          
          <FadeIn staggerChildren={0.1} className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <FadeIn
                key={tag}
                className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent-foreground/80"
              >
                {tag}
              </FadeIn>
            ))}
          </FadeIn>
          
          <div className="mb-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              {description}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          
          <NavigationMenu buttons={navButtons} />
        </FadeIn>
      </Template>
    </>
  );
}
