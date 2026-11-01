import { TechRadar } from "../components/TechRadar";
import { FaRocket } from "react-icons/fa";

interface TechStackPageProps {
  onOpenConsultation: () => void;
}

export const TechStackPage: React.FC<TechStackPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="tech-stack-page">
      {/* Header Banner */}
      <section className="page-header-banner bg-dark-section tech-grid-pattern">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge-pill badge-cyan">
            <span className="badge-pulse"></span> Our Tools & Radar
          </span>
          <h1 className="banner-title">
            Enterprise <span className="gradient-text-cyan">Technology Stack</span>
          </h1>
          <p className="banner-subtitle">
            We build and test with modern, industry-standard tools. Explore our interactive tool index across QA Automation, AI & Machine Learning, Cloud DevOps, and Full-Stack Engineering.
          </p>
        </div>
      </section>

      {/* Main Interactive Radar Component */}
      <TechRadar />

      {/* Deep-Dive Rationale Section */}
      <section className="stack-rationale-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-blue">
              <span className="badge-pulse"></span> Architectural Rationale
            </span>
            <h2 className="section-title">Why We Deploy These Exact Standards</h2>
            <p className="section-subtitle">
              We never choose tooling based on hype. Every library, runner, and framework is vetted for enterprise uptime, developer ergonomics, and long-term maintainability.
            </p>
          </div>

          <div className="rationale-grid">
            <div className="rationale-card card-light">
              <div className="rat-header">
                <span className="rat-badge">QA AUTOMATION</span>
                <h3>Why Playwright & TypeScript?</h3>
              </div>
              <p>
                Legacy Selenium grids are prone to flaky wait times and synchronization issues. Playwright provides native out-of-the-box auto-waiting, parallel browser execution, mobile emulation, and network interception. Combined with TypeScript, test suites become strictly typed software products that catch regressions before they occur.
              </p>
            </div>

            <div className="rationale-card card-light">
              <div className="rat-header">
                <span className="rat-badge">AI & LLMs</span>
                <h3>Why Private Embeddings & RAG?</h3>
              </div>
              <p>
                Sending proprietary corporate data to public consumer LLMs poses severe data privacy and compliance risks. We architect private vector embeddings with LangChain and LlamaIndex on dedicated secure infrastructure, guaranteeing that your proprietary trade secrets and customer data never leave your boundary.
              </p>
            </div>

            <div className="rationale-card card-light">
              <div className="rat-header">
                <span className="rat-badge">DEVOPS</span>
                <h3>Why Containers & Kubernetes?</h3>
              </div>
              <p>
                "It works on my machine" is unacceptable in production. Docker containers eliminate environment discrepancies, while Kubernetes ensures self-healing pods, automated rollbacks upon unhealthy health checks, and effortless horizontal scaling during unexpected traffic surges.
              </p>
            </div>
          </div>

          <div className="stack-cta-box">
            <div>
              <h3>Have a legacy test suite or monolithic stack to modernize?</h3>
              <p>We provide zero-friction migration paths from Selenium to Playwright or bare-metal to Docker.</p>
            </div>
            <button onClick={onOpenConsultation} className="btn btn-primary">
              <FaRocket /> Request Stack Evaluation
            </button>
          </div>
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

        .stack-rationale-section {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }

        .rationale-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 50px;
        }

        .rationale-card {
          padding: 36px 30px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }

        .rationale-card:hover {
          border-color: #0b57d0;
          box-shadow: 0 14px 30px rgba(11, 87, 208, 0.1);
          transform: translateY(-4px);
        }

        .rat-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: #0b57d0;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          display: block;
        }

        .rat-header h3 {
          font-size: 1.25rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .rationale-card p {
          color: #475569;
          font-size: 0.94rem;
          line-height: 1.7;
        }

        .stack-cta-box {
          background: linear-gradient(135deg, #0b1532 0%, #0f2766 100%);
          border: 1px solid rgba(11, 87, 208, 0.25);
          border-radius: 18px;
          padding: 36px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 15px 40px rgba(11, 87, 208, 0.15);
        }

        .stack-cta-box h3 {
          font-size: 1.35rem;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .stack-cta-box p {
          color: #cbd5e1;
          font-size: 0.94rem;
        }

        @media (max-width: 1024px) {
          .rationale-grid {
            grid-template-columns: 1fr;
          }
          .stack-cta-box {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};
