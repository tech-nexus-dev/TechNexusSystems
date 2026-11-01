import { useState } from "react";
import { Link } from "react-router-dom";
import { caseStudiesData } from "../data/caseStudiesData";
import type { CaseStudy } from "../data/caseStudiesData";
import { FaArrowRight, FaCheckCircle, FaTimes } from "react-icons/fa";

interface CaseStudiesSectionProps {
  limit?: number;
  showTitle?: boolean;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  limit,
  showTitle = true,
}) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "QA Automation", "Artificial Intelligence", "Data Engineering", "DevOps & Cloud"];

  const filteredStudies = caseStudiesData.filter((item) => {
    if (activeFilter === "All") return true;
    return item.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
           activeFilter.toLowerCase().includes(item.category.toLowerCase());
  });

  const displayedStudies = limit ? filteredStudies.slice(0, limit) : filteredStudies;

  return (
    <section className="case-studies-section section-padding">
      <div className="container">
        {showTitle && (
          <div className="section-header">
            <span className="badge-pill badge-blue">
              <span className="badge-pulse"></span> Proven Results
            </span>
            <h2 className="section-title">
              Featured Case Studies & <span className="gradient-text-blue">Impact</span>
            </h2>
            <p className="section-subtitle">
              Discover how our engineering solutions solved complex testing bottlenecks, automated operations, and powered high-velocity growth.
            </p>
          </div>
        )}

        {/* Filter Pills */}
        <div className="case-filter-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`case-tab-btn ${activeFilter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="cases-grid">
          {displayedStudies.map((study) => (
            <div key={study.id} className="case-card card-light">
              <div className="case-card-header">
                <span className="case-category">{study.category}</span>
                <span className="case-badge-pill">{study.badge}</span>
              </div>

              <h3 className="case-card-title">{study.title}</h3>
              <p className="case-challenge"><strong>Challenge:</strong> {study.challenge.slice(0, 140)}...</p>

              {/* Metric Highlights */}
              <div className="case-metrics-grid">
                {study.metrics.slice(0, 2).map((m, idx) => (
                  <div key={idx} className="metric-box">
                    <span className="metric-val">{m.value}</span>
                    <span className="metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="case-tech-chips">
                {study.techStack.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-chip">{tech}</span>
                ))}
              </div>

              <div className="case-card-footer">
                <button
                  onClick={() => setSelectedCase(study)}
                  className="case-view-btn"
                >
                  <span>View Full Architecture & Results</span> <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="case-more-cta">
            <Link to="/case-studies" className="btn btn-outline-dark">
              <span>View All Client Case Studies</span> <FaArrowRight />
            </Link>
          </div>
        )}

        {/* Modal for Full Case Study Inspection */}
        {selectedCase && (
          <div className="case-modal-overlay" onClick={() => setSelectedCase(null)}>
            <div className="case-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="case-modal-header">
                <div>
                  <span className="badge-pill badge-blue" style={{ marginBottom: 8 }}>
                    {selectedCase.category} • {selectedCase.industry}
                  </span>
                  <h3 className="modal-title">{selectedCase.title}</h3>
                </div>
                <button className="modal-close-btn" onClick={() => setSelectedCase(null)}>
                  <FaTimes size={18} />
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4 className="modal-section-title">The Challenge</h4>
                  <p>{selectedCase.challenge}</p>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Tech Nexus Engineering Solution</h4>
                  <p>{selectedCase.solution}</p>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Key Measurable Outcomes</h4>
                  <div className="modal-metrics-grid">
                    {selectedCase.metrics.map((m, idx) => (
                      <div key={idx} className="modal-metric-box">
                        <span className="modal-metric-val">{m.value}</span>
                        <span className="modal-metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Technology & Infrastructure Deployed</h4>
                  <div className="modal-tech-list">
                    {selectedCase.techStack.map((t, idx) => (
                      <span key={idx} className="modal-tech-chip">
                        <FaCheckCircle className="chip-check" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <Link to="/contact" className="btn btn-primary" onClick={() => setSelectedCase(null)}>
                  <span>Request Similar Solution</span> <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .case-studies-section {
          background: #ffffff;
        }

        .case-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .case-tab-btn {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #475569;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 8px 20px;
          border-radius: 9999px;
          transition: all 0.25s ease;
        }

        .case-tab-btn:hover {
          color: #0b57d0;
          border-color: #0b57d0;
          background: #e0f2fe;
        }

        .case-tab-btn.active {
          background: #0b57d0;
          color: #ffffff;
          border-color: #0b57d0;
          font-weight: 700;
          box-shadow: 0 4px 18px rgba(11, 87, 208, 0.25);
        }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .case-card {
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
        }

        .case-card:hover {
          border-color: #0b57d0;
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(11, 87, 208, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .case-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .case-category {
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #0b57d0;
        }

        .case-badge-pill {
          background: #e0f2fe;
          color: #0284c7;
          border: 1px solid #bae6fd;
          font-size: 0.74rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 6px;
        }

        .case-card-title {
          font-size: 1.35rem;
          color: #0f172a;
          margin-bottom: 12px;
          line-height: 1.35;
          font-weight: 700;
        }

        .case-challenge {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 22px;
        }

        .case-metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 22px;
        }

        .metric-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 12px 14px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }

        .metric-val {
          font-family: var(--font-heading);
          font-weight: 800;
          color: #0b57d0;
          font-size: 1.15rem;
          line-height: 1.1;
        }

        .metric-lbl {
          font-size: 0.74rem;
          color: #64748b;
          margin-top: 4px;
        }

        .case-tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
          margin-top: auto;
        }

        .tech-chip {
          font-size: 0.74rem;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 4px 8px;
          border-radius: 4px;
          color: #334155;
          font-weight: 600;
        }

        .case-card-footer {
          padding-top: 18px;
          border-top: 1px solid #f1f5f9;
        }

        .case-view-btn {
          background: none;
          color: #0b57d0;
          font-weight: 700;
          font-size: 0.92rem;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .case-view-btn:hover {
          color: #053b94;
          gap: 12px;
        }

        .case-more-cta {
          text-align: center;
          margin-top: 48px;
        }

        /* Modal Styles */
        .case-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .case-modal-content {
          background: #ffffff;
          border-radius: 20px;
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
        }

        .case-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 28px 32px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .modal-title {
          font-size: 1.45rem;
          color: #0f172a;
          margin-top: 4px;
          font-weight: 700;
        }

        .modal-close-btn {
          background: #e2e8f0;
          color: #475569;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .modal-close-btn:hover {
          background: #cbd5e1;
          color: #0f172a;
        }

        .modal-body {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          background: #ffffff;
        }

        .modal-section-title {
          font-size: 1.1rem;
          color: #0f172a;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .modal-section p {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .modal-metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 10px;
        }

        .modal-metric-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 14px 18px;
        }

        .modal-metric-val {
          font-family: var(--font-heading);
          font-weight: 800;
          color: #0b57d0;
          font-size: 1.25rem;
          display: block;
        }

        .modal-metric-lbl {
          font-size: 0.78rem;
          color: #64748b;
        }

        .modal-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .modal-tech-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.82rem;
          color: #334155;
          font-weight: 600;
        }

        .chip-check {
          color: #0b57d0;
        }

        .modal-footer {
          padding: 20px 32px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: flex-end;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        @media (max-width: 900px) {
          .cases-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
