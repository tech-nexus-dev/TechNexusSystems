import { Link } from "react-router-dom";
import {
  FaCheckDouble,
  FaBrain,
  FaDatabase,
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { servicesData } from "../data/servicesData";
import type { ServiceItem } from "../data/servicesData";

interface ServicesGridProps {
  limit?: number;
  showTitle?: boolean;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ limit, showTitle = true }) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

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
    <section className="services-section section-padding">
      <div className="container">
        {showTitle && (
          <div className="section-header">
            <span className="badge-pill badge-blue">
              <span className="badge-pulse"></span> What We Deliver
            </span>
            <h2 className="section-title">
              End-to-End IT Solutions Built for <span className="gradient-text-blue">Speed & Reliability</span>
            </h2>
            <p className="section-subtitle">
              From our flagship automated QA test suites to modern AI engineering and resilient cloud infrastructure, we build technology that scales your enterprise.
            </p>
          </div>
        )}

        <div className="services-cards-grid">
          {displayedServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`service-card ${service.id === "qa-automation" ? "featured-card" : ""}`}
            >
              <div className="service-card-top">
                <div className="service-icon-box">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className={`service-badge ${service.id === "qa-automation" ? "badge-highlight" : ""}`}>
                  {service.badge}
                </span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.shortDescription}</p>

              {/* Metrics pill */}
              <div className="service-metrics-badge">
                {service.metrics}
              </div>

              {/* Feature bullets */}
              <ul className="service-features-list">
                {service.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx}>
                    <FaCheck className="feature-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Tool tags */}
              <div className="service-tools-tags">
                {service.tools.slice(0, 4).map((tool, idx) => (
                  <span key={idx} className="tool-chip">{tool}</span>
                ))}
                {service.tools.length > 4 && (
                  <span className="tool-chip more">+{service.tools.length - 4}</span>
                )}
              </div>

              <div className="service-card-footer">
                <Link to={`/services#${service.id}`} className="service-learn-link">
                  <span>Explore Capabilities</span> <FaArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="services-more-cta">
            <Link to="/services" className="btn btn-outline-dark">
              <span>View All 6 Specialized Services</span> <FaArrowRight />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .services-section {
          background: #ffffff;
          position: relative;
        }

        .services-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .service-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 36px 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.05);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: #0b57d0;
          box-shadow: 0 16px 36px rgba(11, 87, 208, 0.12), 0 4px 12px rgba(0, 0, 0, 0.03);
          background: #ffffff;
        }

        .service-card.featured-card {
          border: 2px solid #0b57d0;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(11, 87, 208, 0.1);
        }

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .service-icon-box {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          background: rgba(11, 87, 208, 0.08);
          color: #0b57d0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(11, 87, 208, 0.2);
        }

        .service-card:hover .service-icon-box {
          background: #0b57d0;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(11, 87, 208, 0.3);
        }

        .service-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 4px 10px;
          border-radius: 6px;
          background: #f1f5f9;
          color: #64748b;
        }

        .service-badge.badge-highlight {
          background: #eff6ff;
          color: #0b57d0;
          font-weight: 800;
          border: 1px solid #bfdbfe;
        }

        .service-card-title {
          font-size: 1.35rem;
          color: #0f172a;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .service-card-desc {
          font-size: 0.94rem;
          color: #64748b;
          line-height: 1.65;
          margin-bottom: 18px;
        }

        .service-metrics-badge {
          font-size: 0.78rem;
          font-weight: 700;
          color: #0369a1;
          background: #e0f2fe;
          padding: 6px 12px;
          border-radius: 6px;
          margin-bottom: 20px;
          border: 1px solid #bae6fd;
        }

        .service-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        .service-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: #334155;
          line-height: 1.45;
        }

        .feature-check-icon {
          color: #10b981;
          font-size: 0.85rem;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .service-tools-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
          margin-top: auto;
        }

        .tool-chip {
          font-size: 0.74rem;
          padding: 4px 8px;
          border-radius: 4px;
          background: #f8fafc;
          color: #475569;
          font-weight: 600;
          border: 1px solid #e2e8f0;
        }

        .tool-chip.more {
          background: #eff6ff;
          color: #0b57d0;
          border-color: #bfdbfe;
        }

        .service-card-footer {
          padding-top: 18px;
          border-top: 1px solid #f1f5f9;
        }

        .service-learn-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.92rem;
          font-weight: 700;
          color: #0b57d0;
        }

        .service-learn-link:hover {
          color: #0742a8;
          gap: 12px;
        }

        .services-more-cta {
          text-align: center;
          margin-top: 50px;
        }

        @media (max-width: 1100px) {
          .services-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
