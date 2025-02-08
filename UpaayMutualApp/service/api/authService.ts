import axios from 'axios';
import { LoginRequest, LoginResponse } from '../types/authTypes';
const API_URL = 'http://localhost:8080/api/'

export const login = async(reqObj: LoginRequest): Promise<LoginResponse>=>{
    try {
        const response = await axios.post<LoginResponse>(`${API_URL}/login`,reqObj)
        return response.data;
    } catch (error) {
        if ( axios.isAxiosError(error) && error.response){
            const errorResponse : LoginResponse = error.response.data
            throw new Error(error.response.data.message || 'Login failed. Please try again.');
        }else{
            throw new Error('Network error. Please check your connection.');
        }
    }
}