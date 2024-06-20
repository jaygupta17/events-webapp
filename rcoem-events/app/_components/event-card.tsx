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
    image:string;
    date: string;
    url:string
}

export function EventCard({title,organiser,image,date,url}: EventCardProps) {

    return(
        <div className="flex w-[90%] md:w-[40%] rounded-[20px] overflow-hidden">
            <Card className="w-full rounded-[20px]">
                    <Image
                        src="/Penguins.jpg"
                        alt="Penquin"
                        width={500}
                        height={100}
                        className="w-full"
                    />
      
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="flex gap-x-2">{organiser}</CardDescription>
                    <CardDescription className="pt-3 flex gap-x-2 text-[16px]"><Calendar size={20}/> {date}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button variant="default"><Link href="/">Register</Link></Button>
                </CardFooter>
            </Card>
        </div>
    )
}