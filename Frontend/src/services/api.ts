import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 8000,
});

export interface InquiryPayload {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
  referenceCode?: string;
}

export const api = {
  // Submit contact / quote inquiry
  submitInquiry: async (payload: InquiryPayload): Promise<InquiryResponse> => {
    try {
      const response = await apiClient.post<InquiryResponse>("/inquiries", payload);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return error.response.data;
      }
      return {
        success: false,
        message: "Network issue. Please verify backend connection or try again shortly.",
      };
    }
  },

  // Subscribe to newsletter
  subscribeNewsletter: async (email: string): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await apiClient.post("/newsletter", { email });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return error.response.data;
      }
      return {
        success: false,
        message: "Failed to subscribe. Please try again.",
      };
    }
  },

  // Fetch services dynamically
  getServices: async () => {
    try {
      const response = await apiClient.get("/services");
      return response.data;
    } catch {
      return null;
    }
  },

  // Fetch case studies
  getCaseStudies: async () => {
    try {
      const response = await apiClient.get("/case-studies");
      return response.data;
    } catch {
      return null;
    }
  },

  // Fetch stats
  getStats: async () => {
    try {
      const response = await apiClient.get("/stats");
      return response.data;
    } catch {
      return null;
    }
  },
};
