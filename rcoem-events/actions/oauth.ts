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
		// "https://studious-eureka-4j75vjg9454wf6vj-3000.app.github.dev/oauth",
		// "https://studious-eureka-4j75vjg9454wf6vj-3000.app.github.dev/register"
		`${origin}/oauth`,
		`${origin}/register`,
	);

	return redirect(redirectUrl);
};
