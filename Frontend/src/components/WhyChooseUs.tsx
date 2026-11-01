import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaBolt,
  FaCogs,
  FaArrowRight,
  FaSearch,
  FaDraftingCompass,
  FaVial,
  FaCloudUploadAlt,
} from "react-icons/fa";

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <FaShieldAlt />,
      title: "Higher Quality",
      highlight: "Eliminate Human Error",
      desc: "By automating manual test repetitions with Playwright and TypeScript, we catch subtle edge cases and regressions before they ever impact live users.",
    },
    {
      icon: <FaCogs />,
      title: "Modern Tech Standards",
      highlight: "Latest Industry Standards",
      desc: "We build on modern, enterprise-approved foundations: strict TypeScript typing, Dockerized microservices, modern LLM reasoning agents, and cloud-native CI/CD.",
    },
    {
      icon: <FaBolt />,
      title: "Faster Releases",
      highlight: "Move from Months to Days",
      desc: "Shorten deployment cycles dramatically. What used to require a 3-week manual test moratorium now finishes in minutes through automated test runners.",
    },
  ];

  const steps = [
    {
      num: "01",
      icon: <FaSearch />,
      title: "Discovery & Needs Audit",
      desc: "We analyze your existing workflows, identify code test gaps, bottleneck points, and architect a customized implementation roadmap.",
    },
    {
      num: "02",
      icon: <FaDraftingCompass />,
      title: "Architecture & Framework Setup",
      desc: "Selecting the optimal toolchain (Playwright, Docker, React, FastAPI, or Kafka) and writing modular, strictly-typed scaffolding.",
    },
    {
      num: "03",
      icon: <FaVial />,
      title: "Automated Suite & CI Pipeline",
      desc: "Developing comprehensive test coverage, integrating autonomous AI agents or data pipelines, and wiring direct triggers into GitHub Actions.",
    },
    {
      num: "04",
      icon: <FaCloudUploadAlt />,
      title: "Continuous Deploy & Monitoring",
      desc: "Deploying with zero downtime, configuring live telemetry health dashboards, and handing over comprehensive documentation to your team.",
    },
  ];

  return (
    <section className="why-choose-section section-padding">
      <div className="container">
        {/* Top 3 Core Pillars */}
        <div className="section-header">
          <span className="badge-pill badge-blue">
            <span className="badge-pulse"></span> Our Engineering Edge
          </span>
          <h2 className="section-title">
            Why High-Growth Companies Choose <span className="gradient-text-blue">Tech Nexus</span>
          </h2>
          <p className="section-subtitle">
            We are a modern IT solutions firm dedicated to helping businesses scale through precision, automation, and modern standards.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card card-light">
              <div className="pillar-icon-box">{pillar.icon}</div>
              <span className="pillar-tag">{pillar.highlight}</span>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* 4-Step Agile Delivery Framework */}
        <div className="process-container">
          <div className="process-header">
            <span className="badge-pill badge-blue">
              <span className="badge-pulse"></span> How We Work
            </span>
            <h3 className="process-title">Our 4-Stage Precision Delivery Framework</h3>
            <p className="process-subtitle">
              A transparent, predictable engineering lifecycle from initial codebase audit to production deployment.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card">
                <div className="step-num-badge">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="why-bottom-card">
          <div className="bottom-card-content">
            <h3>Have a release deadline approaching?</h3>
            <p>Our automation engineers can integrate into your sprint cycles in under 48 hours.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            <span>Speak With an Engineer</span> <FaArrowRight />
          </Link>
        </div>
      </div>

      <style>{`
        .why-choose-section {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 90px;
        }

        .pillar-card {
          padding: 40px 32px;
          border-radius: 18px;
          text-align: left;
          position: relative;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pillar-card:hover {
          transform: translateY(-8px);
          border-color: #0b57d0;
          box-shadow: 0 16px 36px rgba(11, 87, 208, 0.1), 0 4px 12px rgba(0, 0, 0, 0.02);
          background: #ffffff;
        }

        .pillar-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(11, 87, 208, 0.08);
          color: #0b57d0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 20px;
          border: 1px solid rgba(11, 87, 208, 0.2);
        }

        .pillar-tag {
          font-size: 0.76rem;
          font-weight: 700;
          color: #0b57d0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 8px;
        }

        .pillar-title {
          font-size: 1.45rem;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .pillar-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.7;
        }

        /* 4-Step Process */
        .process-container {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          border-radius: 24px;
          padding: 60px 48px;
          margin-bottom: 50px;
        }

        .process-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 50px auto;
        }

        .process-title {
          font-size: 2rem;
          color: #0f172a;
          margin-14px 0 10px 0;
        }

        .process-subtitle {
          color: #64748b;
          font-size: 1rem;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }

        .step-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px 24px;
          position: relative;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-6px);
          border-color: #0b57d0;
          box-shadow: 0 12px 28px rgba(11, 87, 208, 0.08);
          background: #ffffff;
        }

        .step-num-badge {
          position: absolute;
          top: 18px;
          right: 20px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: rgba(11, 87, 208, 0.2);
        }

        .step-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(11, 87, 208, 0.08);
          color: #0b57d0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-bottom: 20px;
          border: 1px solid rgba(11, 87, 208, 0.2);
        }

        .step-title {
          font-size: 1.15rem;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .step-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* Bottom banner */
        .why-bottom-card {
          background: linear-gradient(135deg, #0b1532 0%, #0f2766 100%);
          border-radius: 18px;
          padding: 36px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(11, 87, 208, 0.25);
          box-shadow: 0 15px 40px rgba(11, 87, 208, 0.15);
        }

        .bottom-card-content h3 {
          color: #ffffff;
          font-size: 1.4rem;
          margin-bottom: 6px;
        }

        .bottom-card-content p {
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .why-bottom-card {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .process-container {
            padding: 40px 20px;
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
