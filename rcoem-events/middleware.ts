import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { account } from './appwrite/config'
import { authRoutes, publicRoutes } from './routes'
import { createSessionClient, getLoggedInUser } from './appwrite/config'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
//   const isLoggedIn =!!await account.get()
    const user =await getLoggedInUser()
  const isPublicRoute = publicRoutes.includes(request.url)
  const isAuthRoute = authRoutes.includes(request.url)
  if (isAuthRoute) {
    if (user) {
        // return Response.redirect(new URL("/profile",request.url))
    }
    return null
  }
  if (!user && !isPublicRoute) {
    // return Response.redirect(new URL("/login",request.url))
  }
 
  return null
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}