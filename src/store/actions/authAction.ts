

export const setIsLoggedIn = (value: boolean) => {
    return {type: 'AUTH/SET-IS-LOGGED-IN', value} as const
}
