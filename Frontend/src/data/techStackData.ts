export interface TechTool {
  name: string;
  category: "qa" | "ai" | "cloud" | "fullstack" | "data";
  role: string;
  badge: string;
  description: string;
  level: "Mastery" | "Core Standard" | "Enterprise Ready";
}

export const techCategories = [
  { id: "all", label: "All Technologies" },
  { id: "qa", label: "QA & Automation" },
  { id: "ai", label: "AI & Intelligence" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "fullstack", label: "Full-Stack Web" },
  { id: "data", label: "Data Engineering" },
];

export const techStackData: TechTool[] = [
  {
    name: "Playwright",
    category: "qa",
    role: "E2E & Cross-Browser Automation",
    badge: "Core Framework",
    description: "High-speed, rock-solid automated browser testing across Chromium, Firefox, and WebKit.",
    level: "Mastery"
  },
  {
    name: "TypeScript",
    category: "qa",
    role: "Strictly-Typed Test Scripts & Code",
    badge: "Language Standard",
    description: "Ensures type safety, autocompletion, and zero runtime surprises in test frameworks and apps.",
    level: "Mastery"
  },
  {
    name: "Cypress",
    category: "qa",
    role: "Component & Frontend Testing",
    badge: "Interactive Testing",
    description: "Fast in-browser test debugging with real-time DOM snapshots and time-travel inspection.",
    level: "Mastery"
  },
  {
    name: "Selenium",
    category: "qa",
    role: "Legacy & Enterprise Grid Testing",
    badge: "Enterprise Standard",
    description: "Distributed testing grid support for large-scale enterprise legacy web application validation.",
    level: "Core Standard"
  },
  {
    name: "Postman & Newman",
    category: "qa",
    role: "Automated API Contract Verification",
    badge: "API Quality",
    description: "Continuous API test collections with assertions, schema validation, and CI/CD CLI execution.",
    level: "Mastery"
  },
  {
    name: "OpenAI & Anthropic Claude",
    category: "ai",
    role: "Enterprise LLM Intelligence",
    badge: "Foundation Models",
    description: "Custom prompting, reasoning agents, and function-calling integration for automated enterprise workflows.",
    level: "Mastery"
  },
  {
    name: "LangChain & LlamaIndex",
    category: "ai",
    role: "Agentic Framework & RAG Pipelines",
    badge: "Orchestration",
    description: "Connecting private databases and document repositories to LLMs with vector search and embeddings.",
    level: "Mastery"
  },
  {
    name: "Python & FastAPI",
    category: "ai",
    role: "AI Model Microservices",
    badge: "High Throughput",
    description: "Asynchronous high-performance APIs for model serving, inference, and batch predictions.",
    level: "Mastery"
  },
  {
    name: "Docker & Containers",
    category: "cloud",
    role: "Standardized Reproducible Environments",
    badge: "Virtualization",
    description: "Lightweight containerized application packaging ensuring identical behavior from local dev to cloud.",
    level: "Mastery"
  },
  {
    name: "Kubernetes (K8s)",
    category: "cloud",
    role: "Microservice Container Orchestration",
    badge: "Cloud Native",
    description: "Automated container self-healing, rolling zero-downtime updates, and dynamic horizontal pod autoscaling.",
    level: "Core Standard"
  },
  {
    name: "AWS & Google Cloud",
    category: "cloud",
    role: "Enterprise Scalable Infrastructure",
    badge: "Cloud Hosting",
    description: "Serverless lambda, ECS, S3, RDS, VPC network segmentation, and multi-region high availability.",
    level: "Enterprise Ready"
  },
  {
    name: "GitHub Actions & GitLab CI",
    category: "cloud",
    role: "Continuous Integration & Delivery",
    badge: "CI/CD Pipelines",
    description: "Automated build, lint, test, security scan, and push on every commit with immediate slack alerts.",
    level: "Mastery"
  },
  {
    name: "React & Next.js",
    category: "fullstack",
    role: "Dynamic User Interfaces & SPAs",
    badge: "Frontend Core",
    description: "Fast, component-driven user interfaces with modern hooks, server-side rendering, and smooth interactions.",
    level: "Mastery"
  },
  {
    name: "Node.js & Express",
    category: "fullstack",
    role: "High-Concurrency Backend APIs",
    badge: "Backend Core",
    description: "Event-driven asynchronous REST API microservices with robust middleware and security hardening.",
    level: "Mastery"
  },
  {
    name: "MongoDB & Mongoose",
    category: "fullstack",
    role: "Flexible NoSQL Document Storage",
    badge: "Data Layer",
    description: "High-speed document storage for dynamic schemas, content management, and fast indexing.",
    level: "Mastery"
  },
  {
    name: "PostgreSQL",
    category: "data",
    role: "Relational Enterprise SQL Database",
    badge: "Relational ACID",
    description: "Robust transactional consistency, JSONB queries, spatial extensions, and advanced relational analytics.",
    level: "Mastery"
  },
  {
    name: "Apache Kafka",
    category: "data",
    role: "Distributed Real-Time Event Streaming",
    badge: "Event Ingest",
    description: "High-throughput messaging pipeline handling millions of events with zero message loss.",
    level: "Core Standard"
  },
  {
    name: "Snowflake & BigQuery",
    category: "data",
    role: "Cloud Data Warehousing & Analytics",
    badge: "Warehouse Engine",
    description: "Columnar petabyte-scale data storage empowering deep BI queries and instant executive reporting.",
    level: "Enterprise Ready"
  }
];
