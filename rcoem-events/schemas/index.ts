import { File } from "buffer";
import { z } from "zod";


export const OrganiserSchema = z.object({
    name : z.string().min(1,{message:"Name is required"}),
    email : z.string().email({message:"Invalid email"}),
    password: z.string().min(1,"Password is required").max(15 , "Max 15 characters allowed"),
    bio:z.string().max(280,{message:"bio length should be less than 280"}).min(1,{message:"bio is required"})
})
export const EventSchema = z.object({
    title: z.string().min(1,{message:"Title is required"}).max(50,{message:"Title can't exceed 50 Characters"}),
    descr : z.string().max(600,{message:"Description cant exceed 600 characters"}),
    date : z.string(),
    fees: z.string().min(1,{message:"Fee is required"}),
    img:z.string().optional()
})

export const LoginSchema = z.object({
    email:z.string().email({
        message:"Enter a valid email"
    }),
    password :z.string().min(8,{message:"Password length should be 8 or more"})
})

export const RegisterSchema = z.object({
    name:z.string(),
    email:z.string().email({
        message:"Enter a valid email"
    }),
    password :z.string().min(8,{message:"Password length should be 8 or more"})
})
