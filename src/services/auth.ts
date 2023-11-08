import { supabase } from "./supabase"

type UserAuth = {
    email: string
    password: string
}

export const serviceLogin: (data: UserAuth) => any = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    if (error) throw new Error(error.message)
    return data
}

export const serviceGetCurrentUser = async ()=>{
    const {data:session} = await supabase.auth.getSession()
    if(!session.session) return null
    const {data,error} = await supabase.auth.getUser()
    if (error) throw new Error(error.message)
    return data
}
