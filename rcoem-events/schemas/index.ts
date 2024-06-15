import { File } from "buffer";
import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const EventSchema = z.object({
    title: z.string().min(1,{message:"Title is required"}).max(50,{message:"Title can't exceed 50 Characters"}),
    descr : z.string().max(600,{message:"Description cant exceed 600 characters"}),
    date : z.string(),
    fees: z.string().min(1,{message:"Fee is required"}),
    // image: z
    // .any()
    // .refine((file) => file?.size <= 1000000, `Max image size is 5MB.`)
    // .refine(
    //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    //   "Only .jpg, .jpeg, .png and .webp formats are supported."
    // )
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
