// // src/lib/server/oauth.js
// "use server";

// import { createAdminClient } from "@/appwrite/config";
// import { OTPSchema, PhoneSchema } from "@/schemas";
// import { redirect } from "next/navigation";
// import { ID } from "node-appwrite";
// import { z } from "zod";

// export async function signUpWithPhone(values : z.infer<typeof PhoneSchema>) {
// 	const {account} = await createAdminClient()
// 	const validatedFields = PhoneSchema.safeParse(values)
// 	if (!validatedFields.success) {
// 		return {error:"Invalid Number"}
// 	}
// 	const { pnumber } = validatedFields.data
// 	const token =await account.createPhoneToken(
// 		ID.unique(),
// 		"+91"+pnumber
// 	)
// 	return {success : "OTP sent" , userId : token.$id}
// 	// const userId = token.userId
// 	// console.log(token.secret);
	
// 	// const session = await account.createSession(
// 	// 	userId,
// 	// 	token.
// 	// )
// };
// export async function otpVerify(values:z.infer<typeof OTPSchema>) {
// 	const {account} = await createAdminClient()
// 	const validatedFields = OTPSchema.safeParse(values)
// 	if (!validatedFields.success) {
// 		return {error:"Invalid Number"}
// 	}
// 	const { otp } = validatedFields.data
	
// 	console.log();
	
// 	if () {
// 		try {
// 			const session = await account.createSession(
// 				,
// 				otp
// 			);
// 			console.log(session);
			
// 			return {success:"verified"}
// 		} catch (error) {
// 			console.log(error);
			
// 			return {error}
// 		}
// 	}
// 	return {error : "Galat"}
// }