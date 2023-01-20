export interface User {
    id: number
    name: string
    email: string
    isBanned: boolean
    createdAt: string
    updatedAt: string
    lastVisit: string
}

export interface DomainUser extends User {
    isChecked: boolean
}

export interface UserData {
    id: number
    email: string
}