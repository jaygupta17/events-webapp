"use client"

import { Button } from "@/components/ui/button"
import { EventSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { createEvent } from "@/actions/event"
export function EventForm() {
    const [isPending, startTransition] = useTransition()
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
        startTransition(()=>{
            createEvent(values).then(data=>{
                if(data?.error) setError(data.error)
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
         {/* <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail / Poster</FormLabel>
              <FormControl>
              <Input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        {/* <FormField
          control={form.control}
          name="organiser"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden">Organiser</FormLabel>
              <FormControl>
                <Input disabled={true} className="hidden" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <div className="text-red-400">{error}</div>
        <Button className="bg-blue-500/70 font-semibold tracking-wide px-7  text-white" disabled={isPending} type="submit">Create</Button>
      </form>
    </Form>
        </div>
    )
}