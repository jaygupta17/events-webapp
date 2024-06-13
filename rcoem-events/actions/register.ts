"use server"

import { createAdminClient } from "@/appwrite/config"
// import { account } from "@/appwrite/config"
import { RegisterSchema } from "@/schemas"
import { ID } from "appwrite"
import { cookies } from "next/headers"
import { z } from "zod"
import { redirect } from "next/navigation";

export const signup = async (values:z.infer<typeof RegisterSchema>)=>{
    const validated = RegisterSchema.safeParse(values)
    if(!validated.success) return{error : validated.error.message}
    const {email ,password,name} = validated.data
    const sss = await createAdminClient()
    const account = await sss.getaccount()
    const user = await account.create(ID.unique(),email,password,name)
    const session = await account.createEmailPasswordSession(email,password)
    cookies().set("custom-session",session.secret,{
        path:"/",
        httpOnly:true,
        sameSite:"strict",
        secure:true
    })
    if (user) {
        redirect("/profile")
    }
    return{error:"Something went wrong"}
}