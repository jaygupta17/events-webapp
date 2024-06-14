// src/lib/server/oauth.js
"use server";

import { createAdminClient } from "@/appwrite/config";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { OAuthProvider } from "node-appwrite";

export async function signUpWithGoogle() {
	const sss = await createAdminClient();
    const account = await sss.getaccount()
    const origin = headers().get("origin");
  
	const redirectUrl = await account.createOAuth2Token(
		OAuthProvider.Google,
		`${origin}/oauth`,
		`${origin}/register`,
	);

	return redirect(redirectUrl);
};