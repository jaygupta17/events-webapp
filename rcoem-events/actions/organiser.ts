"use server"

import { createAdminClient } from "@/appwrite/config"
import { OrganiserSchema } from "@/schemas"
import { ID } from "appwrite"
import { cookies } from "next/headers"
import { z } from "zod"
import { redirect } from "next/navigation";
import { Permission, Role } from "node-appwrite"

export const createOrganiser = async (values:z.infer<typeof OrganiserSchema>)=>{
    const validated = OrganiserSchema.safeParse(values)
    if(!validated.success) return {error : validated.error.message}
    const {email ,password,name,bio} = validated.data
    const {account,db,users} = await createAdminClient()
    try {
        const user = await account.create(ID.unique(),email,password,name)
        const  label = await users.updateLabels(user.$id , ["ORGANISER"])
         console.log(user);
        const udocument = await db.createDocument(process.env.NEXT_APPWRITE_DB! , process.env.NEXT_APPWRITE_ORGANISER!,user.$id,{
            "name" : user.name,
            "bio": bio,
            "email":email,
            "id" : user.$id,
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
    redirect("/")
}