// "use client"
// import { signUpWithPhone } from "@/actions/oauth";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useState, useTransition } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { PhoneSchema } from "@/schemas/index";
// import { FieldError } from "./field-error";
// import { FormSuccess } from "./form-success";
// import { FormError } from "./form-error";
// import Link from "next/link";
// import OTPField from "../phone/@otp/page";

// export default function PhoneLogin() {
//     const [isPending,startTransition] = useTransition()
//     const [success ,setSuccess] = useState<string | undefined>("")
//     const [error ,setError] = useState<string | undefined>("")
//     const [userId , setUserId]= useState<string>("")
//     const {register,handleSubmit , formState:{errors}} = useForm<z.infer<typeof PhoneSchema>>({
//         resolver : zodResolver(PhoneSchema),
//     })

//     const onsubmit = (values : z.infer<typeof PhoneSchema>) =>{
//         setSuccess("")
//         setError("")
//         startTransition(()=>{
//              signUpWithPhone(values).then((res)=>{
//                 if (res.error) {
//                     setError(res.error)
//                     return
//                 }
//                 setSuccess(res.success)
//                 if (res.userId) {
//                     setUserId(res.userId)
//                 }
//              });
//         })
//     }


// 0
//     return(
//         // <form onSubmit={handleSubmit(onsubmit)}>
//         //         <input type="text" {...register('pnumber')} placeholder="number"/>
//         //        
//         //         <FormSuccess message={success}/>
//         //         <FormError message={error}/>
//         //         <button type="submit" disabled={isPending}>Sign up with Phone</button>
//         // </form>
//         <div className="py-3 w-[90%] md:w-auto flex flex-col gap-y-2 justify-center items-center bg-neutral-900 border border-white/50 rounded-md">
//         <h1 className="text-white font-semibold tracking-wider">Sign Up</h1>
//         <form onSubmit={handleSubmit(onsubmit)} className="h-[80%] px-5 flex flex-col gap-y-4 justify-center items-center">
//              <div className="flex flex-col gap-y-2">
//             <p className="text-white/90  tracking-wide">Name:</p>
//             <input {...register('pnumber')} placeholder="username" disabled={isPending} className="outline-none disabled:bg-neutral-800 text-white/90 bg-white/10 rounded px-3 py-2"/>
//             {errors.pnumber?.message && <FieldError message={errors.pnumber.message} />}
//             </div>
//             <FormError message={error}/>
//             <FormSuccess message={success}/>
//             <button type="submit" disabled={isPending} className="px-4 py-1 mt-2 disabled:bg-green-800 rounded-md bg-green-600 text-white font-semibold">Send otp</button>
//         </form>
//         {success ? <OTPField userId={userId} isDisabled={false}/> : <OTPField userId={userId} isDisabled={true}/>}
//     </div>
//     )
// }