import { OrganiserRegisterForm } from "@/app/_components/organiser-register";
import { getLoggedInUser } from "@/appwrite/config";
import { redirect } from "next/navigation";
 export default async function page(){
    const user = await getLoggedInUser()
    if (user) {
        redirect("/profile")
    }
    return(
        <div className="h-screen w-screen flex justify-center items-center flex-col">
            <OrganiserRegisterForm/>
        </div>
    )
}