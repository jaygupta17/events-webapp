import { EventForm } from "@/app/_components/create-event-form";
import { getLoggedInUser } from "@/appwrite/config";
import { redirect } from "next/navigation";

export default async function page() {
    const user = await getLoggedInUser()
    if(user && !user.labels.includes("ORGANISER")) {
        redirect("/")
    }
    return(
        <div className="flex justify-center items-center flex-col">
            <EventForm/>
        </div>
    )
}