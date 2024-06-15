"use client"
import {createOrganiser} from "@/actions/organiser"
import { Button } from "@/components/ui/button"
import { OrganiserSchema } from "@/schemas"
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
export function OrganiserRegisterForm() {
    const [isPending, startTransition] = useTransition()
    const [error , setError] = useState<string | undefined>("")
    const form = useForm<z.infer<typeof OrganiserSchema>>({
        resolver: zodResolver(OrganiserSchema),
        defaultValues: {
            name: "",
            email :"",
            bio:"",
            password:""
        },
      })

       function onSubmit(values: z.infer<typeof OrganiserSchema>) {
        setError("")
        startTransition(()=>{
          createOrganiser(values).then(data=>{
                if(data?.error) setError(data.error)
            })
        })
        
        console.log(values)
      }
    return(
        <div className="w-[80%] flex flex-col gap-y-8 justify-center items-center">
 <Form {...form}>
    <h1 className="text-2xl mb-3 text-white/80 font-bold">Organiser</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" required disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea className="resize-none" required disabled={isPending} placeholder="Tell something about your organisation..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="johndoe@gmail.com" required disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input disabled={isPending} required type="password" {...field} />
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
        <Button className="bg-blue-500/70 font-semibold tracking-wide px-7  text-white" disabled={isPending} type="submit">Register</Button>
      </form>
    </Form>
        </div>
    )
}