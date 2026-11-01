import { FaTimes } from "react-icons/fa";
import { ContactForm } from "./ContactForm";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="consultation-modal-backdrop" onClick={onClose}>
      <div className="consultation-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-banner">
          <div className="banner-text">
            <span className="badge-pill badge-cyan">
              <span className="badge-pulse"></span> Free Technical Consultation
            </span>
            <h2 className="modal-headline">
              Let's Engineer Your Next <span className="gradient-text-cyan">Breakthrough</span>
            </h2>
            <p className="modal-sub">
              Discuss your QA testing bottleneck, AI roadmap, or cloud architecture with our senior engineering team.
            </p>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close dialog">
            <FaTimes size={20} />
          </button>
        </div>

        <div className="modal-form-container">
          <ContactForm onSuccess={() => {}} />
        </div>
      </div>

      <style>{`
        .consultation-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          z-index: 4000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .consultation-modal-dialog {
          background: #ffffff;
          border-radius: 20px;
          max-width: 760px;
          width: 100%;
          max-height: 92vh;
          overflow-y: auto;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.25);
          position: relative;
          border: 1px solid #e2e8f0;
          animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-header-banner {
          background: linear-gradient(135deg, #0b57d0 0%, #053b94 100%);
          padding: 32px 36px;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .modal-headline {
          font-size: 1.65rem;
          color: #ffffff;
          margin: 12px 0 8px 0;
          font-weight: 700;
        }

        .modal-sub {
          color: #e0f2fe;
          font-size: 0.92rem;
          max-width: 540px;
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: #ffffff;
          color: #0b57d0;
          transform: rotate(90deg);
        }

        .modal-form-container {
          padding: 36px;
          background: #ffffff;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        @media (max-width: 640px) {
          .modal-header-banner {
            padding: 24px 20px;
          }
          .modal-form-container {
            padding: 20px;
          }
          .modal-headline {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </div>
  );
};
