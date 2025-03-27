import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
// import axiosInstance from '@/service/api/axiosConfig';

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (accessToken: string, refreshToken: string) => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const login = async (accessToken: string, refreshToken: string) => {
        try {
            // TODO: Uncomment when API is ready
            // const response = await axiosInstance.post('/auth/login', {
            //     email,
            //     password
            // });
            // const { accessToken, refreshToken } = response.data;

            // Temporary solution for testing
            const dummyAccessToken = 'dummy_access_token';
            const dummyRefreshToken = 'dummy_refresh_token';
            
            await AsyncStorage.multiSet([
                ['accessToken', dummyAccessToken],
                ['refreshToken', dummyRefreshToken],
            ]);
            setIsAuthenticated(true);
            // Using the correct path type for tab navigation
            router.replace('/(protected)/Home' as any);
        } catch (error) {
            console.error('Error storing auth tokens:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            // TODO: Uncomment when API is ready
            // await axiosInstance.post('/auth/logout');
            
            await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
            setIsAuthenticated(false);
            router.replace('/(auth)/login');
        } catch (error) {
            console.error('Error removing auth tokens:', error);
            throw error;
        }
    };

    const checkAuth = async () => {
        try {
            const [accessToken, refreshToken] = await AsyncStorage.multiGet([
                'accessToken',
                'refreshToken',
            ]);

            // TODO: Uncomment when API is ready
            // if (accessToken[1] && refreshToken[1]) {
            //     const response = await axiosInstance.post('/auth/verify-token', {
            //         accessToken: accessToken[1],
            //         refreshToken: refreshToken[1]
            //     });
            //     setIsAuthenticated(response.data.isValid);
            // } else {
            //     setIsAuthenticated(false);
            // }

            // Temporary solution for testing
            if (accessToken[1] && refreshToken[1]) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error('Error checking auth status:', error);
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isLoading,
                login,
                logout,
                checkAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 