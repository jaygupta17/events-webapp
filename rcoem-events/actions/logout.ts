"use server"

import { createSessionClient } from "@/appwrite/config"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const logout = async ()=>{
    const sss = await createSessionClient()
    const account = await sss.getaccount()
    cookies().delete("custom-session")
    const loggedOut =await account.deleteSession("current")
    if(loggedOut) redirect("/login")
}