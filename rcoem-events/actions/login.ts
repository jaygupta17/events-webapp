"use server"

import { createAdminClient, createSessionClient, getLoggedInUser } from "@/appwrite/config"
// import { account } from "@/appwrite/config"
import { LoginSchema } from "@/schemas"
import { cookies } from "next/headers"
import { RedirectType, redirect } from "next/navigation"
import { z } from "zod"


export const login = async (values:z.infer<typeof LoginSchema>)=>{

    const validated = LoginSchema.safeParse(values)
    if(!validated.success) return{error : validated.error.message}
    const {email ,password} = validated.data
    const sss = await createAdminClient()
    const account = await sss.getaccount()

    try {
        const session = await account.createEmailPasswordSession(email,password)
        cookies().set("custom-session",session.secret,{
            path:"/",
            httpOnly:true,
            sameSite:"strict",
            secure:true
        })    
    } catch (error:any) {
        console.log(error);
        switch(error.type){
            case "user_invalid_credentials":
                return{error:"Invalid email or password"}
            default:
                return{error:"Something went wrong"}
        }
    }  
        redirect("/profile")
}