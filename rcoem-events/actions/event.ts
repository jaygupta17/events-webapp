"use server"

import { createAdminClient, getLoggedInUser } from "@/appwrite/config"
import { EventSchema } from "@/schemas"
import { redirect } from "next/navigation"
import { ID } from "node-appwrite"
import { z } from "zod"

export const createEvent = async (values: z.infer<typeof EventSchema>) => {
    const user = await getLoggedInUser()
    const {db} = await createAdminClient()
    // const userDoc= await db.getDocument(
    //     process.env.NEXT_APPWRITE_DB!,
    //     process.env.NEXT_APPWRITE_USERS!,
    //     user?.$id!
    // )
    const validated = EventSchema.safeParse(values)
        if (!validated.success) {
            return {error: "Invalid Data"}
        }
        console.log(validated.data);
        const {title,descr,date,fees , img}= validated.data
        const fee = Number(fees)
        await db.createDocument(
            process.env.NEXT_APPWRITE_DB!,
            process.env.NEXT_APPWRITE_EVENTS!,
            ID.unique(),
            {
                title,
                descr,
                fees:fee,
                date,
                organiser:user?.$id,
                createdAt: Date.now().toString(),
                img
            }
        )
        redirect("/")    
}