import axios from 'axios';
import { LoginRequest, LoginResponse, resetPasswordRequest, SendOTPRequest, verifyRequest } from '../types/authTypes';
import { API_URL } from '@/environment/env.dev';
import { FORGOT_PASSWORD, RESET_PASSWORD, USER_LOGIN, VERIFY_OTP } from '@/constants/endpoints';

export const login = async(reqObj: LoginRequest): Promise<LoginResponse>=>{
    try {
        const response = await axios.post<LoginResponse>(`${API_URL}/${USER_LOGIN}`,reqObj)
        return response.data;
    } catch (error) {
        if ( axios.isAxiosError(error) && error.response){
            const errorResponse : LoginResponse = error.response.data
            throw new Error(errorResponse.message || 'Login failed. Please try again.');
        }else{
            throw new Error('Network error. Please check your connection.');
        }
    }
}

export const sendOTP = async (reqObj: SendOTPRequest) => {
    try {
        const response = await axios.post(`${API_URL}/${FORGOT_PASSWORD}`,reqObj);
        return response.data;
    } catch (error) {
        if ( axios.isAxiosError(error) && error.response){
            throw new Error(error.response.data.message || 'Failed to send OTP. Please try again.');
        }else{
            throw new Error('Network error. Please check your connection.');
        }
    }
}

export const verifyOTP = async (reqObj: verifyRequest) => {
    try {
        const response = await axios.post(`${API_URL}/${VERIFY_OTP}`,reqObj);
        return response.data;
    } catch (error) {
        if ( axios.isAxiosError(error) && error.response){
            throw new Error(error.response.data.message || 'Email verification failed. Please try again.');
        }else{
            throw new Error('Network error. Please check your connection.');
        }
    }
}

export const resetPassword = async(reqObj: resetPasswordRequest) => {
    try {
        const response = await axios.post(`${API_URL}/${RESET_PASSWORD}`, reqObj);
        return response.data;
    } catch (error) {
        if ( axios.isAxiosError(error) && error.response){
            throw new Error(error.response.data.message || 'Failed to reset password. Please try again.');
        }else{
            throw new Error('Network error. Please check your connection.');
        }
    }
}
