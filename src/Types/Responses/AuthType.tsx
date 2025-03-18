interface AuthResponse{
    jwt?:string,
    expiration?:Date,
    username?:string
}

export type {AuthResponse}