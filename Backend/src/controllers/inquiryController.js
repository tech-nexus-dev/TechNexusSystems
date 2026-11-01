const Inquiry = require("../models/Inquiry");
const Newsletter = require("../models/Newsletter");
const { getDBStatus } = require("../config/db");

// Resilient in-memory fallback stores
const memoryInquiries = [];
const memoryNewsletters = [];

// Helper to generate reference code
const generateRefCode = () => {
  const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `TN-${Date.now().toString().slice(-4)}-${randomHex}`;
};

/**
 * Submit a new inquiry / quote request
 */
exports.createInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, company, service, budget, timeline, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide fullName, email, and a message description.",
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const referenceCode = generateRefCode();

    if (getDBStatus()) {
      try {
        const newInquiry = await Inquiry.create({
          fullName,
          email,
          phone: phone || "",
          company: company || "",
          service: service || "General Inquiry",
          budget: budget || "Not Specified",
          timeline: timeline || "Flexible",
          message,
          referenceCode,
        });

        return res.status(201).json({
          success: true,
          message: "Thank you! Your inquiry has been received. Our solutions team will contact you within 24 hours.",
          data: newInquiry,
          referenceCode: newInquiry.referenceCode,
        });
      } catch (dbErr) {
        console.error("Database save error, saving to memory fallback:", dbErr.message);
      }
    }

    // Fallback store
    const fallbackItem = {
      _id: `mem_${Date.now()}`,
      fullName,
      email,
      phone: phone || "",
      company: company || "",
      service: service || "General Inquiry",
      budget: budget || "Not Specified",
      timeline: timeline || "Flexible",
      message,
      status: "New",
      referenceCode,
      createdAt: new Date().toISOString(),
    };

    memoryInquiries.unshift(fallbackItem);

    return res.status(201).json({
      success: true,
      message: "Thank you! Your inquiry has been successfully submitted. Our team will contact you within 24 hours.",
      data: fallbackItem,
      referenceCode,
    });
  } catch (error) {
    console.error("Inquiry controller error:", error);
    return res.status(500).json({
      success: false,
      message: "An internal error occurred while submitting your inquiry. Please try again.",
    });
  }
};

/**
 * Retrieve list of inquiries
 */
exports.getInquiries = async (req, res) => {
  try {
    if (getDBStatus()) {
      try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        return res.json({
          success: true,
          count: inquiries.length,
          data: inquiries,
        });
      } catch (err) {
        console.error("DB retrieve error, returning memory inquiries:", err.message);
      }
    }

    return res.json({
      success: true,
      count: memoryInquiries.length,
      data: memoryInquiries,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve inquiries.",
    });
  }
};

/**
 * Subscribe newsletter
 */
exports.subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (getDBStatus()) {
      try {
        const existing = await Newsletter.findOne({ email });
        if (existing) {
          return res.status(200).json({
            success: true,
            message: "You are already subscribed to TechNexus updates!",
          });
        }
        await Newsletter.create({ email });
        return res.status(201).json({
          success: true,
          message: "Thank you for subscribing! Stay tuned for TechNexus engineering insights.",
        });
      } catch (dbErr) {
        console.error("DB newsletter error:", dbErr.message);
      }
    }

    if (!memoryNewsletters.includes(email)) {
      memoryNewsletters.push(email);
    }

    return res.status(201).json({
      success: true,
      message: "Thank you for subscribing! Stay tuned for TechNexus engineering insights.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to process newsletter subscription.",
    });
  }
};
