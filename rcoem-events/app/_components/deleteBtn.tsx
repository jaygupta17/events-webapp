"use client"
import { DeleteEvent} from "@/appwrite/config"
import { Button } from "@/components/ui/button"
import { FormEvent, useState } from "react";


export async function DeleteBtn( {id}:{id:string}) {
    const [isPending,setIsPending] =useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsPending(true)
        DeleteEvent(id).then(res=>{setIsDeleted(true);setIsPending(false)}).catch(()=>setIsDeleted(false))
    }
    return(
        <div className="flex justify-center items-center ">
            <form onSubmit={(e)=>handleSubmit(e)} >
            <Button type="submit" disabled={isDeleted} variant="ghost" className={  isDeleted?"text-white/70":"text-red-500 hover:bg-transparent hover:text-red-500"}>
                {isPending ? "Pending" : isDeleted ? "Deleted" : "Delete"}
            </Button>
            </form>
        </div>
    )
}