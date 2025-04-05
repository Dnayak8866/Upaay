import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@/environment/env.dev';
import { navigationEvents } from '@/utils/navigationEvents';

// Create axios instance with default config
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('accessToken');
            
            // If token exists, add it to headers
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            
            return config;
        } catch (error) {
            console.error('Error getting token:', error);
            return Promise.reject(error);
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Handle 401 Unauthorized errors
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Get refresh token from storage
                const refreshToken = await AsyncStorage.getItem('refreshToken');
                
                // Call refresh token endpoint
                const response = await axios.post(`${API_URL}/auth/refresh`, {
                    refreshToken,
                });

                // Update tokens in storage
                await AsyncStorage.multiSet([
                    ['accessToken', response.data.accessToken],
                    ['refreshToken', response.data.refreshToken],
                ]);

                // Update authorization header
                originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

                // Retry the original request
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                // If refresh token fails, logout user
                await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
                // Notify navigation event
                navigationEvents.notify();
                return Promise.reject(refreshError);
            }
        }

        // Handle other errors
        if (error.response) {
            // Server responded with error status
            const errorMessage = error.response.data.message || 'An error occurred';
            return Promise.reject(new Error(errorMessage));
        } else if (error.request) {
            // Request was made but no response received
            return Promise.reject(new Error('No response received from server'));
        } else {
            // Something else went wrong
            return Promise.reject(new Error('An unexpected error occurred'));
        }
    }
);

export default axiosInstance; 