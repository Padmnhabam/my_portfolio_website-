// API service for backend communication
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Contact form submission
  async submitContact(contactData) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  // Track visitor
  async trackVisitor(visitorData) {
    return this.request('/visitor', {
      method: 'POST',
      body: JSON.stringify(visitorData),
    });
  }

  // Get analytics (for admin)
  async getAnalytics() {
    return this.request('/analytics');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export default new ApiService();