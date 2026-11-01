import { useState } from "react";
import { api } from "../services/api";
import type { InquiryPayload } from "../services/api";
import {
  FaCheckCircle,
  FaPaperPlane,
  FaShieldAlt,
} from "react-icons/fa";

interface ContactFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService, onSuccess }) => {
  const [formData, setFormData] = useState<InquiryPayload>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: initialService || "QA Automation",
    budget: "$5,000 - $15,000",
    timeline: "Within 2 - 4 Weeks",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ message: string; refCode?: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, and Project Details).");
      return;
    }

    setLoading(true);

    try {
      const response = await api.submitInquiry(formData);
      setLoading(false);

      if (response.success) {
        setSuccessData({
          message: response.message,
          refCode: response.referenceCode,
        });
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setErrorMessage(response.message || "Failed to submit. Please try again.");
      }
    } catch {
      setLoading(false);
      setErrorMessage("Connection error with backend server. Please retry.");
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "QA Automation",
      budget: "$5,000 - $15,000",
      timeline: "Within 2 - 4 Weeks",
      message: "",
    });
  };

  return (
    <div className="contact-form-component">
      {successData ? (
        <div className="inquiry-success-panel">
          <div className="success-icon-box">
            <FaCheckCircle />
          </div>
          <h3 className="success-title">Inquiry Submitted Successfully!</h3>
          <p className="success-text">{successData.message}</p>

          {successData.refCode && (
            <div className="ref-code-box">
              <span className="ref-lbl">Your Project Reference Code:</span>
              <span className="ref-val">{successData.refCode}</span>
            </div>
          )}

          <div className="success-next-steps">
            <h4>What happens next?</h4>
            <ul>
              <li><FaCheckCircle className="step-check" /> A Lead Automation Architect reviews your specifications.</li>
              <li><FaCheckCircle className="step-check" /> We formulate a proposed delivery roadmap & estimate within 24 hours.</li>
              <li><FaCheckCircle className="step-check" /> We schedule an introductory technical walkthrough.</li>
            </ul>
          </div>

          <button onClick={handleReset} className="btn btn-primary" style={{ marginTop: 20 }}>
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="inquiry-form">
          {errorMessage && (
            <div className="form-alert-error">
              {errorMessage}
            </div>
          )}

          <div className="form-grid-2">
            <div className="form-field">
              <label htmlFor="fullName">Full Name <span className="req">*</span></label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="input-control"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Work Email <span className="req">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-control"
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-field">
              <label htmlFor="phone">Phone / WhatsApp</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91-XXXXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
                className="input-control"
              />
            </div>

            <div className="form-field">
              <label htmlFor="company">Company / Organization</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="input-control"
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-field">
              <label htmlFor="service">Primary Area of Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="input-control select-control"
              >
                <option value="QA Automation">QA Automation & Test Engineering</option>
                <option value="Artificial Intelligence (AI)">Artificial Intelligence (AI) & Agents</option>
                <option value="Data Engineering">Data Engineering & Analytics Dashboards</option>
                <option value="DevOps & Cloud">DevOps & Cloud Infrastructure</option>
                <option value="Full-Stack Engineering">Full-Stack Web & Software Engineering</option>
                <option value="Custom Consulting">Custom Consulting / Architecture Audit</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="timeline">Expected Timeline</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="input-control select-control"
              >
                <option value="Immediate (< 2 Weeks)">Immediate (&lt; 2 Weeks)</option>
                <option value="Within 2 - 4 Weeks">Within 2 - 4 Weeks</option>
                <option value="1 - 3 Months">1 - 3 Months</option>
                <option value="Exploratory / Planning">Exploratory / Planning</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Project Requirements / Current Bottlenecks <span className="req">*</span></label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your project, current testing cycles, tech stack, or challenges you're looking to solve..."
              value={formData.message}
              onChange={handleChange}
              required
              className="input-control textarea-control"
            ></textarea>
          </div>

          <div className="form-guarantee-note">
            <FaShieldAlt className="guarantee-icon" />
            <span>Strict NDA Guarantee: Your architectural details and data are 100% confidential.</span>
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary submit-btn">
            {loading ? (
              <span>Submitting to Tech Nexus API...</span>
            ) : (
              <>
                <FaPaperPlane /> <span>Send Inquiry & Get Free Estimate</span>
              </>
            )}
          </button>
        </form>
      )}

      <style>{`
        .contact-form-component {
          width: 100%;
        }

        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-field label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #334155;
        }

        .req {
          color: #ef4444;
        }

        .input-control {
          width: 100%;
          padding: 13px 16px;
          border-radius: 10px;
          border: 1.5px solid #cbd5e1;
          font-family: inherit;
          font-size: 0.94rem;
          color: #0f172a;
          outline: none;
          background: #ffffff;
          transition: all 0.25s ease;
        }

        .input-control::placeholder {
          color: #94a3b8;
        }

        .input-control:focus {
          border-color: #0b57d0;
          box-shadow: 0 0 0 3px rgba(11, 87, 208, 0.15);
          background: #ffffff;
        }

        .select-control {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230b57d0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.2em;
          appearance: none;
          padding-right: 2.5rem;
          background-color: #ffffff;
          color: #0f172a;
        }

        .select-control option {
          background-color: #ffffff;
          color: #0f172a;
        }

        .textarea-control {
          resize: vertical;
          min-height: 110px;
        }

        .form-alert-error {
          padding: 12px 16px;
          background: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 500;
        }

        .form-guarantee-note {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.84rem;
          color: #15803d;
          padding: 10px 14px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
        }

        .guarantee-icon {
          color: #16a34a;
          flex-shrink: 0;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          font-size: 1.05rem;
          background: #0b57d0;
          color: #ffffff;
        }
        .submit-btn:hover {
          background: #053b94;
        }

        /* Success Panel */
        .inquiry-success-panel {
          background: #f0fdf4;
          border: 1.5px solid #86efac;
          border-radius: 16px;
          padding: 40px 32px;
          text-align: center;
        }

        .success-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #dcfce7;
          color: #16a34a;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px auto;
          box-shadow: 0 0 20px rgba(22, 163, 74, 0.2);
        }

        .success-title {
          font-size: 1.5rem;
          color: #0f172a;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .success-text {
          color: #475569;
          font-size: 0.98rem;
          max-width: 500px;
          margin: 0 auto 20px auto;
        }

        .ref-code-box {
          background: #ffffff;
          border: 1.5px dashed #0b57d0;
          border-radius: 8px;
          padding: 12px 20px;
          display: inline-flex;
          flex-direction: column;
          margin-bottom: 24px;
        }

        .ref-lbl {
          font-size: 0.76rem;
          color: #64748b;
          font-weight: 600;
        }

        .ref-val {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: #0b57d0;
          letter-spacing: 0.05em;
        }

        .success-next-steps {
          text-align: left;
          background: #ffffff;
          padding: 20px 24px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          max-width: 500px;
          margin: 0 auto;
        }

        .success-next-steps h4 {
          font-size: 0.95rem;
          color: #0f172a;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .success-next-steps ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .success-next-steps li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #334155;
        }

        .step-check {
          color: #16a34a;
          font-size: 0.85rem;
        }

        @media (max-width: 700px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
