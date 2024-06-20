"use client"

import Image from "next/image";

interface Event{
    
}
interface OrganiserProfileProps{
    name:string;
    email:string;
    img: string;
    bio:string;
    events : string[];
}
export const OrganiserProfile = ({name, email, img,bio,events} : OrganiserProfileProps) => {
    return(
        <div className="flex justify-center items-center flex-col gap-y-10">
            <div className="w-full px-9 max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    
                </div>
                <div className="flex flex-col items-center pb-10">
                    <Image width={10} height={10} className="w-24 h-24 mb-3 rounded-full shadow-lg" src={"/"+img} alt={name}/>
                    <h5 className="mb-1 text-xl font-medium text-white">{name}</h5>
                    <span className="text-sm text-gray-400">{email}</span>
                    <span className="text-sm text-gray-400">{bio}</span>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-purple-200 bg-primary">Add Event</a>
                        <a href="#" className="py-2 px-4 ms-2 text-sm font-medium focus:outline-none rounded-lg border  focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700">Edit</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-3">
                <h1>Your Events</h1>
                <div className="flex gap-y-4 flex-col items-center">
                    {events.map((event)=>(
                        <div className="w-[90vw] md:w-[70vw] flex py-2 px-4 justify-between items-cente bg-white/10">
                            <div className="flex flex-col gapy-y-1">
                                <span className="mb-1 text-xl font-medium text-white">{"Event"}</span>
                                <span className="text-sm text-gray-400">{"13 May 2019"}</span>
                            </div>
                            <div className="flex cursor-pointer text-red-500 justify-center items-center">
                                <span>Delete</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}