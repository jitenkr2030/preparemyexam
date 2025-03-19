import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific error cases
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          // You might want to redirect to login
          break;
        case 404:
          // Handle not found
          break;
        default:
          // Handle other errors
          break;
      }
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token, newPassword) => api.post('/auth/reset-password', { token, newPassword }),
};

// User endpoints
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
  updateSettings: (settings) => api.put('/users/settings', settings),
};

// Exam endpoints
export const examAPI = {
  getAllExams: () => api.get('/exams'),
  getExamById: (id) => api.get(`/exams/${id}`),
  searchExams: (query) => api.get('/exams/search', { params: query }),
};

// Study material endpoints
export const studyMaterialAPI = {
  getAllMaterials: () => api.get('/study-materials'),
  getMaterialById: (id) => api.get(`/study-materials/${id}`),
  searchMaterials: (query) => api.get('/study-materials/search', { params: query }),
};

// Progress tracking endpoints
export const progressAPI = {
  getProgress: () => api.get('/progress'),
  updateProgress: (data) => api.post('/progress', data),
};

export default {
  auth: authAPI,
  user: userAPI,
  exam: examAPI,
  studyMaterial: studyMaterialAPI,
  progress: progressAPI,
};