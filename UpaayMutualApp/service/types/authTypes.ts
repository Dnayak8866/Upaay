export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    token? : string;
    data ? : {
        id: string;
        email: string;
        password: string;
    }
}