import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ConsultationModal } from "./components/ConsultationModal";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { TechStackPage } from "./pages/TechStackPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <Router>
      <div className="app-layout">
        {/* Navigation Bar */}
        <Navbar onOpenConsultation={openConsultation} />

        {/* Main Routed Page Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage onOpenConsultation={openConsultation} />} />
            <Route path="/about" element={<AboutPage onOpenConsultation={openConsultation} />} />
            <Route path="/services" element={<ServicesPage onOpenConsultation={openConsultation} />} />
            <Route path="/tech-stack" element={<TechStackPage onOpenConsultation={openConsultation} />} />
            <Route path="/case-studies" element={<CaseStudiesPage onOpenConsultation={openConsultation} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Consultation Modal */}
        <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
      </div>

      <style>{`
        .app-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
        }

        .main-content {
          flex: 1;
          width: 100%;
        }
      `}</style>
    </Router>
  );
}

export default App;