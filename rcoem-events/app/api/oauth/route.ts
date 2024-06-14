// src/app/oauth/route.js

import { createAdminClient } from "@/appwrite/config";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  const secret = request.nextUrl.searchParams.get("secret");

  const sss = await createAdminClient();
  const account = await sss.getaccount()
  try {
      const session = await account.createSession(userId!, secret!);
      cookies().set("my-custom-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });
  } catch (error) {
    return NextResponse.redirect(`${request.nextUrl.origin}/login`)
  }
  return NextResponse.redirect(`${request.nextUrl.origin}/profile`);
}
