import { OrganiserProfile } from "@/app/_components/organiser-profile";
import { createAdminClient, getLoggedInUser } from "@/appwrite/config";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";
export default async function Home() {
  const user = await getLoggedInUser()
    if (!user) {
        redirect("/login")
    }
    if (user.labels.includes("ORGANISER")) {
      const {db}= await createAdminClient()
    const events =await db.listDocuments(process.env.NEXT_APPWRITE_DB!,process.env.NEXT_APPWRITE_EVENTS!,[
        Query.orderDesc('createdAt')
    ]) ;
    }
    return (
      <div className="py-9 relative w-screen flex justify-center items-center flex-col">    
                  {user.labels.includes("ORGANISER") && <Link href="/create-event" className="flex justify-center rounded-full font-semibold fixed bottom-10 right-4 p-3 bg-blue-500/70"><PlusIcon className="text-white/80" size={35}/></Link> } 
      {user.labels.includes("ORGANISER") ? <OrganiserProfile events={[""]} name={user.name} email="jay" bio="jay" img="jay"/> :<p>you are a User</p>}
      </div>
    ); 
}
