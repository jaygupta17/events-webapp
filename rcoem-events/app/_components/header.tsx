import { NavSheet } from "./navsheet";
import { ModeToggle } from "./toogle-theme";

export function Header() {
    return(
        <div className="h-[10dvh]">
            <div className="h-full w-full flex justify-between items-center px-3">
                <NavSheet/>
                <ModeToggle/>
            </div>
        </div>
    )
}