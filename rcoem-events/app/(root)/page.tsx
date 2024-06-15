import { getLoggedInUser } from "@/appwrite/config";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page() {
    const user = await getLoggedInUser()
    if(!user) redirect("/login")
    return(
        <div className="h-[90dvh] flex justify-center items-center gap-y-2 flex-col">
            {user.labels.includes("ORGANISER") && <Link href="/create-event" className="flex justify-center rounded-full font-semibold fixed bottom-10 right-4 p-3 bg-blue-500/70"><PlusIcon className="text-white/80" size={35}/></Link> }
            <div className="h-full  w-[90%] flex justify-center items-center">
                Nothing to see here...
            </div>
        </div>
    )
}