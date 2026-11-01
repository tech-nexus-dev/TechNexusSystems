import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import type { ServiceItem } from "../data/servicesData";
import {
  FaCheckDouble,
  FaBrain,
  FaDatabase,
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

interface ServicesPageProps {
  onOpenConsultation: () => void;
  onSelectService?: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenConsultation,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const elem = document.getElementById(id);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }
  }, [location]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "FaCheckDouble":
        return <FaCheckDouble />;
      case "FaBrain":
        return <FaBrain />;
      case "FaDatabase":
        return <FaDatabase />;
      case "FaCloud":
        return <FaCloud />;
      case "FaCode":
        return <FaCode />;
      case "FaShieldAlt":
        return <FaShieldAlt />;
      default:
        return <FaCode />;
    }
  };

  return (
    <div className="services-page">
      {/* Header Banner */}
      <section className="page-header-banner bg-dark-section tech-grid-pattern">
        <div className="container">
          <div className="banner-content" style={{ textAlign: "center" }}>
            <span className="badge-pill badge-cyan">
              <span className="badge-pulse"></span> Comprehensive IT Engineering
            </span>
            <h1 className="banner-title">
              Specialized Solutions Built for <span className="gradient-text-cyan">Speed & Precision</span>
            </h1>
            <p className="banner-subtitle">
              From our premier QA Automation frameworks that eliminate human error to bespoke enterprise AI agents and scalable cloud architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Sections */}
      <section className="services-details-container section-padding">
        <div className="container">
          <div className="services-list-vertical">
            {servicesData.map((service: ServiceItem, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`service-detail-block ${isEven ? "layout-normal" : "layout-reverse"}`}
                >
                  {/* Text Details */}
                  <div className="service-detail-text">
                    <div className="service-meta-row">
                      <span className="service-index">0{index + 1}</span>
                      <span className="badge-pill badge-blue">{service.badge}</span>
                      <span className="service-metrics-tag">{service.metrics}</span>
                    </div>

                    <h2 className="service-detail-title">{service.title}</h2>
                    <p className="service-detail-desc">{service.fullDescription}</p>

                    {/* Features list */}
                    <div className="service-capabilities-box">
                      <h4>Core Engineering Deliverables:</h4>
                      <ul className="capabilities-list">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx}>
                            <FaCheckCircle className="cap-check" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Benefits */}
                    <div className="service-benefits-box">
                      <h4>Key Business Impact:</h4>
                      <ul className="benefits-list">
                        {service.benefits.map((b, bIdx) => (
                          <li key={bIdx}>
                            <span className="benefit-bullet">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div className="service-tools-bar">
                      <span className="tools-label">Technologies Deployed:</span>
                      <div className="tools-chips-row">
                        {service.tools.map((t, tIdx) => (
                          <span key={tIdx} className="service-tool-chip">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="service-cta-row">
                      <button
                        onClick={onOpenConsultation}
                        className="btn btn-primary"
                      >
                        <FaRocket /> <span>Request Proposal for {service.title.split(" ")[0]}</span>
                      </button>
                    </div>
                  </div>

                  {/* Visual Card / Highlights */}
                  <div className="service-detail-card-col">
                    <div className="service-graphic-card">
                      <div className="graphic-icon-large">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <h3 className="graphic-title">{service.title}</h3>
                      <p className="graphic-sub">{service.shortDescription}</p>

                      <div className="graphic-highlight-badge">
                        <div className="highlight-pill">
                          <span className="dot-green"></span> Enterprise Ready SLA
                        </div>
                        <div className="highlight-pill">
                          <span className="dot-green"></span> 100% Code Ownership
                        </div>
                        <div className="highlight-pill">
                          <span className="dot-green"></span> Seamless CI/CD Integration
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="services-bottom-cta bg-dark-section tech-grid-pattern section-padding-sm">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title" style={{ color: "#ffffff" }}>
            Need a Customized Hybrid Engagement?
          </h2>
          <p className="section-subtitle" style={{ maxWidth: 650, margin: "0 auto 24px auto" }}>
            Many of our enterprise clients combine QA Automation with Cloud DevOps or AI Integration. Let's design a tailor-made roadmap for your requirements.
          </p>
          <button onClick={onOpenConsultation} className="btn btn-cyan">
            <FaRocket /> Schedule Custom Architecture Call
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

        .services-list-vertical {
          display: flex;
          flex-direction: column;
          gap: 90px;
        }

        .service-detail-block {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 60px;
          align-items: center;
          padding-bottom: 70px;
          border-bottom: 1px solid #e2e8f0;
        }

        .service-detail-block:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .service-detail-block.layout-reverse {
          grid-template-columns: 0.85fr 1.25fr;
        }
        .service-detail-block.layout-reverse .service-detail-text {
          order: 2;
        }
        .service-detail-block.layout-reverse .service-detail-card-col {
          order: 1;
        }

        .service-meta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .service-index {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          color: #0b57d0;
        }

        .service-metrics-tag {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0284c7;
          background: #e0f2fe;
          border: 1px solid #bae6fd;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .service-detail-title {
          font-size: 2.2rem;
          color: #0f172a;
          margin-bottom: 16px;
          line-height: 1.2;
          font-weight: 800;
        }

        .service-detail-desc {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.75;
          margin-bottom: 26px;
        }

        .service-capabilities-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .service-capabilities-box h4 {
          font-size: 0.95rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .capabilities-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .capabilities-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.5;
        }

        .cap-check {
          color: #0b57d0;
          font-size: 0.95rem;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .service-benefits-box {
          margin-bottom: 26px;
        }

        .service-benefits-box h4 {
          font-size: 0.95rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .benefits-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.5;
        }

        .benefit-bullet {
          color: #0b57d0;
          font-weight: bold;
          font-size: 1.1rem;
          line-height: 1;
        }

        .service-tools-bar {
          margin-bottom: 30px;
        }

        .tools-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .tools-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .service-tool-chip {
          background: #eff6ff;
          color: #0b57d0;
          font-weight: 600;
          font-size: 0.8rem;
          padding: 5px 12px;
          border-radius: 6px;
          border: 1px solid #bfdbfe;
        }

        /* Graphic Card */
        .service-graphic-card {
          background: linear-gradient(135deg, #050a1a 0%, #0b1f4d 100%);
          border-radius: 24px;
          padding: 50px 40px;
          color: #ffffff;
          border: 1px solid rgba(0, 212, 255, 0.25);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .graphic-icon-large {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(11, 87, 208, 0.3) 0%, rgba(0, 212, 255, 0.3) 100%);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          margin: 0 auto 24px auto;
          box-shadow: 0 10px 25px rgba(0, 212, 255, 0.2);
        }

        .graphic-title {
          font-size: 1.6rem;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .graphic-sub {
          font-size: 0.94rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .graphic-highlight-badge {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .highlight-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 0.85rem;
          color: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .dot-green {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
        }

        @media (max-width: 1024px) {
          .service-detail-block,
          .service-detail-block.layout-reverse {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .service-detail-block.layout-reverse .service-detail-text {
            order: 1;
          }
          .service-detail-block.layout-reverse .service-detail-card-col {
            order: 2;
          }
          .banner-title {
            font-size: 2.3rem;
          }
        }
      `}</style>
    </div>
  );
};
