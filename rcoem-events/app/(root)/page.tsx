import { createAdminClient, getLoggedInUser } from "@/appwrite/config";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { EventCard } from "../_components/event-card";
import { Query } from "node-appwrite";
import { dateToGood } from "@/lib/utils";


export default async function page() {
    
    const user = await getLoggedInUser()
if(!user) redirect("/login")
    const {db}= await createAdminClient()
    const events =await db.listDocuments(process.env.NEXT_APPWRITE_DB!,process.env.NEXT_APPWRITE_EVENTS!,[
        Query.orderDesc('createdAt')
    ]) ;
    return(
        <div className="flex justify-center items-center gap-y-2 py-4 flex-col">
            {user.labels.includes("ORGANISER") && <Link href="/create-event" className="flex justify-center rounded-full font-semibold fixed bottom-10 right-4 p-3 bg-blue-500/70"><PlusIcon className="text-white/80" size={35}/></Link> }
            <div className="h-full w-[90%] flex flex-col md:flex-wrap md:flex-row md:gap-x-4 justify-center gap-y-8 items-center">
                {events.documents[0] && events.documents.map(event=>(
                    <EventCard key={event.$id} url="/" fees={event.fees} date={dateToGood(event.date)} title={event.title} organiser={event.organiser.name} image="ee"/>
                )) }
            </div>
        </div>
    )
}