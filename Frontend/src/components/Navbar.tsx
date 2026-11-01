import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { TechNexusLogo3D } from "./TechNexusLogo3D";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaRocket,
  FaVideo,
} from "react-icons/fa";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar = ({ onOpenConsultation }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="site-header">
      {/* Top Bar - Braintech Classic Style */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <div className="top-item">
              <FaMapMarkerAlt className="top-icon" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>
            <div className="top-item">
              <FaEnvelope className="top-icon" />
              <a href="mailto:contact@technexussystems.com">contact@technexussystems.com</a>
            </div>
            <div className="top-item">
              <FaPhoneAlt className="top-icon" />
              <a href="tel:+918381890248">+91-8381890248</a>
            </div>
          </div>
          <div className="top-bar-right">
            <a
              href="/tech-nexus.html"
              target="_blank"
              rel="noreferrer"
              className="top-video-btn"
              title="Open 3D Logo Video Generator & Downloader"
            >
              <FaVideo style={{ marginRight: 6, color: "#00d4ff" }} /> 3D Logo Studio
            </a>
            <span className="top-badge">
              <span className="badge-pulse"></span> Ready for Enterprise Deployments
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`main-nav ${isScrolled ? "nav-scrolled" : ""}`}>
        <div className="container main-nav-inner">
          {/* Brand Logo with 3D Tech Nexus Icon */}
          <Link to="/" className="brand-logo">
            <div className="logo-symbol-3d">
              <TechNexusLogo3D variant="icon" size={46} />
            </div>
            <div className="logo-text">
              <span className="brand-title">TECH<span className="text-cyan">NEXUS</span></span>
              <span className="brand-tagline">SYSTEMS PRIVATE LIMITED</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-links desktop-only">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Services
            </NavLink>
            <NavLink
              to="/tech-stack"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Tech Stack
            </NavLink>
            <NavLink
              to="/case-studies"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Contact
            </NavLink>
          </div>

          {/* Header Action Buttons */}
          <div className="nav-actions desktop-only">
            <button
              onClick={onOpenConsultation}
              className="btn btn-primary nav-quote-btn"
              title="Request a Free Consultation"
            >
              <FaRocket /> Free Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Off-Canvas Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "drawer-open" : ""}`}>
        <div className="mobile-drawer-header">
          <div className="brand-logo">
            <div className="logo-symbol-3d">
              <TechNexusLogo3D variant="icon" size={40} />
            </div>
            <div className="logo-text">
              <span className="brand-title">TECH<span className="text-cyan">NEXUS</span></span>
            </div>
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="mobile-drawer-links">
          <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            <span>Home</span> <FaChevronRight size={14} />
          </Link>
          <Link to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            <span>About Us</span> <FaChevronRight size={14} />
          </Link>
          <Link to="/services" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            <span>Services & Solutions</span> <FaChevronRight size={14} />
          </Link>
          <Link to="/tech-stack" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            <span>Tech Stack Radar</span> <FaChevronRight size={14} />
          </Link>
          <Link to="/case-studies" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            <span>Case Studies</span> <FaChevronRight size={14} />
          </Link>
          <Link to="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            <span>Contact & Location</span> <FaChevronRight size={14} />
          </Link>
        </div>

        <div className="mobile-drawer-footer">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="btn btn-cyan btn-full"
          >
            <FaRocket /> Get Project Quote
          </button>
          <div className="drawer-contact-info">
            <p><strong>HQ:</strong> Lucknow, UP, India</p>
            <p><strong>Email:</strong> contact@technexussystems.com</p>
            <p><strong>Phone:</strong> +91-8381890248</p>
          </div>
        </div>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        /* Top Bar */
        .top-bar {
          background: #f8fafc;
          color: #64748b;
          font-size: 0.82rem;
          border-bottom: 1px solid #e2e8f0;
        }
        .top-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--topbar-height);
        }
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .top-item {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #475569;
        }
        .top-icon {
          color: var(--primary);
          font-size: 0.85rem;
        }
        .top-bar a {
          color: #475569;
        }
        .top-bar a:hover {
          color: var(--primary);
        }
        .top-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #0b57d0;
          font-weight: 600;
        }

        /* Main Nav */
        .main-nav {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .main-nav.nav-scrolled {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(16px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }
        .main-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
        }

        /* Brand Logo */
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .top-video-btn {
          color: #0b57d0;
          font-weight: 600;
          display: flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 6px;
          background: rgba(11, 87, 208, 0.08);
          border: 1px solid rgba(11, 87, 208, 0.2);
          margin-right: 14px;
          font-size: 0.78rem;
          transition: all 0.2s ease;
        }
        .top-video-btn:hover {
          background: #0b57d0;
          color: #ffffff !important;
        }
        .logo-symbol-3d {
          width: 48px;
          height: 48px;
          background: #0b1220;
          border: 1px solid rgba(11, 87, 208, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
          overflow: hidden;
        }
        .brand-logo:hover .logo-symbol-3d {
          transform: scale(1.06) rotate(2deg);
          box-shadow: 0 6px 20px rgba(11, 87, 208, 0.3);
          border-color: #0b57d0;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .brand-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: 0.02em;
          color: #0f172a;
          line-height: 1.1;
        }
        .text-cyan {
          color: #0b57d0;
        }
        .brand-tagline {
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          color: #64748b;
          font-weight: 700;
        }

        /* Nav Links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-link {
          color: #334155;
          font-weight: 600;
          font-size: 0.96rem;
          position: relative;
          padding: 8px 0;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .nav-link.active {
          color: var(--primary);
        }
        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #0b57d0;
          border-radius: 2px;
        }

        .nav-quote-btn {
          padding: 10px 22px;
          font-size: 0.9rem;
        }

        /* Mobile Controls */
        .mobile-only {
          display: none;
        }
        .mobile-toggle-btn {
          background: none;
          color: #0f172a;
          padding: 8px;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -320px;
          width: 320px;
          height: 100vh;
          background: #ffffff;
          color: #0f172a;
          z-index: 2000;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
          transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          padding: 24px;
        }
        .mobile-drawer.drawer-open {
          right: 0;
        }
        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        .drawer-close-btn {
          background: #f1f5f9;
          color: #0f172a;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 24px 0;
          flex: 1;
        }
        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #f8fafc;
          border-radius: 8px;
          color: #0f172a;
          font-weight: 600;
          border: 1px solid #e2e8f0;
        }
        .mobile-link:hover {
          background: #eff6ff;
          color: var(--primary);
          border-color: #0b57d0;
        }
        .btn-full {
          width: 100%;
        }
        .drawer-contact-info {
          margin-top: 18px;
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
          .top-bar-left .top-item:first-child {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .top-bar {
            display: none;
          }
          .main-nav-inner {
            height: 70px;
          }
        }
      `}</style>
    </header>
  );
};
