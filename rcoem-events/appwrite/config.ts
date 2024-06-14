// import { Account, Client } from "appwrite";
// const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('666a70150006c139d9d6')

// export const account = new Account(client);

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
        getaccount(){
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
        getaccount(){
            return new Account(client)
        },
        getdb(){
            return new Databases(client)
        },
        getusers(){
            return new Users(client)
        }
    }
}

//  const adminClient = new Client()
//             // Your project ID
   

//   export const account = new Account(adminClient)

export async function getLoggedInUser(){
    try {
        const sss = await createSessionClient()
        const account = sss.getaccount() 
       return await account.get()
    } catch (error) {
        return null
    }
}