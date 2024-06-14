"use server"

import { createAdminClient } from "@/appwrite/config"
import { RegisterSchema } from "@/schemas"
import { ID } from "appwrite"
import { cookies } from "next/headers"
import { z } from "zod"
import { redirect } from "next/navigation";
import { Permission, Role } from "node-appwrite"

export const signup = async (values:z.infer<typeof RegisterSchema>)=>{
    const validated = RegisterSchema.safeParse(values)
    if(!validated.success) return{error : validated.error.message}
    const {email ,password,name} = validated.data
    const sss = await createAdminClient()
    const account = await sss.getaccount()
    const db = await sss.getdb()
    const users = await sss.getusers()
    try {
        const user = await account.create(ID.unique(),email,password,name)
        // const  label = await users.updateLabels(user.$id , ["ORGANISER"])
         console.log(user);
        const udocument = await db.createDocument(process.env.NEXT_APPWRITE_DB! , process.env.NEXT_APPWRITE_USERS!,ID.unique(),{
            "name" : user.name,
            "email":email,
            "id" : user.$id,
            // "role" : label.labels[0],
            "createdAt" : user.$createdAt
        },
        [
            Permission.read(Role.any()),      
            Permission.update(Role.user(user.$id)),
            Permission.delete(Role.user(user.$id))    
        ]
        );
        console.log(udocument);
        
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
            case "user_already_exists":
                return{error:"Email already in use"}
            default:
                return{error:"Something went wrong"}
        }
    }
    redirect("/profile")
}