import { logout } from "@/actions/logout";
import { getLoggedInUser } from "@/appwrite/config";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
export default async function Home() {
  const user = await getLoggedInUser()
    if (!user) {
        redirect("/login")
    }
    return (
      <div className="h-screen relative w-screen flex justify-center items-center flex-col">    
                  {user.labels.includes("ORGANISER") && <Link href="/create-event" className="flex justify-center rounded-full font-semibold fixed bottom-10 right-4 p-3 bg-blue-500/70"><PlusIcon className="text-white/80" size={35}/></Link> } 
      {user.labels.includes("ORGANISER") ? <p>you are a Organiser</p> :<p>you are a User</p>}
      <form action={logout}>
      <button type="submit"><Button variant="outline">
            Sign out
          </Button></button>
      </form>
      </div>
    ); 
}
