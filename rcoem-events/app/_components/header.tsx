"use client"
import Link from "next/link";
import { NavSheet } from "./navsheet";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";


const navLinks = [
    {
        name:"Home",
        route:"/"
    },
    {
        name:"Profile",
        route:"/profile"
    },
    {
        name:"About",
        route:"/about"
    },
    {
        name:"Contact",
        route:"/contact"
    },
]
export function Header() {
    const path = usePathname()
    return(
        <div className="h-[10dvh]">
            <div className="h-full w-full flex justify-between items-center px-3">
                <div className="hidden font-bold text-white md:flex text-3xl">
                    Events
                </div>
                <div className="md:hidden">
                <NavSheet/>
                </div>
                    <ul className="hidden gap-x-4 md:flex">
                        {navLinks.map((link)=>(
                            <li key={link.route}>
                                <Link className={path==link.route?"text-white/90 font-medium" : "font-medium text-white/50"} href={link.route}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <form action={logout}>
      <button type="submit"><Button variant="outline">
            Sign out
          </Button></button>
      </form>
            </div>
        </div>
    )
}