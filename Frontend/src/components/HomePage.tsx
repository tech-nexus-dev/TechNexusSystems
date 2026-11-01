import { Link } from "react-router-dom";
import { HeroSection } from "../components/HeroSection";
import { StatsRibbon } from "../components/StatsRibbon";
import { ServicesGrid } from "../components/ServicesGrid";
import { TechRadar } from "../components/TechRadar";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactForm } from "../components/ContactForm";
import { TechNexusLogo3D } from "./TechNexusLogo3D";
import {
  FaArrowRight,
  FaShieldAlt,
  FaVial,
  FaBrain,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

interface HomePageProps {
  onOpenConsultation: () => void;
}

export const HomePage = ({ onOpenConsultation }: HomePageProps) => {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <HeroSection onOpenConsultation={onOpenConsultation} />

      {/* 2. Live Stats Ribbon */}
      <StatsRibbon />

      {/* 3. About Company Highlight Section */}
      <section className="about-overview-section section-padding">
        <div className="container">
          <div className="about-overview-grid">
            {/* Left Column: Visual badge card */}
            <div className="about-visual-col">
              <div className="about-experience-card">
                <div className="about-exp-bg"></div>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  <TechNexusLogo3D variant="badge" size={130} interactive={true} />
                </div>
                <div className="exp-badge-content">
                  <span className="exp-big-number">10x</span>
                  <span className="exp-big-label">Release Velocity Multiplier</span>
                  <p className="exp-subtext">
                    By shifting QA automation left with Playwright & TypeScript, our partner engineering teams catch bugs within seconds of every commit.
                  </p>
                </div>

                <div className="about-floating-mini-card">
                  <FaShieldAlt className="mini-card-icon" />
                  <div>
                    <strong>Zero-Defect Pipeline</strong>
                    <span>Eliminate human error from releases</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: About Tech Nexus */}
            <div className="about-text-col">
              <span className="badge-pill badge-blue">
                <span className="badge-pulse"></span> About Our Company
              </span>
              <h2 className="section-title">
                Precision IT Solutions Designed to <span className="gradient-text-blue">Scale Your Business</span>
              </h2>
              <p className="about-lead">
                We are a modern IT solutions firm dedicated to helping businesses scale through precision and technology. While we offer a full suite of digital services—including <strong>Data Engineering</strong>, <strong>AI Integration</strong>, and <strong>DevOps</strong>—our core expertise lies in <strong>QA Automation</strong>.
              </p>
              <p className="about-body">
                Using industry-leading tools we transform slow, manual testing into high-speed automated pipelines. Our mission is simple: to eliminate bugs, reduce release times, and ensure your software is always deployment-ready.
              </p>

              {/* 4 Pillars Mini List */}
              <div className="about-pillars-list">
                <div className="about-pillar-row">
                  <div className="pillar-dot"><FaVial /></div>
                  <div>
                    <h4>QA Automation</h4>
                    <p>Playwright, TypeScript, and CI/CD test pipelines catching bugs early so you ship with zero errors.</p>
                  </div>
                </div>

                <div className="about-pillar-row">
                  <div className="pillar-dot"><FaBrain /></div>
                  <div>
                    <h4>Artificial Intelligence (AI)</h4>
                    <p>Automate repetitive tasks, intelligent document copilot agents, and smart app features.</p>
                  </div>
                </div>

                <div className="about-pillar-row">
                  <div className="pillar-dot"><FaDatabase /></div>
                  <div>
                    <h4>Data Engineering</h4>
                    <p>Clean automated pipelines and executive real-time performance dashboards.</p>
                  </div>
                </div>

                <div className="about-pillar-row">
                  <div className="pillar-dot"><FaCloud /></div>
                  <div>
                    <h4>DevOps & Cloud</h4>
                    <p>Connect code directly to the cloud for zero-downtime updates, high uptime, and smooth auto-scaling.</p>
                  </div>
                </div>
              </div>

              <div className="about-cta-row">
                <Link to="/about" className="btn btn-primary">
                  <span>Learn More About Us</span> <FaArrowRight />
                </Link>
                <button onClick={onOpenConsultation} className="btn btn-outline-dark">
                  <span>Request Free Audit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <ServicesGrid showTitle={true} />

      {/* 5. Why Choose Us & 4-Stage Process */}
      <WhyChooseUs />

      {/* 6. Interactive Technology Radar (Filtered by QA, AI, Cloud, FullStack, Data) */}
      <TechRadar />

      {/* 7. Case Studies / Impact */}
      <CaseStudiesSection showTitle={true} limit={4} />

      {/* 8. Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* 9. Contact & Free Project Consultation Section */}
      <section className="home-contact-section bg-dark-section section-padding tech-grid-pattern">
        <div className="container">
          <div className="home-contact-grid">
            <div className="home-contact-info">
              <span className="badge-pill badge-cyan">
                <span className="badge-pulse"></span> Contact Us Today
              </span>
              <h2 className="section-title">
                Ready to Upgrade Your <span className="gradient-text-cyan">Software Quality?</span>
              </h2>
              <p className="section-subtitle">
                Fill out some info and we will be in touch shortly. We can’t wait to hear from you and collaborate on your vision.
              </p>

              <div className="contact-info-cards">
                <div className="info-card glass-card">
                  <h4>Tech Nexus Headquarters</h4>
                  <p>A unit of Tech Nexus Systems Private Limited</p>
                  <p>New Defence Colony, Raebareli Road, Lucknow, 226025</p>
                </div>

                <div className="info-card glass-card">
                  <h4>Direct Communications</h4>
                  <p><strong>Email:</strong> contact@technexussystems.com</p>
                  <p><strong>Phone:</strong> +91-8381890248</p>
                  <p><strong>Hours:</strong> Mon - Fri, 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="home-contact-form-card">
              <div className="form-card-inner">
                <h3 className="form-card-title">Get a Free Estimate & Proposal</h3>
                <p className="form-card-sub">Receive an architectural evaluation within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* About Overview Section */
        .about-overview-section {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
        }

        .about-overview-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
          align-items: center;
        }

        .about-visual-col {
          position: relative;
        }

        .about-experience-card {
          background: linear-gradient(135deg, #0b1532 0%, #0f2766 100%);
          border-radius: 24px;
          padding: 60px 48px;
          color: #ffffff;
          position: relative;
          box-shadow: 0 20px 45px rgba(11, 87, 208, 0.15);
          border: 1px solid rgba(11, 87, 208, 0.25);
        }

        .exp-big-number {
          font-family: var(--font-heading);
          font-size: 5rem;
          font-weight: 800;
          color: #38bdf8;
          line-height: 1;
          display: block;
        }

        .exp-big-label {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
          margin: 10px 0 16px 0;
          display: block;
        }

        .exp-subtext {
          color: #cbd5e1;
          font-size: 0.96rem;
          line-height: 1.7;
        }

        .about-floating-mini-card {
          position: absolute;
          bottom: -25px;
          right: -25px;
          background: #ffffff;
          border-radius: 14px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.09);
          border: 1px solid #e2e8f0;
          color: #0f172a;
          max-width: 280px;
        }

        .mini-card-icon {
          color: #10b981;
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .about-floating-mini-card strong {
          display: block;
          font-size: 0.9rem;
          color: #0f172a;
        }

        .about-floating-mini-card span {
          font-size: 0.75rem;
          color: #64748b;
        }

        .about-lead {
          font-size: 1.12rem;
          line-height: 1.7;
          color: #334155;
          margin-bottom: 14px;
        }

        .about-body {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748b;
          margin-bottom: 28px;
        }

        .about-pillars-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .about-pillar-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .pillar-dot {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(11, 87, 208, 0.08);
          color: #0b57d0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 2px;
          border: 1px solid rgba(11, 87, 208, 0.2);
        }

        .about-pillar-row h4 {
          font-size: 1rem;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .about-pillar-row p {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.5;
        }

        .about-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* Home Contact Section */
        .home-contact-section {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          position: relative;
        }

        .home-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: flex-start;
        }

        .contact-info-cards {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 36px;
        }

        .info-card {
          padding: 24px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          border-radius: 14px;
        }

        .info-card h4 {
          color: #0b57d0;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        .info-card p {
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .home-contact-form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.06);
        }

        .form-card-title {
          font-size: 1.5rem;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .form-card-sub {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 24px;
        }

        @media (max-width: 1024px) {
          .about-overview-grid {
            grid-template-columns: 1fr;
          }
          .about-floating-mini-card {
            right: 0;
            bottom: -20px;
          }
          .home-contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .about-experience-card {
            padding: 40px 24px;
          }
          .exp-big-number {
            font-size: 3.8rem;
          }
          .home-contact-form-card {
            padding: 28px 20px;
          }
        }
      `}</style>
    </div>
  );
};
