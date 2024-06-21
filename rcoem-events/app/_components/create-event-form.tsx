"use client"

import { Button } from "@/components/ui/button"
import { EventSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useTransition } from "react"
import { createEvent, upload } from "@/actions/event"
import { UploadButton } from "@/utils/uploadthing"
import { redirect } from "next/navigation"
export function EventForm() {
    const [isPending, startTransition] = useTransition()
    const [image, setImage] = useState("/Penguins.jpg")
    const [error , setError] = useState<string | undefined>("")
    const form = useForm<z.infer<typeof EventSchema>>({
        resolver: zodResolver(EventSchema),
        defaultValues: {
            title: "",
            descr :"",
            date:"",
            fees : "",
        },
      })

       function onSubmit(values: z.infer<typeof EventSchema>) {
        setError("")
        if (image == "/Penguins.jpg") {
          return setError("File is required")
        }
        startTransition(()=>{
            createEvent(values).then(data=>{
                if(data?.error) setError(data.error)
                  if(data?.id) {
                    upload(data.id,image).then(res=>res)
                  }
            })
        })
        console.log(values)
      }
    return(
        <div className="w-[80%] flex flex-col gap-y-8 justify-center items-center">
 <Form {...form}>
    <h1 className="text-2xl mb-3 text-white/80 font-bold">Create Event</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Ziiiimab" disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="descr"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea className="resize-none" disabled={isPending} placeholder="Enter details about event..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start</FormLabel>
              <FormControl>
                <Input type="date" required disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fees"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registration fee</FormLabel>
              <FormControl>
                <Input disabled={isPending} type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImage(res[0].url)
          setError("")
        }}
        onUploadError={(error: Error) => {
          setError(`ERROR! ${error.message}`);
        }}
      />
        <div className="text-red-400">{error}</div>
      <Image 
      src={image}
      className="w-full aspect-square"
      width={20}
      height={20}
      alt="Img"
      />
        <Button className="bg-blue-500/70 font-semibold tracking-wide px-7  text-white" disabled={isPending} type="submit">Create</Button>
      </form>
    </Form>
        </div>
    )
}