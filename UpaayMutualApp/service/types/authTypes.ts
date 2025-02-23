export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    accessToken : string;
    success: boolean;
    refreshToken: string;
}

export interface SendOTPRequest {
    email: string;
}

export interface VerifyRequest {
    otp: string;
    emailId: string;
}

export interface ResetPasswordRequest{
    email: string;
    password: string;
}