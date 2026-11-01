import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Tech Nexus transformed our QA process completely. We had over 35 hours of manual testing before every single sprint deployment. Their Playwright and TypeScript automated suite brought that down to 7 minutes with zero flaky tests.",
      author: "Vikram Malhotra",
      role: "VP of Engineering",
      company: "Apex Payments FinTech",
      metric: "92% QA Time Reduction",
      avatarBg: "#0b57d0",
    },
    {
      quote:
        "The AI Knowledge Copilot built by Tech Nexus indexed over 40,000 regulatory documents and internal logs. Our operations and compliance teams now get instant, cited answers in seconds rather than digging through PDF archives.",
      author: "Elena Rostova",
      role: "Director of Technology",
      company: "Logix Global Freight",
      metric: "75% Faster Resolution",
      avatarBg: "#7928ca",
    },
    {
      quote:
        "Moving our health platform to a containerized Kubernetes architecture on AWS with Tech Nexus was seamless. Zero downtime during the entire migration, and our cloud infrastructure bills dropped by 35%.",
      author: "Arjun Singhal",
      role: "Co-Founder & CTO",
      company: "HealthPulse Diagnostics",
      metric: "99.99% Uptime Achieved",
      avatarBg: "#10b981",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill badge-blue">
            <span className="badge-pulse"></span> Client Endorsements
          </span>
          <h2 className="section-title">
            Trusted by Engineering Leaders <span className="gradient-text-blue">Worldwide</span>
          </h2>
          <p className="section-subtitle">
            See how our QA automation, AI solutions, and DevOps engineering drive measurable impact across industries.
          </p>
        </div>

        <div className="testimonial-slider-card">
          <div className="quote-mark">
            <FaQuoteLeft />
          </div>

          <div className="stars-row">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
          </div>

          <p className="testimonial-quote-text">
            "{current.quote}"
          </p>

          <div className="testimonial-footer-row">
            <div className="author-meta">
              <div className="author-avatar" style={{ backgroundColor: current.avatarBg }}>
                {current.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h4 className="author-name">{current.author}</h4>
                <p className="author-role">{current.role} • <strong>{current.company}</strong></p>
              </div>
            </div>

            <div className="testimonial-metric-pill">
              {current.metric}
            </div>

            <div className="slider-nav-btns">
              <button onClick={prevSlide} className="slider-arrow-btn" aria-label="Previous review">
                <FaChevronLeft />
              </button>
              <button onClick={nextSlide} className="slider-arrow-btn" aria-label="Next review">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Client Logos / Trust Ribbon */}
        <div className="trust-ribbon">
          <span className="trust-heading">ENGINEERING FOR HIGH-GROWTH PLATFORMS ACROSS FINTECH, SAAS & LOGISTICS</span>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background: #f8fafc;
        }

        .testimonial-slider-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 60px 50px;
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
        }

        .quote-mark {
          position: absolute;
          top: 30px;
          right: 40px;
          color: rgba(11, 87, 208, 0.12);
          font-size: 4rem;
        }

        .stars-row {
          display: flex;
          gap: 6px;
          margin-bottom: 20px;
        }

        .star-icon {
          color: #f59e0b;
          font-size: 1.1rem;
        }

        .testimonial-quote-text {
          font-size: 1.28rem;
          line-height: 1.7;
          color: #1e293b;
          font-weight: 500;
          margin-bottom: 36px;
          position: relative;
          z-index: 2;
        }

        .testimonial-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f1f5f9;
          padding-top: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .author-meta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .author-name {
          font-size: 1.1rem;
          color: #0f172a;
          font-weight: 700;
        }

        .author-role {
          font-size: 0.85rem;
          color: #64748b;
        }

        .testimonial-metric-pill {
          background: #e0f2fe;
          color: #0369a1;
          border: 1px solid #bae6fd;
          font-weight: 700;
          font-size: 0.82rem;
          padding: 6px 14px;
          border-radius: 9999px;
        }

        .slider-nav-btns {
          display: flex;
          gap: 10px;
        }

        .slider-arrow-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .slider-arrow-btn:hover {
          background: #0b57d0;
          color: #ffffff;
          border-color: #0b57d0;
        }

        .trust-ribbon {
          text-align: center;
          margin-top: 50px;
        }

        .trust-heading {
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .testimonial-slider-card {
            padding: 36px 24px;
          }
          .testimonial-quote-text {
            font-size: 1.05rem;
          }
          .testimonial-footer-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
