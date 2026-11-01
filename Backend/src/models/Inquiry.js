const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    service: {
      type: String,
      enum: [
        "QA Automation",
        "Artificial Intelligence (AI)",
        "Data Engineering",
        "DevOps & Cloud",
        "Full-Stack Engineering",
        "Custom Consulting",
        "General Inquiry",
      ],
      default: "General Inquiry",
    },
    budget: {
      type: String,
      default: "Not Specified",
    },
    timeline: {
      type: String,
      default: "Flexible",
    },
    message: {
      type: String,
      required: [true, "Project details or message is required"],
    },
    status: {
      type: String,
      enum: ["New", "In Review", "Contacted", "Resolved"],
      default: "New",
    },
    referenceCode: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to generate reference code
InquirySchema.pre("save", function (next) {
  if (!this.referenceCode) {
    const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.referenceCode = `TN-${Date.now().toString().slice(-4)}-${randomHex}`;
  }
  next();
});

module.exports = mongoose.model("Inquiry", InquirySchema);
