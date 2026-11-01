import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FaRocket } from "react-icons/fa";

interface CaseStudiesPageProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onOpenConsultation }) => {
  const benchmarks = [
    {
      metric: "92% Reduction",
      area: "QA Regression Duration",
      detail: "Replaced 40 hours of manual testing per release with a 7-minute automated Playwright pipeline.",
    },
    {
      metric: "Zero Escaped Bugs",
      area: "Production Release Quality",
      detail: "Maintained zero critical customer-facing production errors across 14 consecutive weekly sprints.",
    },
    {
      metric: "75% Faster Lookup",
      area: "Enterprise AI Retrieval",
      detail: "Reduced support technician resolution times by implementing a private RAG copilot over 50k documents.",
    },
    {
      metric: "99.99% Availability",
      area: "Zero-Downtime DevOps",
      detail: "Migrated legacy monolith to Kubernetes on AWS with automated rollback and self-healing pods.",
    },
  ];

  return (
    <div className="case-studies-page">
      {/* Header Banner */}
      <section className="page-header-banner bg-dark-section tech-grid-pattern">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge-pill badge-cyan">
            <span className="badge-pulse"></span> Track Record of Excellence
          </span>
          <h1 className="banner-title">
            Case Studies & <span className="gradient-text-cyan">Measured Results</span>
          </h1>
          <p className="banner-subtitle">
            Explore how Tech Nexus engineers transformed slow, manual pipelines into high-speed automated environments for high-growth tech companies.
          </p>
        </div>
      </section>

      {/* Benchmarks Ribbon */}
      <section className="benchmarks-section section-padding-sm" style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="benchmarks-grid">
            {benchmarks.map((b, idx) => (
              <div key={idx} className="benchmark-card card-light">
                <span className="bm-metric">{b.metric}</span>
                <h4 className="bm-area">{b.area}</h4>
                <p className="bm-detail">{b.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Filterable Case Studies Showcase */}
      <CaseStudiesSection showTitle={false} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Box */}
      <section className="case-cta-section bg-dark-section tech-grid-pattern section-padding-sm">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title" style={{ color: "#0f172a" }}>
            Ready to Build Your Own Success Story?
          </h2>
          <p className="section-subtitle" style={{ maxWidth: 650, margin: "0 auto 24px auto" }}>
            Our solutions team is ready to analyze your existing testing, AI, or cloud infrastructure and present a tailored plan.
          </p>
          <button onClick={onOpenConsultation} className="btn btn-cyan">
            <FaRocket /> Request Free Technical Consultation
          </button>
        </div>
      </section>

      <style>{`
        .page-header-banner {
          padding: 80px 0 90px 0;
        }

        .banner-title {
          font-size: 3rem;
          color: #0f172a;
          margin: 16px 0 18px 0;
          font-weight: 800;
        }

        .banner-subtitle {
          font-size: 1.15rem;
          color: #475569;
          max-width: 750px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .benchmarks-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .benchmark-card {
          padding: 28px 22px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }

        .benchmark-card:hover {
          border-color: #0b57d0;
          box-shadow: 0 12px 28px rgba(11, 87, 208, 0.1);
          transform: translateY(-4px);
        }

        .bm-metric {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: #0b57d0;
          display: block;
          margin-bottom: 4px;
        }

        .bm-area {
          font-size: 0.98rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .bm-detail {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .benchmarks-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .benchmarks-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
