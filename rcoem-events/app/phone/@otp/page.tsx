// "use client"
// import { otpVerify, signUpWithPhone } from "@/actions/oauth";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useState, useTransition } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { OTPSchema } from "@/schemas/index";
// import Link from "next/link";
// import { FieldError } from "@/app/_components/field-error";
// import { FormSuccess } from "@/app/_components/form-success";
// import { FormError } from "@/app/_components/form-error";

// class User{
//     userId:string;
//   constructor(userId : string){
//     this.userId = userId;
//   }
// }
// export default function OTPField({isDisabled , userId}:{isDisabled:boolean, userId:string}) {
    
//     const [isPending,startTransition] = useTransition()
//     const [success ,setSuccess] = useState<string | undefined>("")
//     const [error ,setError] = useState<string | undefined>("")
//     const {register,handleSubmit , formState:{errors}} = useForm<z.infer<typeof OTPSchema>>({
//         resolver : zodResolver(OTPSchema),
//     })

//     const onsubmit = (values : z.infer<typeof OTPSchema>) =>{
//         setSuccess("")
//         setError("")
//         startTransition(()=>{
//              otpVerify(values,new User(userId)).then((res)=>{
//                 if (res.error) {
//                     setError(res.error)
//                     return
//                 }
//                 setSuccess(res.success)
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
//         <div className="py-3 w-[90%] md:w-auto flex flex-col gap-y-2 justify-center items-center bg-neutral-900  rounded-md">
//         <form onSubmit={handleSubmit(onsubmit)} className="h-[80%] px-5 flex flex-col gap-y-4 justify-center items-center">
//              <div className="flex flex-col gap-y-2">
//             <p className="text-white/90  tracking-wide">OTP:</p>
//             <input {...register('otp')} placeholder="otp" disabled={isPending || isDisabled} className="outline-none disabled:bg-neutral-800 text-white/90 bg-white/10 disabled:bg-white/5 rounded px-3 py-2"/>
//             {errors.otp?.message && <FieldError message={errors.otp.message} />}
//             </div>
//             <FormError message={error}/>
//             <FormSuccess message={success}/>
//             <button type="submit" disabled={isPending || isDisabled} className="px-4 py-1 mt-2 disabled:bg-green-800 rounded-md bg-green-600 text-white font-semibold">Verify</button>
//             <Link href="/login" className="underline text-blue-500">Already Registered?</Link>
//         </form>
//     </div>
//     )
// }