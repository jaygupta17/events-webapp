"use client"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Building, Building2, Calendar } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
  

interface EventCardProps{
    title:string;
    organiser: string;
    date: string;
    img:string;
    fees:number
}

export function EventCard({title,organiser,date,img,fees}: EventCardProps) {

    return(
        <div className="flex w-[90%] md:w-[40%] rounded-[20px] overflow-hidden">
            <Card className="w-full rounded-[20px]">
                    <Image
                        src={img || "/Penguins.jpg"}
                        alt="Penquin"
                        width={500}
                        height={100}
                        className="w-full"
                    />
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        <div>{title}</div>
                        <div className={fees? "px-3 py-1 text-[14px] tracking-normal rounded-[20px]" : "px-3 py-1 text-[14px] tracking-normal bg-green-600 rounded-[20px]"}>{fees ? <span>&#8377; {fees+"/-"}</span> : "free"}</div>
                    </CardTitle>
                    <CardDescription className="flex gap-x-2">{organiser}</CardDescription>
                    <CardDescription className="pt-3 flex gap-x-2 text-[16px]"><Calendar size={20}/> {date}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button variant="default" className="text-white"><Link href="/">Register</Link></Button>
                </CardFooter>
            </Card>
        </div>
    )
}