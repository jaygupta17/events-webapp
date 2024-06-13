"use server"

import { createSessionClient } from "@/appwrite/config"
import { cookies } from "next/headers"

export const logout = async ()=>{
    const sss = await createSessionClient()
    const account = await sss.getaccount()
    cookies().delete("custom-session")
    await account.deleteSession("current")
}