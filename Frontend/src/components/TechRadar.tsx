import { useState } from "react";
import {
  techCategories,
  techStackData,
} from "../data/techStackData";
import type { TechTool } from "../data/techStackData";
import { FaSearch, FaCheckCircle } from "react-icons/fa";

export const TechRadar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTools = techStackData.filter((tool: TechTool) => {
    const matchesCategory =
      activeCategory === "all" || tool.category === activeCategory;
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="tech-radar-section bg-dark-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill badge-cyan">
            <span className="badge-pulse"></span> Production-Tested Stack
          </span>
          <h2 className="section-title">
            Interactive <span className="gradient-text-cyan">Technology Radar</span>
          </h2>
          <p className="section-subtitle">
            Explore the specialized frameworks, testing libraries, AI models, and cloud infrastructure we deploy to engineer rock-solid software.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="radar-toolbar">
          {/* Categories Tab Bar */}
          <div className="category-tabs">
            {techCategories.map((cat) => {
              const count =
                cat.id === "all"
                  ? techStackData.length
                  : techStackData.filter((t) => t.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                >
                  <span>{cat.label}</span>
                  <span className="tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="radar-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search tools (e.g. Playwright, AI, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Tools Cards Grid */}
        <div className="tools-grid">
          {filteredTools.map((tool, idx) => (
            <div key={idx} className="tool-card glass-card">
              <div className="tool-card-header">
                <div className="tool-name-group">
                  <h3 className="tool-name">{tool.name}</h3>
                  <span className="tool-role">{tool.role}</span>
                </div>
                <span className="tool-level-badge">{tool.level}</span>
              </div>

              <p className="tool-description">{tool.description}</p>

              <div className="tool-card-footer">
                <span className="tool-badge-pill">
                  <FaCheckCircle className="check-icon" /> {tool.badge}
                </span>
                <span className="tool-category-name">
                  {tool.category.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="empty-search-state">
            <p>No technologies matched "<strong>{searchQuery}</strong>". Try clearing your search.</p>
            <button onClick={() => setSearchQuery("")} className="btn btn-secondary" style={{ marginTop: 12 }}>
              Reset Search
            </button>
          </div>
        )}
      </div>

      <style>{`
        .tech-radar-section {
          background: #ffffff;
          position: relative;
        }

        .radar-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .category-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tab-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.86rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
        }

        .tab-btn:hover {
          color: #0b57d0;
          background: #eff6ff;
          border-color: #0b57d0;
        }

        .tab-btn.active {
          background: #0b57d0;
          color: #ffffff;
          border-color: #0b57d0;
          box-shadow: 0 4px 15px rgba(11, 87, 208, 0.25);
        }

        .tab-count {
          background: rgba(0, 0, 0, 0.08);
          padding: 2px 7px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .tab-btn.active .tab-count {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }

        .radar-search {
          position: relative;
          min-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          font-size: 0.85rem;
        }

        .search-input {
          width: 100%;
          padding: 10px 16px 10px 38px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 9999px;
          color: #0f172a;
          font-size: 0.88rem;
          outline: none;
          transition: all 0.25s ease;
        }

        .search-input:focus {
          border-color: #0b57d0;
          box-shadow: 0 0 10px rgba(11, 87, 208, 0.15);
        }

        .clear-search-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          color: #64748b;
          font-size: 0.75rem;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .tool-card {
          padding: 26px 24px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .tool-card:hover {
          border-color: #0b57d0;
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(11, 87, 208, 0.1);
        }

        .tool-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .tool-name-group {
          display: flex;
          flex-direction: column;
        }

        .tool-name {
          font-size: 1.25rem;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .tool-role {
          font-size: 0.8rem;
          color: #0b57d0;
          font-weight: 600;
        }

        .tool-level-badge {
          font-size: 0.72rem;
          padding: 3px 8px;
          border-radius: 4px;
          background: #e0f2fe;
          color: #0369a1;
          border: 1px solid #bae6fd;
          font-weight: 600;
          white-space: nowrap;
        }

        .tool-description {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .tool-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        .tool-badge-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #475569;
          font-weight: 600;
        }

        .check-icon {
          color: #10b981;
          font-size: 0.8rem;
        }

        .tool-category-name {
          font-size: 0.7rem;
          color: #64748b;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .empty-search-state {
          text-align: center;
          padding: 50px 0;
          color: #64748b;
        }

        @media (max-width: 1024px) {
          .tools-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: 1fr;
          }
          .radar-toolbar {
            flex-direction: column;
            align-items: stretch;
          }
          .radar-search {
            min-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
