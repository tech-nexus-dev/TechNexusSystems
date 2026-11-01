import { useState } from "react";
import { Link } from "react-router-dom";
import { TechNexusLogo3D } from "./TechNexusLogo3D";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";
import { api } from "../services/api";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setSubscribing(true);
    setSubscribeMessage(null);

    const res = await api.subscribeNewsletter(newsletterEmail);
    setSubscribing(false);
    if (res.success) {
      setSubscribeMessage({ text: res.message, isError: false });
      setNewsletterEmail("");
    } else {
      setSubscribeMessage({ text: res.message, isError: true });
    }
  };

  return (
    <footer className="site-footer">
      {/* Top CTA Banner */}
      <div className="footer-cta-wrapper">
        <div className="container">
          <div className="footer-cta-card">
            <div className="cta-left">
              <span className="badge-pill badge-cyan">
                <span className="badge-pulse"></span> Accelerate Your Product
              </span>
              <h3 className="cta-title">
                Ready to cut release cycles and eliminate software bugs?
              </h3>
              <p className="cta-desc">
                Partner with Tech Nexus for enterprise-grade QA Automation, AI engineering, and robust cloud DevOps.
              </p>
            </div>
            <div className="cta-right">
              <Link to="/contact" className="btn btn-cyan cta-action-btn">
                <span>Start Your Project</span> <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Brand & About */}
            <div className="footer-col col-brand">
              <div className="brand-logo footer-logo">
                <div className="logo-symbol-3d" style={{ background: "#050a1a", border: "1px solid rgba(0, 212, 255, 0.3)", borderRadius: 12, padding: 2 }}>
                  <TechNexusLogo3D variant="icon" size={48} />
                </div>
                <div className="logo-text">
                  <span className="brand-title-white">TECH<span className="text-cyan">NEXUS</span></span>
                  <span className="brand-tagline-white">SYSTEMS PRIVATE LIMITED</span>
                </div>
              </div>
              <p className="footer-about-text">
                Tech Nexus is a modern IT solutions and software engineering firm. While we offer a full suite of digital services—including Data Engineering, AI Integration, and Cloud DevOps—our core expertise lies in high-velocity <strong>QA Automation</strong>.
              </p>
              <div className="company-badge-tag">
                A unit of Tech Nexus Systems Private Limited
              </div>
            </div>

            {/* Col 2: Core Services */}
            <div className="footer-col">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><Link to="/services#qa-automation">QA Automation Testing</Link></li>
                <li><Link to="/services#artificial-intelligence">Artificial Intelligence (AI)</Link></li>
                <li><Link to="/services#data-engineering">Data Engineering & Analytics</Link></li>
                <li><Link to="/services#devops-cloud">DevOps & Cloud Architecture</Link></li>
                <li><Link to="/services#fullstack-engineering">Full-Stack Web Engineering</Link></li>
                <li><Link to="/services#cybersecurity-compliance">Security & Quality Audits</Link></li>
              </ul>
            </div>

            {/* Col 3: Navigation & Company */}
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><Link to="/">Home Overview</Link></li>
                <li><Link to="/about">About Tech Nexus</Link></li>
                <li><Link to="/tech-stack">Interactive Tech Stack</Link></li>
                <li><Link to="/case-studies">Case Studies & Success</Link></li>
                <li><Link to="/contact">Contact & Inquiry</Link></li>
                <li><a href="/tech-nexus.html" target="_blank" rel="noreferrer" style={{ color: "var(--secondary)" }}>▶ 3D Logo Studio & Video</a></li>
                <li><a href="mailto:contact@technexussystems.com">Career Inquiries</a></li>
              </ul>
            </div>

            {/* Col 4: Contact & Newsletter */}
            <div className="footer-col col-contact">
              <h4 className="footer-heading">Headquarters</h4>
              <div className="contact-details">
                <div className="contact-row">
                  <FaMapMarkerAlt className="contact-icon text-cyan" />
                  <span>New Defence Colony, Raebareli Road, Lucknow, UP 226025</span>
                </div>
                <div className="contact-row">
                  <FaEnvelope className="contact-icon text-cyan" />
                  <a href="mailto:contact@technexussystems.com">contact@technexussystems.com</a>
                </div>
                <div className="contact-row">
                  <FaPhoneAlt className="contact-icon text-cyan" />
                  <a href="tel:+918381890248">+91-8381890248</a>
                </div>
              </div>

              {/* Newsletter Form */}
              <div className="newsletter-box">
                <h5 className="newsletter-title">Subscribe to Tech Insights</h5>
                <p className="newsletter-sub">Get our latest QA & AI engineering benchmarks.</p>
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter business email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="newsletter-input"
                  />
                  <button
                    type="submit"
                    disabled={subscribing}
                    className="newsletter-submit-btn"
                    aria-label="Subscribe"
                  >
                    {subscribing ? "..." : <FaPaperPlane />}
                  </button>
                </form>
                {subscribeMessage && (
                  <p className={`newsletter-feedback ${subscribeMessage.isError ? "error" : "success"}`}>
                    {!subscribeMessage.isError && <FaCheckCircle style={{ marginRight: 6 }} />}
                    {subscribeMessage.text}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p className="copyright-text">
            © {CURRENT_YEAR} Tech Nexus Systems Private Limited. All rights reserved.
          </p>
          <div className="bottom-links">
            <Link to="/about">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/about">Terms of Service</Link>
            <span className="dot">•</span>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #f8fafc;
          color: #475569;
          position: relative;
          padding-top: 50px;
          border-top: 1px solid #e2e8f0;
        }

        /* Top CTA Banner */
        .footer-cta-wrapper {
          transform: translateY(-80px);
          margin-bottom: -40px;
        }
        .footer-cta-card {
          background: linear-gradient(135deg, #0b57d0 0%, #053b94 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 44px 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 20px 50px rgba(11, 87, 208, 0.25);
        }
        .cta-title {
          font-size: 1.85rem;
          color: #ffffff;
          margin: 14px 0 10px 0;
          font-weight: 700;
        }
        .cta-desc {
          color: #e0f2fe;
          font-size: 1rem;
          max-width: 600px;
          line-height: 1.6;
        }
        .cta-action-btn {
          padding: 16px 36px;
          font-size: 1.05rem;
          background: #ffffff;
          color: #0b57d0;
          border-color: #ffffff;
        }
        .cta-action-btn:hover {
          background: #f8fafc;
          color: #053b94;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        /* Main Footer */
        .footer-main {
          padding: 40px 0 60px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 40px;
        }
        .footer-heading {
          color: #0f172a;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 10px;
        }
        .footer-heading::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 35px;
          height: 2px;
          background: #0b57d0;
        }
        .brand-title-white {
          color: #0f172a;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
        }
        .brand-tagline-white {
          font-size: 0.6rem;
          color: #64748b;
          letter-spacing: 0.1em;
          font-weight: 700;
        }
        .footer-about-text {
          font-size: 0.92rem;
          line-height: 1.7;
          margin: 18px 0;
          color: #475569;
        }
        .company-badge-tag {
          font-size: 0.78rem;
          padding: 6px 12px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          display: inline-block;
          color: #334155;
          font-weight: 500;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          color: #475569;
          font-size: 0.93rem;
          display: inline-block;
          transition: all 0.2s ease;
        }
        .footer-links a:hover {
          color: #0b57d0;
          transform: translateX(4px);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }
        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #334155;
        }
        .contact-icon {
          margin-top: 3px;
          font-size: 1rem;
          flex-shrink: 0;
          color: #0b57d0;
        }
        .contact-row a {
          color: #334155;
          transition: color 0.2s ease;
        }
        .contact-row a:hover {
          color: #0b57d0;
        }

        /* Newsletter */
        .newsletter-box {
          background: #ffffff;
          padding: 18px;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
        }
        .newsletter-title {
          color: #0f172a;
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .newsletter-sub {
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 12px;
        }
        .newsletter-form {
          display: flex;
          gap: 6px;
        }
        .newsletter-input {
          flex: 1;
          padding: 10px 14px;
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          color: #0f172a;
          font-size: 0.85rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .newsletter-input:focus {
          border-color: #0b57d0;
          background: #ffffff;
        }
        .newsletter-submit-btn {
          background: #0b57d0;
          color: #ffffff;
          width: 42px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          transition: background 0.2s ease;
        }
        .newsletter-submit-btn:hover {
          background: #053b94;
          color: #ffffff;
        }
        .newsletter-feedback {
          font-size: 0.8rem;
          margin-top: 8px;
        }
        .newsletter-feedback.success {
          color: #16a34a;
        }
        .newsletter-feedback.error {
          color: #dc2626;
        }

        /* Bottom Bar */
        .footer-bottom {
          padding: 24px 0;
          font-size: 0.85rem;
          background: #ffffff;
        }
        .bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .copyright-text {
          color: #64748b;
        }
        .bottom-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .bottom-links a {
          color: #64748b;
        }
        .bottom-links a:hover {
          color: #0b57d0;
        }
        .dot {
          color: #cbd5e1;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-cta-card {
            flex-direction: column;
            text-align: center;
            gap: 24px;
            padding: 32px 24px;
          }
          .cta-desc {
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .bottom-inner {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          .footer-cta-wrapper {
            transform: translateY(-40px);
          }
        }
      `}</style>
    </footer>
  );
};
