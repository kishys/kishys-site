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
    summary: "Mechanical Subteam",
    date: "Sep 2025 - Present",
    href: "team1325",
    startDate: "2025-09-01",
    endDate: "Present",
    website: "#",
    vcard: "#",
    positions: [
      { title: "Mechanical Subteam", date: "Oct 2025 - Present" },
    ],
    tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "TypeScript"],
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
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "TypeScript"],
  },
  {
    title: "Deputy Executive Director - DrInterested",
    description:
      "Leading three key departments including Technology, Finance, and Events, with a focus on organizational leadership, strategic communication, and cross functional collaboration. Committed to fostering innovation, empowering teams, aligning efforts with the organization’s mission, and planning and executing major events to drive engagement, growth, and overall impact for Dr. Interested.",
    summary:
      "Deputy Executive Director | Vice President",
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
    tags: ["React Native","Expo","Firebase","TypeScript","Redux"],
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
    website: "#",
    vcard: "#",
    // Example with custom per-position dates: each item can be a string or an object
    positions: [
      { title: "Flight Sergeant", date: "Oct 2025 - Present" },
      { title: "Section Commander", date: "Nov 2024 - Present" },
      { title: "Operations and Supply", date: "Nov 2024 - Present" },
      { title: "Air Cadet", date: "Nov 2021 - Present" },
    ],
    tags: ["Next.js","PostgreSQL","Redis","WebSocket","TypeScript","TailwindCSS","Docker"],
  },
  {
    title: "Lifeguard & Aquatics Instructor",
    description:
      "Ensures that community pools remain safe, supportive, and enjoyable for swimmers of all ages. Provides swim instruction to all ages, maintains oversight of aquatic safety, and supports community fitness and learning through structured aquatic programs.",
    summary: "City of Mississauga",
    date: "Sep 2025 - Present",
    href: "lifeguard",
    startDate: "2025-09-01",
    endDate: "Present",
    website: "#",
    vcard: "#",
    positions: [
      { title: "Aquatics Instructor", date: "Sep 2025 - Present" },
    ],
    tags: ["AWS","Terraform","Jenkins","Docker","Kubernetes","Python"],
  },
];

// Projects data - displayed in the second carousel
export const projectData: ProjectDataProps[] = [];
