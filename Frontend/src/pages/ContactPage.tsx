import { useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { TechNexusLogo3D } from "../components/TechNexusLogo3D";
import { faqData } from "../data/faqData";
import type { FAQItem } from "../data/faqData";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaShieldAlt,
  FaVideo,
} from "react-icons/fa";

export const ContactPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <section className="page-header-banner bg-dark-section tech-grid-pattern">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge-pill badge-cyan">
            <span className="badge-pulse"></span> Connect With Engineering
          </span>
          <h1 className="banner-title">
            Let's Talk About Your <span className="gradient-text-cyan">Project</span>
          </h1>
          <p className="banner-subtitle">
            Interested in working together? Fill out some info below and our solutions team will be in touch shortly. We can’t wait to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content Grid: Direct Cards & Interactive Form */}
      <section className="contact-hub-section section-padding">
        <div className="container">
          <div className="contact-hub-grid">
            {/* Left: Contact Info & Company Identity */}
            <div className="contact-info-col">
              <span className="badge-pill badge-blue">
                <span className="badge-pulse"></span> Direct Reach
              </span>
              <h2 className="section-title">
                Get in Touch with <span className="gradient-text-blue">Tech Nexus</span>
              </h2>
              <p className="contact-col-desc">
                Whether you need a dedicated QA automation team, an enterprise AI integration, or a full-stack platform modernization, our team is ready to evaluate your requirements.
              </p>

              {/* Direct Info Cards */}
              <div className="hub-cards-list">
                <div className="hub-card card-light">
                  <div className="hub-icon" style={{ background: "#050a1a", border: "1px solid rgba(0, 212, 255, 0.3)", padding: 2 }}>
                    <TechNexusLogo3D variant="icon" size={38} />
                  </div>
                  <div className="hub-text">
                    <h4>Corporate Identity</h4>
                    <p><strong>Tech Nexus</strong></p>
                    <p className="sub-text">(A unit of Tech Nexus Systems Private Limited)</p>
                  </div>
                </div>

                <div className="hub-card card-light" style={{ background: "linear-gradient(135deg, #0b1532 0%, #0f2766 100%)", borderColor: "rgba(11, 87, 208, 0.25)" }}>
                  <div className="hub-icon" style={{ background: "rgba(255, 255, 255, 0.15)", color: "#ffffff", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                    <FaVideo />
                  </div>
                  <div className="hub-text">
                    <h4 style={{ color: "#38bdf8" }}>3D Brand Logo Studio</h4>
                    <p><a href="/tech-nexus.html" target="_blank" rel="noreferrer" style={{ color: "#ffffff", fontWeight: 700 }}>Open 3D Video Generator →</a></p>
                    <p className="sub-text" style={{ color: "#cbd5e1" }}>Download official 4K/WebM animated logo</p>
                  </div>
                </div>

                <div className="hub-card card-light">
                  <div className="hub-icon"><FaMapMarkerAlt /></div>
                  <div className="hub-text">
                    <h4>Headquarters Location</h4>
                    <p>New Defence Colony, Raebareli Road</p>
                    <p className="sub-text">Lucknow, Uttar Pradesh, 226025, India</p>
                  </div>
                </div>

                <div className="hub-card card-light">
                  <div className="hub-icon"><FaEnvelope /></div>
                  <div className="hub-text">
                    <h4>Direct Email</h4>
                    <p><a href="mailto:contact@technexussystems.com">contact@technexussystems.com</a></p>
                    <p className="sub-text">Responses guaranteed within 24 business hours</p>
                  </div>
                </div>

                <div className="hub-card card-light">
                  <div className="hub-icon"><FaPhoneAlt /></div>
                  <div className="hub-text">
                    <h4>Phone & WhatsApp</h4>
                    <p><a href="tel:+918381890248">+91-8381890248</a></p>
                    <p className="sub-text">Mon - Fri, 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Security / Confidentiality Note */}
              <div className="confidentiality-notice">
                <FaShieldAlt className="notice-icon" />
                <p>
                  <strong>Mutual Non-Disclosure Protection:</strong> All project specifications, architectural designs, and proprietary code bases shared with us remain strictly confidential under NDA.
                </p>
              </div>
            </div>

            {/* Right: Interactive Contact & Quote Form */}
            <div className="contact-form-col">
              <div className="form-wrapper-box card-light">
                <div className="form-wrapper-header">
                  <h3>Submit a Project Inquiry</h3>
                  <p>Provide your requirements and receive an engineering proposal & timeline estimate.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section section-padding" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-blue">
              <span className="badge-pulse"></span> Frequently Asked Questions
            </span>
            <h2 className="section-title">Answers to Common Questions</h2>
            <p className="section-subtitle">
              Learn more about how we engage with clients, implement test frameworks, and safeguard your data.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqData.map((faq: FAQItem, idx: number) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div key={idx} className={`faq-item-card ${isOpen ? "open" : ""}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
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

        .contact-hub-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 60px;
          align-items: flex-start;
        }

        .contact-col-desc {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .hub-cards-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 30px;
        }

        .hub-card {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 20px 24px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }

        .hub-card:hover {
          border-color: #0b57d0;
          box-shadow: 0 8px 24px rgba(11, 87, 208, 0.1);
          transform: translateY(-2px);
        }

        .hub-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(11, 87, 208, 0.08);
          color: #0b57d0;
          border: 1px solid rgba(11, 87, 208, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .hub-text h4 {
          font-size: 0.8rem;
          color: #0b57d0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
          font-weight: 700;
        }

        .hub-text p {
          color: #0f172a;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .hub-text a {
          color: #0b57d0;
          text-decoration: none;
        }

        .hub-text a:hover {
          color: #053b94;
          text-decoration: underline;
        }

        .sub-text {
          font-size: 0.84rem !important;
          color: #64748b !important;
          font-weight: 400 !important;
          margin-top: 3px;
        }

        .confidentiality-notice {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: 12px;
          padding: 16px 20px;
          font-size: 0.88rem;
          color: #065f46;
          line-height: 1.5;
        }

        .confidentiality-notice strong {
          color: #047857;
        }

        .notice-icon {
          color: #059669;
          font-size: 1.3rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Form Column */
        .form-wrapper-box {
          padding: 44px 40px;
          border-radius: 20px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 35px rgba(15, 23, 42, 0.06);
        }

        .form-wrapper-header {
          margin-bottom: 28px;
        }

        .form-wrapper-header h3 {
          font-size: 1.55rem;
          color: #0f172a;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .form-wrapper-header p {
          color: #475569;
          font-size: 0.94rem;
        }

        /* FAQs */
        .faq-accordion-list {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
        }

        .faq-item-card.open {
          border-color: #0b57d0;
          box-shadow: 0 8px 24px rgba(11, 87, 208, 0.1);
        }

        .faq-question-btn {
          width: 100%;
          padding: 22px 26px;
          background: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          gap: 16px;
        }

        .faq-question-text {
          font-family: var(--font-heading);
          font-size: 1.08rem;
          color: #0f172a;
          font-weight: 700;
        }

        .faq-toggle-icon {
          color: #0b57d0;
          font-size: 0.95rem;
          flex-shrink: 0;
        }

        .faq-answer-body {
          padding: 0 26px 24px 26px;
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.7;
          border-top: 1px solid #f1f5f9;
          padding-top: 16px;
        }

        @media (max-width: 1024px) {
          .contact-hub-grid {
            grid-template-columns: 1fr;
          }
          .banner-title {
            font-size: 2.3rem;
          }
          .form-wrapper-box {
            padding: 30px 22px;
          }
        }
      `}</style>
    </div>
  );
};
