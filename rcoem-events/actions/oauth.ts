// src/lib/server/oauth.js
"use server";

import { createAdminClient } from "@/appwrite/config";
import { PhoneSchema } from "@/schemas";
import { ID } from "node-appwrite";
import { z } from "zod";

export async function signUpWithPhone(values : z.infer<typeof PhoneSchema>) {
	const {account} = await createAdminClient()
	const validatedFields = PhoneSchema.safeParse(values)
	if (!validatedFields.success) {
		return {error:"Invalid Number"}
	}
	const { pnumber } = validatedFields.data
	const token =await account.createPhoneToken(
		ID.unique(),
		"+91"+pnumber
	)
	return {success : "OTP sent"}
	// const userId = token.userId
	// console.log(token.secret);
	
	// const session = await account.createSession(
	// 	userId,
	// 	token.
	// )
};
