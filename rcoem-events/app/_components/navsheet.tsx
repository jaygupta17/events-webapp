"use client"
import { Separator } from "@/components/ui/separator"
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
      } from "@/components/ui/dropdown-menu"
      
import { HomeIcon, Info, MenuIcon, User, User2Icon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"




  export function NavSheet() {
    const path = usePathname()
    return(
        <DropdownMenu>
   <DropdownMenuTrigger asChild>
          <MenuIcon size={40}/>
      </DropdownMenuTrigger>
  <DropdownMenuContent className="ml-3">
                   <DropdownMenuLabel className="font-semibold">
                   <Link href="/" className={"/"==path? "text-white/90 text-xl flex gap-x-2" : "text-xl text-white/70 flex gap-x-2" }>
                       <HomeIcon/> Home
                    </Link>
                </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>
                   <Link href="/profile" className={"/profile"==path? "text-white/90 text-xl flex gap-x-2 " : "text-xl text-white/70 flex gap-x-2" }>
                       <User/> Profile
                    </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                  <DropdownMenuLabel>
                   <Link href="/about" className={"/about"==path? "text-white/90 text-xl flex gap-x-2" : "text-xl text-white/70 flex gap-x-2" }>
                       <Info/> About
                    </Link>
                </DropdownMenuLabel>
  </DropdownMenuContent>
        </DropdownMenu>
    )
  }
                {/* */}

      {/* */}