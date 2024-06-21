"use server"

import { Account, Client, Databases, Users } from "node-appwrite"; // Using the server SDK
import { cookies } from "next/headers";

export async function createSessionClient() {
    const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('666a70150006c139d9d6')     
    const session = cookies().get("custom-session")
    if (!session || !session.value) {
        throw new Error("No Session")
    }
    client.setSession(session.value)
    return {
        get account(){
            return new Account(client)
        }
    }
}


export async function createAdminClient() {
    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)     
    .setKey(process.env.NEXT_APPWRITE_KEY!);           

    return {
        get account(){
            return new Account(client)
        },
        get db(){
            return new Databases(client)
        },
        get users(){
            return new Users(client)
        }
    }
}

//  const adminClient = new Client()
//             // Your project ID
   

//   export const account = new Account(adminClient)

export async function getLoggedInUser(){
    try {
        const {account} = await createSessionClient()
        // const account = sss.getaccount() 
       return await account.get()
    } catch (error) {
        return null
    }
}
export const DeleteEvent=async (id:string) =>{
    const {db} = await createAdminClient();
    const event =await db.deleteDocument(
        process.env.NEXT_APPWRITE_DB!,
        process.env.NEXT_APPWRITE_EVENTS!,
        id
    )
}