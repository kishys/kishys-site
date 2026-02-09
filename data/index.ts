export type PositionItem = string | { title: string; date?: string };

export type ProjectDataProps = {
  title: string;
  description: string;
  summary: string;
  date: string;
  href?: string;
  tags: string[];
  startDate?: string; // ISO date string e.g. 2024-10-01
  endDate?: string; // ISO date string or 'Present'
  website?: string;
  repo?: string;
  vcard?: string;
  positions?: PositionItem[];
};

// Experiences data - displayed in the first carousel
export const experienceData: ProjectDataProps[] = [
  {
    title: "FRC Team 1325 - Mechanical Member",
    description:
      "Joining this team to deepen my understanding of robotics, collaborate on innovative projects, and gain real-world experience in engineering and creative problem-solving for the 2025–2026 season, with a focus on working in the mechanical subteam and contributing to the design, construction, and testing of key robot subsystems.",
    summary: "Mechanical Subteam at FIRST Robotics Competition Team 1325 Inverse Paradox",
    date: "Sep 2025 - Present",
    href: "team1325",
    startDate: "2025-09-01",
    endDate: "Present",
    website: "https://www.team1325.com/",
    vcard: "https://team1325.kishansuhi.ca/",
    positions: [
      { title: "Mechanical Subteam", date: "Oct 2025 - Present" },
    ],
    tags: [],
  },
  {
    title: "Innovire Logistics Team + Web Developer",
    description:
      "Over 50 youth were impacted through interactive STEM presentations and hands-on workshops designed to foster interest in science and aviation. Weekly collaboration meetings supported effective teamwork and clear communication. An aviation-based educational workshop was developed, and community events were organized in partnership with multiple organizations to enhance outreach and engagement.",
      
    summary:
      "STEM based Non-Profit Presentation, Workshops, and Website Development",
    date: "Oct 2024 - Present",
    href: "innovire",
    startDate: "2024-10-01",
    endDate: "Present",
    website: "https://innovire.ca", // placeholder, replace with real URL
    vcard: "https://kishan-innovire-card.vercel.app", // placeholder vCard link
    positions: [
      { title: "Web Developer", date: "Sep 2025 - Present" },
      { title: "Logistics", date: "Oct 2024 - Present" },
    ],
    tags: [],
  },
  {
    title: "Deputy Executive Director - Dr. Interested",
    description:
      "Leading three key departments including Technology, Finance, and Events, with a focus on organizational leadership, strategic communication, and cross functional collaboration. Committed to fostering innovation, empowering teams, aligning efforts with the organization’s mission, and planning and executing major events to drive engagement, growth, and overall impact for Dr. Interested.",
    summary:
      "Deputy Executive Director | Vice President | Overseeing Technology, Finance, and Events",
    date: "Dec 2024 - Present",
    href: "drint",
    startDate: "2024-12-01",
    endDate: "Present",
    website: "https://www.drinterested.org", // placeholder
    vcard: "https://kishan-drint-card.vercel.app",
    positions: [
      { title: "Deputy Executive Director", date: "Apr 2025 - Present" },
      { title: "Director of Technology", date: "Dec 2024 - Apr 2025" },
    ],
    tags: [],
  },
  {
    title: "RCAirCS Flight Sergeant",
    description:
      "Supports the instruction and supervision of cadets aged 12–16 by assisting officers and instructors in delivering lessons in areas such as aviation, survival skills, and required Performance Objectives (POs). Plays a key role in organizing flight drills, mentoring junior cadets, maintaining uniform standards and deportment, and promoting confidence and professionalism. Acts as a communication link between section leaders and officers to ensure effective training and leadership development.",
    summary:
      "Flight Sergeant | Level 2 Non-Commissioned Officer | Operations and Supply Team",
    date: "Nov 2021 - Present",
    href: "fsgtnco",
    startDate: "2021-11-01",
    endDate: "Present",
    website: "https://www.800squadron.com/",
    vcard: "http://800sqn.kishansuhi.ca/",
    // Example with custom per-position dates: each item can be a string or an object
    positions: [
      { title: "Flight Sergeant", date: "Oct 2025 - Present" },
      { title: "Level 2 Non-Commissioned Officer", date: "Oct 2025 - Present" },
      { title: "Section Commander", date: "Nov 2024 - Present" },
      { title: "Operations and Supply", date: "Nov 2024 - Present" },
      { title: "General Instructor", date: "Sep 2024 - Present" },
      { title: "Air Cadet", date: "Nov 2021 - Present" },
    ],
    tags: [],
  },
  {
    title: "Operations and Logistics | Building Growth",
    description:
      "Operations & Logistics Lead for the EX3 Case Competition, overseeing event coordination, logistics planning, and execution to ensure seamless operations.",
    summary: "Explore3 Case Competition | Medicine, Law, and Finance",
    date: "May 2025 - Present",
    href: "ex3",
    startDate: "2025-05-01",
    endDate: "Present",
    website: "https://explore3.live/",
    vcard: "https://explore3.kishansuhi.ca/",
    positions: [
      { title: "Building Growth", date: "Dec 2025 - Present" },
      { title: "Operations and Logistics", date: "May 2025 - Present" }
    ],
    tags: [],
  },
  {
    title: "Lifeguard & Aquatics Instructor",
    description:
      "Ensures that community pools remain safe, supportive, and enjoyable for swimmers of all ages. Provides swim instruction to all ages, maintains oversight of aquatic safety, and supports community fitness and learning through structured aquatic programs.",
    summary: "City of Mississauga | Recreation & Culture Division",
    date: "Sep 2025 - Present",
    href: "lifeguard",
    startDate: "2025-09-01",
    endDate: "Present",
    website: "https://www.mississauga.ca/",
    vcard: "#",
    positions: [
      { title: "Aquatics Instructor", date: "Sep 2025 - Present" },
    ],
    tags: [],
  },
];

