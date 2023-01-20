

export const setIsLogin = (value: boolean) => {
    return {type: 'AUTH/SET-IS-LOGGED-IN', value} as const
}

export const setRegistrationIsCompleted = (value: boolean) => {
    return {type: 'AUTH/SET-IS-REGISTER-IN', value} as const
}