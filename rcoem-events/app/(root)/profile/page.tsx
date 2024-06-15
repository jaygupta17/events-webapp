import { logout } from "@/actions/logout";
import { getLoggedInUser } from "@/appwrite/config";
import { redirect } from "next/navigation";
export default async function Home() {
  const user = await getLoggedInUser()
    if (!user) {
        redirect("/login")
    }
    return (
      <div className="h-screen w-screen flex justify-center items-center flex-col">     
      {user.labels.includes("ORGANISER") ? <p>you are a Organiser</p> :<p>you are a User</p>}
      <form action={logout}>
          <button type="submit" className="px-4 py-1 mt-2 rounded-md bg-neutral-600 text-white font-semibold">
            Sign out
          </button>
      </form>
      </div>
    ); 
}
