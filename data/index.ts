export type ProjectDataProps = {
  title: string;
  description: string;
  summary: string;
  date: string;
  href?: string;
  tags: string[];
};

// Experiences data - displayed in the first carousel
export const experienceData: ProjectDataProps[] = [
  {
    title: "Innovire Logistics Team + Web Developer",
    description:
      "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced search functionality. Built with modern React patterns and scalable backend architecture.",
    summary:
      "STEM based Non-Profit Presentation, Workshops, and Website Development",
    date: "2024 - Present",
    href: "innovire",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "TypeScript"],
  },
  {
    title: "RCAirCS Flight Sergeant",
    description:
      "Enterprise-grade task management application with real-time collaboration features, role-based access control, and comprehensive analytics dashboard. Implemented using microservices architecture.",
    summary:
      "Level NCO, Operations and Supply, Flight Senior + Section Commander",
    href: "fsgt",
    tags: ["Next.js","PostgreSQL","Redis","WebSocket","TypeScript","TailwindCSS","Docker",],
    date: "2024",
  },
  {
    title: "Lifeguard & Aquatics Instructor",
    description:
      "Automated deployment pipeline and infrastructure management tools for cloud services. Streamlined DevOps workflows with infrastructure as code and continuous integration/deployment.",
    summary: "TBM",
    href: "lifeguard",
    tags: ["AWS","Terraform","Jenkins","Docker","Kubernetes","Python",],
    date: "2023",
  },
  {
    title: "FRC Team 1325 - Mechanical Member",
    description:
      "Interactive data visualization platform with real-time metrics and customizable dashboards. Processes large datasets efficiently with optimized queries and caching strategies.",
    summary: "Working on Mechatronics Subsystem on Playing Robot",
    href: "team1325",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "TypeScript"],
    date: "2023",
  },
  {
    title: "Deputy Executive Director - DrInterested",
    description:
      "Cross-platform mobile application with offline-first architecture and seamless cloud synchronization. Features include push notifications, geolocation services, and secure authentication.",
    summary:
      "Leading key departments to drive organizational success",
    href: "drint",
    tags: ["React Native","Expo","Firebase","TypeScript","Redux"],
    date: "2022",
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
];
