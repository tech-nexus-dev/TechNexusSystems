const express = require("express");
const router = express.Router();

const {
  createInquiry,
  getInquiries,
  subscribeNewsletter,
} = require("../controllers/inquiryController");

const {
  getServices,
  getCaseStudies,
  getStats,
} = require("../controllers/dataController");

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "TechNexus Systems API",
    timestamp: new Date().toISOString(),
  });
});


// Inquiries & Quote requests
router.post("/inquiries", createInquiry);
router.get("/inquiries", getInquiries);

// Newsletter subscription
router.post("/newsletter", subscribeNewsletter);

// Services & Case Studies
router.get("/services", getServices);
router.get("/case-studies", getCaseStudies);
router.get("/stats", getStats);

module.exports = router;
