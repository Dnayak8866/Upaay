import axios from 'axios';
import axiosInstance from './axiosConfig';
import { LoginRequest, LoginResponse, ResetPasswordRequest, SendOTPRequest, VerifyRequest } from '../types/authTypes';
import { FORGOT_PASSWORD, RESET_PASSWORD, USER_LOGIN, VERIFY_OTP } from '@/constants/endpoints';

export const login = async(reqObj: LoginRequest): Promise<LoginResponse>=>{
    try {
        console.log("Req", reqObj)
        const response = await axiosInstance.post<LoginResponse>(USER_LOGIN, reqObj);
        // Store tokens after successful login
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response){
            const errorResponse : LoginResponse = error.response.data;
            throw new Error(errorResponse.message || 'Login failed. Please try again.');
        }else{
            throw new Error('Network error. Please check your connection.');
        }
    }
}

export const sendOTP = async (reqObj: SendOTPRequest) => {
    try {
        const response = await axiosInstance.post(FORGOT_PASSWORD, reqObj);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response){
            throw new Error(error.response.data.message || 'Failed to send OTP. Please try again.');
        }else{
            throw new Error('Network error. Please check your connection.');
        }
    }
}

export const verifyOTP = async (reqObj: VerifyRequest) => {
    try {
        const response = await axiosInstance.post(VERIFY_OTP, reqObj);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response){
            throw new Error(error.response.data.message || 'Email verification failed. Please try again.');
        }else{
            throw new Error('Network error. Please check your connection.');
        }
    }
}

export const resetPassword = async(reqObj: ResetPasswordRequest) => {
    try {
        const response = await axiosInstance.post(RESET_PASSWORD, reqObj);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response){
            throw new Error(error.response.data.message || 'Failed to reset password. Please try again.');
        }else{
            throw new Error('Network error. Please check your connection.');
        }
    }
}
