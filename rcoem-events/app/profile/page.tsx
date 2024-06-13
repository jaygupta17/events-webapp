import { logout } from "@/actions/logout";
import { getLoggedInUser } from "@/appwrite/config";
// import Image from "next/image";
// import Link from "next/link";

export default async function Home() {
    const user = await getLoggedInUser()
    // if(!user)
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-neutral-800">
      <p>{"Email:"+user?.email}</p>
      <p>{"Name:"+user?.name}</p>
      <p>{"id:"+user?.$id}</p>
    <form action={logout}>
      <button type="submit">sign out</button>
    </form>
    </div>
  );
}
