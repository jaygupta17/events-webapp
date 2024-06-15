import { logout } from "@/actions/logout";

export default async function Home() {
    return (
      <div className="h-screen w-screen flex justify-center items-center flex-col">     
      <form action={logout}>
          <button type="submit" className="px-4 py-1 mt-2 rounded-md bg-neutral-600 text-white font-semibold">
            Sign out
          </button>
      </form>
      </div>
    ); 
}
