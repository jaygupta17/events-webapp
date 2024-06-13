import { logout } from "@/actions/logout";
import { getLoggedInUser } from "@/appwrite/config";
import { redirect } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";

export default async function Home() {
    const user = await getLoggedInUser()
    if(!user) redirect("/login")
    return (
      <div className="h-screen w-screen flex justify-center items-center flex-col bg-neutral-800">
        <p>{"Email:"+user?.email}</p>
        <p>{"Name:"+user?.name}</p>
        <p>{"id:"+user?.$id}</p>
      <form action={logout}>
      <button type="submit" className="px-4 py-1 mt-2 rounded-md bg-neutral-600 text-white font-semibold">Sign out</button>

      </form>
      </div>
    ); 
}