// Projects data - displayed in the second carousel
export const projectData: ProjectDataProps[] = [];

// Posts data types
export type PostDataProps = {
  title: string;
  description: string;
  date: string;
  platform: 'substack' | 'medium' | 'linkedin';
  url: string;
  excerpt: string;
  featured?: boolean;
};

export type PlatformDataProps = {
  name: string;
  platform: 'substack' | 'medium' | 'linkedin';
  title: string;
  description: string;
  url: string;
  logo: string;
  color: string;
};

// Sample posts data - replace with your actual posts
export const postsData: PostDataProps[] = [
  {
    title: "My Latest Blog Post",
    description: "A comprehensive look at my recent thoughts and insights...",
    date: "2025-02-01",
    platform: "substack",
    url: "#",
    excerpt: "This is where I share my latest thoughts on technology, career development, and personal growth. Join me as I explore the intersection of engineering and innovation.",
    featured: true,
  },
];

// Platform information for your blog platforms
export const platformsData: PlatformDataProps[] = [
  {
    name: "Substack",
    platform: "substack",
    title: "Tech & Career Insights",
    description: "Deep dives into technology trends and career development in engineering.",
    url: "https://substack.com/@kishansuhi",
    logo: "/images/write/substack-logo.png",
    color: "#FF6B35",
  },
  {
    name: "Medium",
    platform: "medium",
    title: "Engineering Stories",
    description: "Technical articles and project breakdowns from my engineering journey.",
    url: "https://medium.com/@kishansuhi",
    logo: "/images/write/medium-logo.png",
    color: "#00AB6C",
  },
  {
    name: "LinkedIn",
    platform: "linkedin",
    title: "Professional Updates",
    description: "Career milestones, industry insights, and professional networking content.",
    url: "https://www.linkedin.com/in/kishansuhirthan/recent-activity/all/",
    logo: "/images/write/linkedin-logo.png",
    color: "#0077B5",
  },
];
