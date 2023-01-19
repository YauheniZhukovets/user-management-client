import {$authHost} from "./index";

export const fetchUser = async () => {
    const {data} = await $authHost.get('')
    return data.users
}