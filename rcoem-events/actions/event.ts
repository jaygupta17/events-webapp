"use server"

import { createAdminClient, getLoggedInUser } from "@/appwrite/config"
import { EventSchema } from "@/schemas"
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
        const {title,descr,date,fees}= validated.data
        await db.createDocument(
            process.env.NEXT_APPWRITE_DB!,
            process.env.NEXT_APPWRITE_EVENTS!,
            ID.unique(),
            {
                title,
                descr,
                fees,
                date,
                organiser:user?.$id
            }
        )
        return {success: "wow"}
    
}