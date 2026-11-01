export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  industry: string;
  timeline: string;
  badge: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "fintech-qa-pipeline",
    title: "High-Speed QA Pipeline for Global FinTech Payment Gateway",
    category: "QA Automation",
    client: "NextGen Pay Systems",
    industry: "FinTech & Banking",
    timeline: "6 Weeks",
    badge: "92% Speed Boost",
    challenge: "The client suffered from 40+ hours of manual testing per release cycle. Flaky payment validations frequently caused regression bugs in production, damaging customer trust and delaying scheduled product launches.",
    solution: "Tech Nexus engineered a resilient test automation suite using Playwright and TypeScript with mock banking endpoints, end-to-end payment flow assertions, and parallel execution in GitHub Actions.",
    metrics: [
      { label: "Regression Cycle", value: "7 Mins (down from 40 hrs)" },
      { label: "Test Coverage", value: "98.5% Core Journeys" },
      { label: "Production Bugs", value: "Zero in 14 Releases" },
      { label: "Cost Savings", value: "65% Testing Overhead" }
    ],
    techStack: ["Playwright", "TypeScript", "GitHub Actions", "Docker", "Postman", "Node.js"]
  },
  {
    id: "enterprise-ai-assistant",
    title: "Enterprise AI Copilot & Private RAG Knowledge Engine",
    category: "Artificial Intelligence",
    client: "Global Logistics Corp",
    industry: "Supply Chain & Logistics",
    timeline: "8 Weeks",
    badge: "Sub-Second Ingest",
    challenge: "Customer service agents and warehouse managers wasted hours daily searching through 50,000+ scattered SOP documents, customs manuals, and internal shipment logs, leading to slow dispatch resolutions.",
    solution: "We designed a secure on-premise RAG system using LangChain, vector embeddings, and private LLMs. It features role-based access control, source citation verification, and instant Slack/Teams bot integration.",
    metrics: [
      { label: "Query Resolution", value: "75% Faster" },
      { label: "Indexed Records", value: "50,000+ SOPs" },
      { label: "Query Accuracy", value: "99.1% Verified" },
      { label: "Daily Queries", value: "4,500+ Handled" }
    ],
    techStack: ["Python", "FastAPI", "OpenAI Embeddings", "LangChain", "Pinecone", "React"]
  },
  {
    id: "realtime-telemetry-engine",
    title: "High-Throughput Telemetry Ingestion & Live Analytics Hub",
    category: "Data Engineering",
    client: "FleetSync Solutions",
    industry: "IoT & Connected Fleets",
    timeline: "10 Weeks",
    badge: "2M+ Daily Events",
    challenge: "The client's legacy database froze under the volume of 2+ million daily GPS and sensor updates, causing dashboard latency of over 45 seconds and loss of critical maintenance alerts.",
    solution: "Tech Nexus built an event-driven data streaming architecture with Apache Kafka, MongoDB, and PostgreSQL, coupled with a responsive real-time React dashboard with sub-second websocket refreshes.",
    metrics: [
      { label: "Dashboard Latency", value: "< 400ms" },
      { label: "Events Ingested", value: "2M+ Every Day" },
      { label: "Unexpected Downtime", value: "-40% Reduction" },
      { label: "Fleet Uptime", value: "99.95%" }
    ],
    techStack: ["MongoDB", "Apache Kafka", "PostgreSQL", "Node.js", "React", "Chart.js"]
  },
  {
    id: "cloud-devops-migration",
    title: "Zero-Downtime Multi-Cloud Migration & Kubernetes CI/CD",
    category: "DevOps & Cloud",
    client: "MediCare Direct",
    industry: "HealthTech SaaS",
    timeline: "5 Weeks",
    badge: "99.99% Availability",
    challenge: "A monolithic on-premise server setup experienced frequent crashes during seasonal traffic spikes and required manual midnight deployment windows that frequently rolled back.",
    solution: "We containerized the application into modular Docker services orchestrated with Kubernetes on AWS, fully configured with Terraform Infrastructure as Code and automated rollback health checks.",
    metrics: [
      { label: "Deployment Velocity", value: "From Monthly to Daily" },
      { label: "System Uptime", value: "99.99% Guaranteed" },
      { label: "Cloud Hosting Spend", value: "-35% Cost Cut" },
      { label: "Failover Time", value: "< 15 Seconds" }
    ],
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "Prometheus", "GitHub Actions"]
  }
];
