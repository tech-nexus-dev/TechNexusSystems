export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  iconName: string;
  metrics: string;
  features: string[];
  tools: string[];
  benefits: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "qa-automation",
    title: "QA Automation & Test Engineering",
    shortDescription: "We replace slow manual testing with high-speed automated pipelines using Playwright, TypeScript, and CI/CD.",
    fullDescription: "Eliminate human error and deliver bulletproof software releases. Our QA automation frameworks simulate complex end-to-end user journeys, validate REST APIs, stress test performance under peak load, and run seamlessly inside GitHub Actions or GitLab CI. Move your testing cycles from weeks to minutes.",
    badge: "Core Speciality",
    iconName: "FaCheckDouble",
    metrics: "99.8% Test Coverage • 10x Faster Releases",
    features: [
      "End-to-End browser automation with Playwright and TypeScript",
      "API testing & automated contract verification (Postman, REST)",
      "Zero-flakiness continuous test suites in CI/CD pipelines",
      "Cross-browser, responsive layout & mobile emulation runs",
      "Automated regression suites & visual regression comparisons",
      "Load profiling & stress testing with k6 and JMeter"
    ],
    tools: ["Playwright", "TypeScript", "Cypress", "Selenium", "Postman", "Jest", "k6", "GitHub Actions"],
    benefits: [
      "Ship code to production multiple times a day with 100% confidence",
      "Drastically cut QA labor costs while increasing coverage",
      "Detect bugs minutes after commit rather than weeks in production",
      "Provide executive test analytics dashboards for every sprint"
    ]
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence (AI) Solutions",
    shortDescription: "We bring the power of AI to your business, automating repetitive tasks and adding smart autonomous capabilities.",
    fullDescription: "Empower your business with production-grade AI agents, Retrieval-Augmented Generation (RAG) pipelines, and intelligent workflow automation. We integrate modern LLMs securely within your company's private infrastructure, protecting sensitive IP while unlocking unprecedented speed.",
    badge: "High Growth",
    iconName: "FaBrain",
    metrics: "85% Workflow Acceleration • Enterprise Secure",
    features: [
      "Custom Enterprise AI Agents & Autonomous Workflow Bots",
      "Private RAG Knowledge Systems with sub-second document search",
      "Intelligent Document Processing & Data Extraction",
      "Predictive Analytics & Customer Churn Modeling",
      "Fine-tuned models and guardrails for brand-safe responses",
      "Secure on-premise & hybrid cloud LLM architectures"
    ],
    tools: ["OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "Python", "PyTorch", "FastAPI", "Pinecone"],
    benefits: [
      "Automate hours of daily manual analysis and documentation lookup",
      "Deliver 24/7 hyper-personalized customer interaction",
      "Keep enterprise knowledge private and protected with local embeddings",
      "Turn unstructured records and PDF archives into live searchable insights"
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Analytics",
    shortDescription: "We build clean pipelines and professional dashboards so you can see exactly how your business is performing in real-time.",
    fullDescription: "Raw data is only valuable when transformed into accurate, real-time intelligence. Tech Nexus designs fault-tolerant ETL/ELT pipelines, streaming architectures, and unified data warehouses that feed actionable executive dashboards.",
    badge: "Enterprise Grade",
    iconName: "FaDatabase",
    metrics: "Sub-Second Query Latency • Multi-Source Sync",
    features: [
      "Scalable ETL / ELT automated data pipelines",
      "Real-time event streaming and telemetry data ingest",
      "Unified modern Data Warehouse setup (Snowflake, BigQuery)",
      "Custom live executive dashboards and KPI visualizations",
      "Automated data quality checks, schema evolution & governance",
      "Database tuning, indexing and high-throughput query optimization"
    ],
    tools: ["MongoDB", "PostgreSQL", "Apache Kafka", "Snowflake", "dbt", "Apache Airflow", "BigQuery", "PowerBI"],
    benefits: [
      "Unify scattered data silos across sales, finance, and engineering",
      "Make data-driven decisions based on real-time numbers, not guesswork",
      "Ensure SOC2/GDPR compliance with automated audit trails",
      "Scale from megabytes to petabytes without pipeline failure"
    ]
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Infrastructure",
    shortDescription: "We automate setup and deployment, connecting code to cloud so your apps stay online, update smoothly, and scale effortlessly.",
    fullDescription: "Say goodbye to deployment firefighting. We architect robust Infrastructure-as-Code (IaC), containerized microservices using Docker & Kubernetes, multi-stage automated pipelines, and comprehensive 24/7 observability.",
    badge: "High Reliability",
    iconName: "FaCloud",
    metrics: "99.99% Uptime SLA • Zero-Downtime Deploys",
    features: [
      "Zero-downtime CI/CD automated deployment pipelines",
      "Containerization & microservice orchestration with Docker & Kubernetes",
      "Multi-cloud architectures on AWS, Azure, and Google Cloud",
      "Infrastructure-as-Code provisioning using Terraform & Ansible",
      "Comprehensive APM monitoring, distributed tracing & alerting",
      "Disaster recovery planning, automated backups & failover"
    ],
    tools: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana"],
    benefits: [
      "Eliminate 'it works on my machine' with identical environments",
      "Save 30%+ on cloud billing through automated right-sizing",
      "Instant rollback in seconds if an unexpected anomaly occurs",
      "Keep systems available during sudden viral traffic surges"
    ]
  },
  {
    id: "fullstack-engineering",
    title: "Full-Stack Web & Software Engineering",
    shortDescription: "Architecting modern, scalable web applications, REST APIs, and enterprise systems using the modern MERN & TypeScript stack.",
    fullDescription: "From dynamic interactive web applications to robust backend microservices, Tech Nexus engineers clean, modular, and maintainable software designed for high user traffic and zero friction.",
    badge: "Modern Stack",
    iconName: "FaCode",
    metrics: "Lighthouse 95+ Scores • Scalable Microservices",
    features: [
      "Modern React & TypeScript frontends with responsive UI/UX",
      "High-throughput Node.js & Express RESTful APIs",
      "Modular state management and real-time WebSockets",
      "Secure authentication with JWT, OAuth2, and RBAC permissions",
      "Clean architecture with comprehensive test suites",
      "Progressive Web Apps (PWAs) & cross-platform optimizations"
    ],
    tools: ["React", "TypeScript", "Node.js", "Express", "Vite", "Tailwind CSS", "REST APIs", "Redis"],
    benefits: [
      "Fast page load times that improve SEO and customer conversions",
      "Type-safe codebases that minimize production runtime errors",
      "Modular components that enable rapid feature additions",
      "Future-proof architecture that grows with your organization"
    ]
  },
  {
    id: "cybersecurity-compliance",
    title: "Security, Audits & Compliance",
    shortDescription: "End-to-end security hardening, automated vulnerability scans, and code compliance audits to safeguard digital assets.",
    fullDescription: "Security cannot be an afterthought. We build automated vulnerability analysis, secret detection, API rate limiting, and regulatory compliance standards directly into your delivery pipelines.",
    badge: "Defense In Depth",
    iconName: "FaShieldAlt",
    metrics: "Zero Critical Vulnerabilities • ISO/SOC2 Ready",
    features: [
      "Automated Static & Dynamic Security Testing (SAST/DAST)",
      "OWASP Top 10 vulnerabilities protection and mitigation",
      "Automated dependency scanning & CVE alerts (Snyk, Trivy)",
      "Role-based access control, encryption in-transit and at-rest",
      "API penetration testing and rate-limiting hardening",
      "Compliance audit readiness (SOC2, ISO 27001, GDPR)"
    ],
    tools: ["SonarQube", "Snyk", "OWASP ZAP", "Trivy", "Vault", "Cloudflare", "JWT", "Bcrypt"],
    benefits: [
      "Protect your customer records and business reputation",
      "Prevent catastrophic ransomware and unauthorized database breaches",
      "Pass client enterprise vendor security questionnaires with ease",
      "Automated alerts before vulnerable packages reach production"
    ]
  }
];
