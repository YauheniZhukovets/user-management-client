import {$authHost} from "./index";

export const fetchUser = async () => {
    const {data} = await $authHost.get('')
    return data.users
}
export const blockUser = async (id: number[]) => {
    const {data} = await $authHost.post('update', {id} )
    return data
}

export const deleteUser = async (id: number[]) => {
    const {data} = await $authHost.post('delete', {id} )
    return data
}