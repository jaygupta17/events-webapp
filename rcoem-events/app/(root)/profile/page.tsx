import { OrganiserProfile } from "@/app/_components/organiser-profile";
import { createAdminClient, getLoggedInUser } from "@/appwrite/config";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {

  let organiser;
  const user = await getLoggedInUser()
    if (!user) {
        redirect("/login")
    }
    if (user.labels.includes("ORGANISER")) {
      const {db}= await createAdminClient()
    organiser =await db.getDocument(process.env.NEXT_APPWRITE_DB!,process.env.NEXT_APPWRITE_ORGANISER!,user.$id) ;
    console.log(organiser);
    }
    return (
      <div className="py-9  relative w-screen flex justify-center items-center flex-col">    
                  {user.labels.includes("ORGANISER") && <Link href="/create-event" className="flex justify-center rounded-full font-semibold fixed bottom-10 right-4 p-3 bg-blue-500/70"><PlusIcon className="text-white/80" size={35}/></Link> } 
                  {user.labels.includes("ORGANISER") ? <OrganiserProfile events={organiser!.events} name={organiser!.name} email={organiser!.email} bio={organiser!.bio} img={organiser!.img || "/Penguins.jpg"}/> :<p>you are a User</p>}      
      </div>
    ); 
}
