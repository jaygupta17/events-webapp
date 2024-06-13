// import { Account, Client } from "appwrite";
// const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('666a70150006c139d9d6')

// export const account = new Account(client);

import { Account, Client } from "node-appwrite"; // Using the server SDK
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
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('666a70150006c139d9d6')     
    .setKey('800c6abff8be253d354fa12e7846dc44ccf1b5c8d78d2d3afa922c2b3e20f6f7d4292d3cc8f0f2d80d70e0a824ea094ef9d9a8aa03c9c9a877e54a3489b67f62c2c3d48751ebba29d7e58df7e98ac5d12cd9f0222c89d3efc576a795d7fd6487c1b7702e44408581a4a07e5124c1e802056f3868868fa55d43c6bc63137daa1f');           

    return {
        getaccount(){
            return new Account(client)
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