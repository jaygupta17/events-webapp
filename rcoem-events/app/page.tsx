import Image from "next/image";
import { LoginForm } from "./_components/login-form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-neutral-800">
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
}
