"use server"

import { createAdminClient } from "@/appwrite/config"
// import { account } from "@/appwrite/config"
import { LoginSchema } from "@/schemas"
import { cookies } from "next/headers"
import { z } from "zod"

export const login = async (values:z.infer<typeof LoginSchema>)=>{
    const validated = LoginSchema.safeParse(values)
    if(!validated.success) return{error : validated.error.message}
    const {email ,password} = validated.data
    const sss = await createAdminClient()
    const account = await sss.getaccount()
    // const user = await account.createEmailPasswordSession(email,password)
    const session = await account.createEmailPasswordSession(email,password)
    cookies().set("custom-session",session.secret,{
        path:"/",
        httpOnly:true,
        sameSite:"strict",
        secure:true
    })
    if (session) {
        return{success: "Logged In" , session}
    }
    return{error:"Something went wrong"}
}