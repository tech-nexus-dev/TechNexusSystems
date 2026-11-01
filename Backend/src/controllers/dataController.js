// Dynamic Tech Nexus services & portfolio data

const servicesData = [
  {
    id: "qa-automation",
    title: "QA Automation & Test Engineering",
    shortDescription: "We replace slow manual testing with high-speed automated pipelines using Playwright, TypeScript, and CI/CD integrations.",
    fullDescription: "Ensure bulletproof release cycles. Our QA automation frameworks simulate real-world user flows, stress-test microservices, and catch bugs before production. We shift quality testing left in your development cycle to eliminate expensive regressions and shorten delivery cycles from months to days.",
    icon: "FaVial",
    badge: "Core Speciality",
    metrics: "99.8% Test Coverage • 10x Faster Releases",
    features: [
      "End-to-End Test Automation with Playwright & Cypress",
      "API Testing & Automated Contract Validation (Postman, REST)",
      "Zero-Human Error Continuous Testing in GitHub Actions & GitLab",
      "Cross-Browser, Responsive & Mobile Emulation Testing",
      "Load, Stress & Performance Bottleneck Profiling"
    ],
    tools: ["Playwright", "TypeScript", "Cypress", "Selenium", "Jest", "Postman", "k6", "GitHub Actions"]
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence (AI) Solutions",
    shortDescription: "We bring modern AI & agentic automation to your business, automating repetitive tasks and adding intelligent features.",
    fullDescription: "From generative AI agents and intelligent document processing to predictive intelligence, we empower companies with tailored AI architectures. We integrate robust LLMs and machine learning models securely within your enterprise workflows.",
    icon: "FaBrain",
    badge: "High Growth",
    metrics: "85% Workflow Acceleration • Enterprise Secure",
    features: [
      "Custom Enterprise AI Agents & Workflow Automation",
      "LLM Integration, Prompt Engineering & RAG Pipelines",
      "Computer Vision & Document Intelligence",
      "Predictive Analytics & Recommendation Systems",
      "Secure On-Premise & Cloud LLM Deployment"
    ],
    tools: ["OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "Python", "PyTorch", "HuggingFace", "FastAPI"]
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Analytics",
    shortDescription: "We build clean pipelines and professional dashboards so you can see exactly how your business is performing in real-time.",
    fullDescription: "Data is useless if siloed or inaccurate. Tech Nexus engineers design reliable data pipelines, real-time streaming architectures, and high-performance data warehouses that convert raw data into actionable business intelligence.",
    icon: "FaDatabase",
    badge: "Enterprise Grade",
    metrics: "Sub-Second Query Latency • Multi-Source Sync",
    features: [
      "Automated ETL / ELT Data Pipelines",
      "Real-Time Analytics & Executive KPI Dashboards",
      "Data Lake & Warehouse Architecture (Snowflake, BigQuery)",
      "Data Cleansing, Deduplication & Validation Frameworks",
      "Compliance, Governance & Access Security"
    ],
    tools: ["PostgreSQL", "MongoDB", "Apache Kafka", "Snowflake", "dbt", "Airflow", "BigQuery", "PowerBI"]
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Infrastructure",
    shortDescription: "We automate setup and deployment, connecting code to the cloud to ensure high uptime, smooth updates, and effortless scaling.",
    fullDescription: "Achieve true continuous delivery and rock-solid infrastructure. We implement Infrastructure as Code (IaC), container orchestration with Docker & Kubernetes, multi-environment pipelines, and 24/7 observability.",
    icon: "FaCloud",
    badge: "High Reliability",
    metrics: "99.99% Uptime SLA • Zero-Downtime Deploys",
    features: [
      "Zero-Downtime CI/CD Automated Pipelines",
      "Containerization & Orchestration with Docker & Kubernetes",
      "Multi-Cloud Architecture (AWS, Azure, Google Cloud)",
      "Infrastructure as Code (Terraform, Ansible)",
      "Real-time Monitoring, Alerting & APM (Datadog, Prometheus)"
    ],
    tools: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana"]
  },
  {
    id: "fullstack-engineering",
    title: "Full-Stack Web & Software Engineering",
    shortDescription: "Architecting modern, scalable web applications, REST APIs, and enterprise systems using the modern MERN and TypeScript stack.",
    fullDescription: "We engineer resilient digital solutions from high-converting customer-facing frontends to scalable microservice backends. Our codebases are strictly typed, modular, documented, and built to scale alongside your organization.",
    icon: "FaCode",
    badge: "Modern Stack",
    metrics: "Lighthouse 95+ Scores • Modular Microservices",
    features: [
      "Modern React, Next.js & TypeScript User Interfaces",
      "High-Performance Express, Node.js & Go Backend APIs",
      "Enterprise Multi-Tenant SaaS Architecture",
      "State Management, Real-time WebSockets & GraphQL",
      "Strict Code Reviews & Automated Static Analysis"
    ],
    tools: ["React", "TypeScript", "Node.js", "Express", "Vite", "Next.js", "Tailwind CSS", "Redis"]
  },
  {
    id: "cybersecurity-compliance",
    title: "Security, Audits & Quality Compliance",
    shortDescription: "End-to-end security hardening, automated vulnerability scans, and code compliance audits to safeguard digital assets.",
    fullDescription: "Quality is incomplete without security. We combine automated penetration checks, OWASP top 10 compliance audits, code secret scanning, and automated dependency patching to keep your intellectual property impervious to threats.",
    icon: "FaShieldAlt",
    badge: "Defense In Depth",
    metrics: "Zero Critical Vulnerabilities • ISO/SOC2 Ready",
    features: [
      "Static & Dynamic Application Security Testing (SAST/DAST)",
      "OWASP Top 10 Automated Mitigation",
      "API Security, Rate Limiting & OAuth2 / JWT Hardening",
      "Cloud IAM Role Minimization & Least-Privilege Audits",
      "Automated Dependency Vulnerability Scanning"
    ],
    tools: ["SonarQube", "Snyk", "OWASP ZAP", "Trivy", "Vault", "Cloudflare", "JWT", "Bcrypt"]
  }
];

const caseStudiesData = [
  {
    id: "fintech-qa-pipeline",
    title: "End-to-End QA Pipeline for FinTech Payment Engine",
    category: "QA Automation",
    client: "Global FinTech Provider",
    summary: "Replaced 40+ hours of manual testing per release with an automated Playwright & TypeScript suite running in under 7 minutes.",
    results: [
      "92% reduction in QA regression cycle duration",
      "Zero critical production bugs across 14 consecutive releases",
      "Automated 280+ test cases across Web & Payment Gateways"
    ],
    technologies: ["Playwright", "TypeScript", "GitHub Actions", "Docker", "Postman"]
  },
  {
    id: "enterprise-ai-assistant",
    title: "Intelligent Knowledge Agent & RAG Pipeline",
    category: "AI Integration",
    client: "Enterprise Logistics Firm",
    summary: "Built an internal AI copilot enabling support teams to query thousands of SOP documents and fleet logs with sub-second accuracy.",
    results: [
      "75% faster resolution time for Tier-2 customer inquiries",
      "Real-time indexing of 50,000+ internal documents",
      "Role-based access control with audited responses"
    ],
    technologies: ["Python", "FastAPI", "OpenAI Embeddings", "LangChain", "Vector DB"]
  },
  {
    id: "data-pipeline-dashboard",
    title: "Real-Time Telemetry & Executive Analytics Engine",
    category: "Data Engineering",
    client: "IoT Industrial Systems",
    summary: "Engineered a high-throughput streaming pipeline processing over 2 million events daily with sub-second dashboard rendering.",
    results: [
      "Live operational visibility across 12 distributed facilities",
      "40% decrease in unexpected equipment downtime",
      "Automated daily reconciliation and KPI reporting"
    ],
    technologies: ["Node.js", "MongoDB", "Kafka", "PostgreSQL", "React", "Chart.js"]
  },
  {
    id: "cloud-devops-migration",
    title: "Zero-Downtime Cloud Migration & Kubernetes Setup",
    category: "DevOps & Cloud",
    client: "HealthTech SaaS Platform",
    summary: "Migrated legacy monolith to containerized microservices on AWS with automated CI/CD and self-healing auto-scaling.",
    results: [
      "99.99% system availability achieved",
      "Deployments increased from once a month to multiple daily deploys",
      "35% cloud hosting cost optimization"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Prometheus"]
  }
];

const statsData = {
  projectsDelivered: "150+",
  automatedTestRuns: "2.4M+",
  satisfactionRate: "99.4%",
  activeClients: "45+",
  engineerExperts: "30+",
  uptimeRecord: "99.99%"
};

exports.getServices = (req, res) => {
  res.json({
    success: true,
    data: servicesData
  });
};

exports.getCaseStudies = (req, res) => {
  res.json({
    success: true,
    data: caseStudiesData
  });
};

exports.getStats = (req, res) => {
  res.json({
    success: true,
    data: statsData
  });
};
