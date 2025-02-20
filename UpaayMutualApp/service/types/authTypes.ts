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

export interface verifyRequest {
    otp: string;
    emailId: string;
}

export interface resetPasswordRequest{
    email: string;
    password: string;
}