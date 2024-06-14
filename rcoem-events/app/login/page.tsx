import { getLoggedInUser } from "@/appwrite/config";
import { LoginForm } from "../_components/login-form";
import { redirect } from "next/navigation";
import { signUpWithGoogle } from "@/actions/oauth";

 export default async function page(){
    const user = await getLoggedInUser()
    if (user) {
        console.log(user);
        redirect("/profile")
    }
    return(
        <div className="h-screen w-screen flex justify-center items-center flex-col bg-neutral-800">
            <LoginForm/>
            <form action={signUpWithGoogle}>
                <button type="submit">Sign up with GitHub</button>
            </form>
        </div>
    )
}