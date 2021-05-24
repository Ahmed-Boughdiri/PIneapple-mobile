
export interface RegisterDataProps {
    username: String | undefined,
    email: String,
    password: String,
    confirmPassword: String
}

export interface LoginDataProps {
    email: String,
    password: String
}
