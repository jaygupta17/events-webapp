import { RegisterForm } from "../_components/register-form";

 export default function page(){
    return(
        <div className="h-screen w-screen flex justify-center items-center flex-col bg-neutral-800">
            <RegisterForm/>
        </div>
    )
}