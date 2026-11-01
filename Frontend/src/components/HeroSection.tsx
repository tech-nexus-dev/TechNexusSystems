import { useState } from "react";
import { Link } from "react-router-dom";
import { TechNexusLogo3D } from "./TechNexusLogo3D";
import {
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaTerminal,
  FaCheckDouble,
  FaBrain,
  FaCloud,
  FaCube,
  FaVideo,
} from "react-icons/fa";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection = ({ onOpenConsultation }: HeroSectionProps) => {
  const [activeVisual, setActiveVisual] = useState<"3d" | "terminal">("3d");

  return (
    <section className="hero-section bg-dark-section tech-grid-pattern">
      {/* Ambient background glows */}
      <div className="ambient-glow glow-blue"></div>
      <div className="ambient-glow glow-cyan"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Hero Text Content */}
          <div className="hero-content">
            <div className="badge-pill badge-cyan hero-badge">
              <span className="badge-pulse"></span>
              <span>Next-Gen IT Solutions & Automation</span>
            </div>

            <h1 className="hero-title">
              Accelerate Growth with <span className="gradient-text-cyan">QA Automation</span> & Enterprise AI
            </h1>

            <p className="hero-description">
              We are a modern IT solutions firm dedicated to helping businesses scale through precision engineering. While we offer a full suite of digital services—including <strong>Data Engineering</strong>, <strong>AI Integration</strong>, and <strong>DevOps</strong>—our core expertise lies in high-velocity <strong>QA Automation</strong>.
            </p>

            {/* Quick Pillars */}
            <div className="hero-pillars">
              <div className="pillar-item">
                <FaCheckCircle className="pillar-icon text-cyan" />
                <span>Eliminate human error</span>
              </div>
              <div className="pillar-item">
                <FaCheckCircle className="pillar-icon text-cyan" />
                <span>Move from months to days</span>
              </div>
              <div className="pillar-item">
                <FaCheckCircle className="pillar-icon text-cyan" />
                <span>Latest industry standards</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="hero-actions">
              <button onClick={onOpenConsultation} className="btn btn-cyan hero-btn-main">
                <FaRocket /> <span>Free Consultation & Quote</span>
              </button>
              <Link to="/services" className="btn btn-secondary hero-btn-sub">
                <span>Explore Solutions</span> <FaArrowRight />
              </Link>
            </div>

            {/* Social Proof Bar */}
            <div className="hero-proof">
              <div className="avatars-group">
                <span className="avatar-chip a1">TN</span>
                <span className="avatar-chip a2">QA</span>
                <span className="avatar-chip a3">AI</span>
                <span className="avatar-chip a4">+30</span>
              </div>
              <div className="proof-text">
                <strong>150+ Projects Engineered</strong>
                <span>Trusted by fast-moving tech startups & enterprises</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Hologram Logo & Interactive Terminal Visual */}
          <div className="hero-visual">
            <div className="terminal-card">
              {/* Card Header with View Switcher */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                
                {/* Visual View Switcher */}
                <div className="hero-view-switcher">
                  <button
                    onClick={() => setActiveVisual("3d")}
                    className={`switcher-btn ${activeVisual === "3d" ? "active" : ""}`}
                  >
                    <FaCube style={{ marginRight: 5 }} /> 3D Logo Hologram
                  </button>
                  <button
                    onClick={() => setActiveVisual("terminal")}
                    className={`switcher-btn ${activeVisual === "terminal" ? "active" : ""}`}
                  >
                    <FaTerminal style={{ marginRight: 5 }} /> Live CI/CD
                  </button>
                </div>

                <div className="terminal-live-tag">
                  {activeVisual === "3d" ? "INTERACTIVE 3D" : "LIVE PLAYWRIGHT"}
                </div>
              </div>

              {/* View 1: 3D Interactive Logo Hologram */}
              {activeVisual === "3d" ? (
                <div className="hologram-stage-container">
                  <div className="hologram-canvas-box">
                    <TechNexusLogo3D
                      variant="hero"
                      size={440}
                      interactive={true}
                      showText={true}
                    />
                  </div>
                  <div className="hologram-footer-bar">
                    <span className="hologram-hint">
                      Move cursor over logo for 3D parallax tilt
                    </span>
                    <a
                      href="/tech-nexus.html"
                      target="_blank"
                      rel="noreferrer"
                      className="hologram-video-export-link"
                      title="Generate and Download 4K Video File"
                    >
                      <FaVideo /> Export Logo Video
                    </a>
                  </div>
                </div>
              ) : (
                /* View 2: Live CI/CD Automation Terminal */
                <div className="terminal-body">
                  <div className="term-line">
                    <span className="term-prompt">$</span>
                    <span className="term-cmd">npx technexus run --suite=qa-automation --env=production</span>
                  </div>
                  <div className="term-output info">
                    <span>[INFO] Initializing Playwright E2E cluster (8 parallel workers)...</span>
                  </div>
                  <div className="term-output success">
                    <span>✓ Auth & Role-Based Access Validation</span>
                    <span className="term-time">320ms</span>
                  </div>
                  <div className="term-output success">
                    <span>✓ Enterprise Payment Flow & Webhook Emulation</span>
                    <span className="term-time">840ms</span>
                  </div>
                  <div className="term-output success">
                    <span>✓ AI Agent RAG Document Ingestion & Verification</span>
                    <span className="term-time">1.1s</span>
                  </div>
                  <div className="term-output success">
                    <span>✓ Microservices Zero-Downtime Health Check</span>
                    <span className="term-time">190ms</span>
                  </div>
                  <div className="term-divider"></div>
                  <div className="term-summary">
                    <span className="badge-pass">PASS</span>
                    <strong>312 tests passed</strong>
                    <span className="term-duration">(Duration: 2.8s • 0 failures)</span>
                  </div>
                </div>
              )}

              {/* Floating Badges */}
              <div className="floating-card badge-top-left">
                <div className="floating-icon icon-qa">
                  <FaCheckDouble />
                </div>
                <div>
                  <div className="floating-val">99.8%</div>
                  <div className="floating-lbl">Test Coverage</div>
                </div>
              </div>

              <div className="floating-card badge-bottom-right">
                <div className="floating-icon icon-ai">
                  <FaBrain />
                </div>
                <div>
                  <div className="floating-val">10x Speed</div>
                  <div className="floating-lbl">Release Velocity</div>
                </div>
              </div>

              <div className="floating-card badge-bottom-left">
                <div className="floating-icon icon-cloud">
                  <FaCloud />
                </div>
                <div>
                  <div className="floating-val">99.99%</div>
                  <div className="floating-lbl">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 80px 0 100px 0;
          overflow: hidden;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border-bottom: 1px solid #e2e8f0;
        }

        .ambient-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
          opacity: 0.12;
          z-index: 1;
        }
        .glow-blue {
          top: -100px;
          left: -100px;
          background: #0b57d0;
        }
        .glow-cyan {
          bottom: -100px;
          right: 5%;
          background: #38bdf8;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 60px;
          align-items: center;
        }

        .hero-badge {
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 3.3rem;
          line-height: 1.15;
          color: #0f172a;
          margin-bottom: 22px;
          letter-spacing: -0.03em;
        }

        .hero-description {
          font-size: 1.12rem;
          line-height: 1.75;
          color: #475569;
          margin-bottom: 28px;
        }

        .hero-pillars {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 34px;
        }
        .pillar-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #334155;
          font-weight: 600;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }
        .hero-btn-main {
          padding: 16px 32px;
          font-size: 1.02rem;
        }
        .hero-btn-sub {
          padding: 16px 28px;
          font-size: 1.02rem;
        }

        .hero-proof {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
        }
        .avatars-group {
          display: flex;
          align-items: center;
        }
        .avatar-chip {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          margin-left: -10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: #ffffff;
        }
        .avatar-chip:first-child {
          margin-left: 0;
        }
        .a1 { background: #0b57d0; }
        .a2 { background: #0088ff; color: #ffffff; }
        .a3 { background: #7928ca; }
        .a4 { background: #10b981; }

        .proof-text {
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
          color: #64748b;
        }
        .proof-text strong {
          color: #0f172a;
          font-size: 0.95rem;
        }

        /* Right Terminal Card */
        .hero-visual {
          position: relative;
        }
        .terminal-card {
          background: #09132d;
          border: 1px solid rgba(0, 212, 255, 0.25);
          border-radius: 18px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 212, 255, 0.12);
          position: relative;
          overflow: visible;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          background: #060e22;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
        }
        .terminal-dots {
          display: flex;
          gap: 6px;
        }
        .terminal-dots .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .dot.red { background: #ef4444; }
        .dot.yellow { background: #f59e0b; }
        .dot.green { background: #10b981; }

        .hero-view-switcher {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.4);
          padding: 3px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .switcher-btn {
          background: transparent;
          color: #94a3b8;
          font-size: 0.74rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 6px;
          border: none;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .switcher-btn:hover {
          color: #ffffff;
        }
        .switcher-btn.active {
          background: linear-gradient(135deg, #0b57d0 0%, #00d4ff 100%);
          color: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 212, 255, 0.3);
        }

        .hologram-stage-container {
          padding: 20px 20px 14px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, rgba(11, 87, 208, 0.15) 0%, rgba(5, 10, 26, 0.8) 70%);
        }
        .hologram-canvas-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 290px;
        }
        .hologram-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          margin-top: 6px;
        }
        .hologram-hint {
          font-size: 0.75rem;
          color: #64748b;
          font-style: italic;
        }
        .hologram-video-export-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--secondary);
          font-weight: 700;
          background: rgba(0, 212, 255, 0.1);
          padding: 5px 12px;
          border-radius: 6px;
          border: 1px solid rgba(0, 212, 255, 0.25);
          transition: all 0.2s ease;
        }
        .hologram-video-export-link:hover {
          background: rgba(0, 212, 255, 0.22);
          transform: translateY(-1px);
        }
        .terminal-live-tag {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--secondary);
          background: rgba(0, 212, 255, 0.1);
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid rgba(0, 212, 255, 0.3);
        }

        .terminal-body {
          padding: 24px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.82rem;
          line-height: 1.8;
          color: #e2e8f0;
        }
        .term-line {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
        }
        .term-prompt {
          color: var(--secondary);
          font-weight: bold;
        }
        .term-cmd {
          color: #ffffff;
        }
        .term-output {
          display: flex;
          justify-content: space-between;
          padding: 4px 0;
        }
        .term-output.info {
          color: #94a3b8;
        }
        .term-output.success {
          color: #38bdf8;
        }
        .term-time {
          color: #64748b;
          font-size: 0.75rem;
        }
        .term-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 14px 0;
        }
        .term-summary {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .badge-pass {
          background: #10b981;
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 0.75rem;
        }
        .term-duration {
          color: #94a3b8;
          font-size: 0.78rem;
        }

        /* Floating Stat Badges */
        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
          animation: floatSlow 6s ease-in-out infinite;
        }
        .badge-top-left {
          top: -20px;
          left: -20px;
          animation-delay: 0s;
        }
        .badge-bottom-right {
          bottom: -24px;
          right: -15px;
          animation-delay: 2s;
        }
        .badge-bottom-left {
          bottom: 40px;
          left: -35px;
          animation-delay: 4s;
        }
        .floating-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }
        .icon-qa {
          background: rgba(11, 87, 208, 0.1);
          color: #0b57d0;
        }
        .icon-ai {
          background: rgba(121, 40, 202, 0.1);
          color: #7928ca;
        }
        .icon-cloud {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        .floating-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.05rem;
          color: #0f172a;
          line-height: 1.1;
        }
        .floating-lbl {
          font-size: 0.72rem;
          color: #64748b;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .hero-title {
            font-size: 2.7rem;
          }
          .badge-bottom-left {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.1rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
          .floating-card {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
