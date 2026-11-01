export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    question: "Why is QA Automation the core specialty of Tech Nexus?",
    answer: "Software quality is the #1 bottleneck to release speed. Traditional manual testing is slow, expensive, and prone to human error. By specializing in Playwright, TypeScript, and CI/CD pipelines, we help engineering teams cut their testing cycles from weeks to minutes while ensuring zero critical bugs hit production.",
    category: "QA & Testing"
  },
  {
    question: "How does Tech Nexus integrate AI into our existing software stack?",
    answer: "We offer tailored AI solutions ranging from intelligent workflow bots and custom LLM agent automation to private Retrieval-Augmented Generation (RAG) knowledge systems. We ensure all models conform to strict data privacy guardrails so your intellectual property and customer records never leak.",
    category: "AI & Innovation"
  },
  {
    question: "What engagement models do you support for client projects?",
    answer: "We support three flexible models: 1) Dedicated Engineering Pods (an embedded team of QA, DevOps, or Full-Stack engineers), 2) Milestone-Based Fixed Projects (defined scope, timeline, and deliverables), and 3) Strategic Technology Advisory & Audits.",
    category: "Engagement & Pricing"
  },
  {
    question: "Where is Tech Nexus located and how can we get in touch?",
    answer: "Tech Nexus (A unit of Tech Nexus Systems Private Limited) is headquartered at New Defence Colony, Raebareli Road, Lucknow, 226025. You can contact our solutions team directly via email at contact@technexussystems.com or call +91-8381890248.",
    category: "General"
  },
  {
    question: "How quickly can Tech Nexus spin up an automated test suite or DevOps pipeline?",
    answer: "For most web applications and REST APIs, our initial proof-of-concept automated test suite and CI pipeline can be deployed within 1 to 2 weeks, delivering immediate visibility into your software health.",
    category: "Timelines"
  }
];
