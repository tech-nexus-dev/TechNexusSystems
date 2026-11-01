import { Link } from "react-router-dom";
import { TechNexusLogo3D } from "../components/TechNexusLogo3D";
import {
  FaShieldAlt,
  FaRocket,
  FaAward,
  FaUsers,
  FaArrowRight,
  FaVideo,
} from "react-icons/fa";

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage = ({ onOpenConsultation }: AboutPageProps) => {
  const values = [
    {
      title: "Precision & Zero Human Error",
      desc: "We believe human testers should focus on exploratory creativity, while machines handle repetitive regression validation with zero fatigue.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Speed as a Feature",
      desc: "Slow testing holds engineering teams hostage. Our automation scripts compress weeks of test cycles into minutes, turning deployments into a routine non-event.",
      icon: <FaRocket />,
    },
    {
      title: "Modern Engineering Standards",
      desc: "No fragile hacks or untyped spaghetti. Every test script, AI agent, and microservice is built with strict TypeScript and maintainable architectures.",
      icon: <FaAward />,
    },
    {
      title: "Partnership, Not Just Outsourcing",
      desc: "We embed seamlessly into your sprint cycles, conduct code reviews, mentor your internal engineers, and deliver full ownership of the test assets.",
      icon: <FaUsers />,
    },
  ];

  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <section className="page-header-banner bg-dark-section tech-grid-pattern">
        <div className="container">
          <div className="banner-content">
            <span className="badge-pill badge-cyan">
              <span className="badge-pulse"></span> Our Identity & Story
            </span>
            <h1 className="banner-title">
              Engineering the Future of <span className="gradient-text-cyan">Software Reliability</span>
            </h1>
            <p className="banner-subtitle">
              Tech Nexus (A unit of Tech Nexus Systems Private Limited) is a modern IT solutions firm dedicated to helping businesses scale through precision engineering and automated quality.
            </p>
          </div>
        </div>
      </section>

      {/* Origin & Core Philosophy */}
      <section className="about-narrative-section section-padding">
        <div className="container">
          <div className="narrative-grid">
            <div className="narrative-text">
              <span className="badge-pill badge-blue">
                <span className="badge-pulse"></span> Who We Are
              </span>
              <h2 className="section-title">
                Driven by Quality, Powered by <span className="gradient-text-blue">Automation</span>
              </h2>
              <p className="lead-paragraph">
                We are a modern IT solutions firm dedicated to helping businesses scale through precision and technology. While we offer a full suite of digital services—including <strong>Data Engineering</strong>, <strong>AI Integration</strong>, and <strong>DevOps</strong>—our core expertise lies in <strong>QA Automation</strong>.
              </p>
              <p className="body-paragraph">
                In today's fast-paced tech ecosystem, the greatest risk to growth isn't a lack of ideas—it's production regressions that damage customer trust. Traditional manual testing is slow, expensive, and inevitably misses edge cases under tight deadlines.
              </p>
              <p className="body-paragraph">
                Using industry-leading tools like Playwright, TypeScript, and Dockerized CI/CD runners, we transform sluggish testing into high-speed automated pipelines. Our mission is simple: to eliminate bugs, reduce release times, and ensure your software is always deployment-ready.
              </p>

              <div className="narrative-metrics">
                <div className="metric-chip">
                  <span className="metric-num">99.8%</span>
                  <span className="metric-tag">Test Pass Reliability</span>
                </div>
                <div className="metric-chip">
                  <span className="metric-num">10x</span>
                  <span className="metric-tag">Release Velocity</span>
                </div>
                <div className="metric-chip">
                  <span className="metric-num">2.4M+</span>
                  <span className="metric-tag">Automated Test Runs</span>
                </div>
              </div>
            </div>

            <div className="narrative-card-col">
              <div className="company-info-card">
                <div className="card-top-header">
                  <div style={{ background: "#050a1a", border: "1px solid rgba(0, 212, 255, 0.35)", borderRadius: 14, padding: 4, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 20px rgba(0, 212, 255, 0.25)" }}>
                    <TechNexusLogo3D variant="icon" size={60} />
                  </div>
                  <div>
                    <h3>Tech Nexus Systems</h3>
                    <span>Private Limited</span>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-label">Headquarters</span>
                  <span className="spec-val">Lucknow, Uttar Pradesh, India</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Core Specialty</span>
                  <span className="spec-val">QA Automation & Test Engineering</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Key Stack</span>
                  <span className="spec-val">Playwright, TypeScript, Python, React, AWS</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Direct Contact</span>
                  <span className="spec-val">contact@technexussystems.com</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Phone Support</span>
                  <span className="spec-val">+91-8381890248</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">3D Identity Studio</span>
                  <span className="spec-val">
                    <a href="/tech-nexus.html" target="_blank" rel="noreferrer" style={{ color: "#00d4ff", fontWeight: 700 }}>
                      <FaVideo style={{ marginRight: 4 }} /> Open 3D Logo Video Studio
                    </a>
                  </span>
                </div>

                <button onClick={onOpenConsultation} className="btn btn-primary" style={{ width: "100%", marginTop: 24 }}>
                  <FaRocket /> Request Architectural Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-blue">
              <span className="badge-pulse"></span> Guiding Principles
            </span>
            <h2 className="section-title">The Values That Shape Our Engineering</h2>
            <p className="section-subtitle">
              Every line of code we ship and every test suite we architect is governed by strict core standards.
            </p>
          </div>

          <div className="values-grid">
            {values.map((v, idx) => (
              <div key={idx} className="value-card card-light">
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="about-cta-section section-padding bg-dark-section tech-grid-pattern">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge-pill badge-cyan">
            <span className="badge-pulse"></span> Work With Us
          </span>
          <h2 className="section-title" style={{ maxWidth: 700, margin: "14px auto" }}>
            Ready to Accelerate Your Engineering Roadmap?
          </h2>
          <p className="section-subtitle" style={{ maxWidth: 600, margin: "0 auto 32px auto" }}>
            Speak directly with our technical leadership to explore how our automated QA and enterprise solutions can transform your release cadence.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <button onClick={onOpenConsultation} className="btn btn-cyan">
              <FaRocket /> Book Free Consultation
            </button>
            <Link to="/contact" className="btn btn-secondary">
              <span>View Contact Details</span> <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .page-header-banner {
          padding: 80px 0 90px 0;
          text-align: center;
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

        .narrative-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .lead-paragraph {
          font-size: 1.15rem;
          color: #1e293b;
          font-weight: 500;
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .body-paragraph {
          font-size: 0.98rem;
          color: #475569;
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .narrative-metrics {
          display: flex;
          gap: 24px;
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
        }

        .metric-chip {
          display: flex;
          flex-direction: column;
        }

        .metric-num {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: #0b57d0;
          line-height: 1.1;
        }

        .metric-tag {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 600;
          margin-top: 4px;
        }

        /* Company Card */
        .company-info-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px 32px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }

        .card-top-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 1px solid #f1f5f9;
        }

        .logo-hex-small {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0b57d0, #0088ff);
          color: #ffffff;
          font-weight: 800;
          font-family: var(--font-heading);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .card-top-header h3 {
          font-size: 1.25rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .card-top-header span {
          font-size: 0.76rem;
          color: #0b57d0;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.9rem;
        }

        .spec-label {
          color: #64748b;
          font-weight: 500;
        }

        .spec-val {
          color: #0f172a;
          font-weight: 600;
          text-align: right;
        }

        /* Values Grid */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .value-card {
          padding: 36px 32px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          border-color: #0b57d0;
          box-shadow: 0 14px 30px rgba(11, 87, 208, 0.1);
          transform: translateY(-4px);
        }

        .value-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(11, 87, 208, 0.08);
          color: #0b57d0;
          border: 1px solid rgba(11, 87, 208, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 18px;
        }

        .value-title {
          font-size: 1.3rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .value-desc {
          color: #475569;
          font-size: 0.94rem;
          line-height: 1.7;
        }

        @media (max-width: 992px) {
          .narrative-grid {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
          .banner-title {
            font-size: 2.3rem;
          }
        }
      `}</style>
    </div>
  );
};
