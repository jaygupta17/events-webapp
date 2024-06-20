"use client"
import Link from "next/link";
import { NavSheet } from "./navsheet";
import { ModeToggle } from "./toogle-theme";
import { usePathname } from "next/navigation";


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
                <ModeToggle/>
            </div>
        </div>
    )
}