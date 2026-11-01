import React from "react";
import { FaCheckDouble, FaRocket, FaAward, FaCloud, FaShieldAlt } from "react-icons/fa";

export const StatsRibbon: React.FC = () => {
  const stats = [
    {
      icon: <FaCheckDouble />,
      value: "2.4M+",
      label: "Automated Tests Executed",
      sub: "Playwright, Cypress & CI/CD",
    },
    {
      icon: <FaRocket />,
      value: "150+",
      label: "Solutions Delivered",
      sub: "Startups & Enterprise",
    },
    {
      icon: <FaAward />,
      value: "99.8%",
      label: "Regression Pass Rate",
      sub: "Zero Human Error",
    },
    {
      icon: <FaCloud />,
      value: "99.99%",
      label: "Uptime Performance SLA",
      sub: "Zero-Downtime Deployments",
    },
    {
      icon: <FaShieldAlt />,
      value: "10x",
      label: "Release Acceleration",
      sub: "Months to Days",
    },
  ];

  return (
    <div className="stats-ribbon">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon-wrapper">{stat.icon}</div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-sub">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-ribbon {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          padding: 36px 0;
          position: relative;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 18px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: #0b57d0;
          box-shadow: 0 8px 24px rgba(11, 87, 208, 0.1);
          transform: translateY(-3px);
        }

        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(11, 87, 208, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
          color: #0b57d0;
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0f172a;
          margin-top: 2px;
        }

        .stat-sub {
          font-size: 0.72rem;
          color: #64748b;
        }

        @media (max-width: 1200px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </div>
  );
};
