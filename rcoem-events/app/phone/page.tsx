import { getLoggedInUser } from "@/appwrite/config";
import { redirect } from "next/navigation";
import PhoneLogin from "../_components/phone-form";

 export default async function page(){
    const user = await getLoggedInUser()
    if (user) {
        console.log(user);
        redirect("/profile")
    }
    return(
        <div className="h-screen w-screen flex justify-center items-center flex-col bg-neutral-800">
            <PhoneLogin/>
        </div>
    )
}