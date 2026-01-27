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
  positions?: string[];
};

// Experiences data - displayed in the first carousel
export const experienceData: ProjectDataProps[] = [
  {
    title: "Innovire Logistics Team + Web Developer",
    description:
      "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced search functionality. Built with modern React patterns and scalable backend architecture.",
    summary:
      "STEM based Non-Profit Presentation, Workshops, and Website Development",
    date: "Oct 2024 - Present",
    href: "innovire",
    startDate: "2024-10-01",
    endDate: "Present",
    website: "https://example.com/innovire", // placeholder, replace with real URL
    vcard: "#", // placeholder vCard link
    positions: ["Web Developer", "Logistics Coordinator"],
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "TypeScript"],
  },
  {
    title: "RCAirCS Flight Sergeant",
    description:
      "Enterprise-grade task management application with real-time collaboration features, role-based access control, and comprehensive analytics dashboard. Implemented using microservices architecture.",
    summary:
      "Level NCO, Operations and Supply, Flight Senior + Section Commander",
    date: "Nov 2021 - Present",
    href: "fsgtnco",
    startDate: "2021-11-01",
    endDate: "Present",
    website: "#",
    vcard: "#",
    positions: ["Flight Sergeant", "Section Commander"],
    tags: ["Next.js","PostgreSQL","Redis","WebSocket","TypeScript","TailwindCSS","Docker"],
  },
  {
    title: "Lifeguard & Aquatics Instructor",
    description:
      "Automated deployment pipeline and infrastructure management tools for cloud services. Streamlined DevOps workflows with infrastructure as code and continuous integration/deployment.",
    summary: "TBM",
    date: "Sep 2025 - Present",
    href: "lifeguard",
    startDate: "2025-09-01",
    endDate: "Present",
    website: "#",
    vcard: "#",
    positions: ["Lifeguard", "Aquatics Instructor"],
    tags: ["AWS","Terraform","Jenkins","Docker","Kubernetes","Python"],
  },
  {
    title: "FRC Team 1325 - Mechanical Member",
    description:
      "Interactive data visualization platform with real-time metrics and customizable dashboards. Processes large datasets efficiently with optimized queries and caching strategies.",
    summary: "Working on Mechatronics Subsystem on Playing Robot",
    date: "Sep 2025 - Present",
    href: "team1325",
    startDate: "2025-09-01",
    endDate: "Present",
    website: "#",
    vcard: "#",
    positions: ["Mechanical Member", "Fabrication"],
    tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "TypeScript"],
  },
  {
    title: "Deputy Executive Director - DrInterested",
    description:
      "Cross-platform mobile application with offline-first architecture and seamless cloud synchronization. Features include push notifications, geolocation services, and secure authentication.",
    summary:
      "Leading key departments to drive organizational success",
    date: "Dec 2024 - Present",
    href: "drint",
    startDate: "2024-12-01",
    endDate: "Present",
    website: "https://example.com/drint", // placeholder
    vcard: "#",
    positions: ["Deputy Executive Director"],
    tags: ["React Native","Expo","Firebase","TypeScript","Redux"],
  },
];

// Projects data - displayed in the second carousel
export const projectData: ProjectDataProps[] = [
  {
    title: "AI Education Chat Bot",
    description:
      "Scalable API gateway with rate limiting, authentication, and request routing. Handles high-traffic loads with efficient caching and load balancing strategies.",
    summary:
      "High-performance API gateway with advanced routing",
    tags: ["Node.js", "Express.js", "Redis", "JWT", "Docker", "Nginx"],
    date: "2024",
  },
  {
    title: "Time Management Website",
    description:
      "End-to-end ML pipeline for data processing, model training, and deployment. Automated workflows for continuous model improvement and monitoring.",
    summary: "Automated ML pipeline with monitoring",
    tags: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    date: "2023",
  },
  {
    title: "Microservices Architecture",
    description:
      "Distributed microservices system with event-driven architecture and message queuing. Implemented service discovery, circuit breakers, and distributed tracing.",
    summary: "Event-driven microservices with distributed tracing",
    tags: [
      "Node.js",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "Prometheus",
    ],
    date: "2023",
  },
  {
    title: "Progressive Web App",
    description:
      "Modern PWA with offline functionality, push notifications, and app-like experience. Optimized for performance with service workers and lazy loading.",
    summary:
      "Offline-first PWA with native app features",
    tags: [
      "React",
      "Service Workers",
      "IndexedDB",
      "TypeScript",
      "Webpack",
    ],
    date: "2022",
  },
  {
    title: "Blockchain Integration",
    description:
      "Decentralized application with smart contract integration and cryptocurrency payment processing. Secure transactions with wallet connectivity.",
    summary:
      "DApp with smart contracts and crypto payments",
    tags: [
      "Solidity",
      "Web3.js",
      "Ethereum",
      "React",
      "TypeScript",
      "MetaMask",
    ],
    date: "2022",
  },
  {
    title: "Integration",
    description:
      "Decentralized application with smart contract integration and cryptocurrency payment processing. Secure transactions with wallet connectivity.",
    summary:
      "DApp with smart contracts and crypto payments",
    tags: [
      "Solidity",
      "Web3.js",
      "Ethereum",
      "React",
      "TypeScript",
      "MetaMask",
    ],
    date: "2022",
  },
];
