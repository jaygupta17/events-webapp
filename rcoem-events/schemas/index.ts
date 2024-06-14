import { z } from "zod";


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

export const PhoneSchema = z.object({
    pnumber : z.string().max(10,{message:"Invalid Phone Number"}).min(10,{message:"Invalid Phone Number"})
})

export const OTPSchema = z.object({
    otp : z.string().max(6,{message:"Invalid OTP"}).min(6,{message:"Invalid OTP"})
})