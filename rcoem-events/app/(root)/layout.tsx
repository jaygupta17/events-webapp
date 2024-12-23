import type { Metadata } from "next";
import "../globals.css";
import { getLoggedInUser } from "@/appwrite/config";
import { redirect } from "next/navigation";
import { Header } from "../_components/header";
import "@uploadthing/react/styles.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getLoggedInUser()
  if(!user) redirect("/login")
  return (
    <div>
        <Header/>
        {children}
    </div>
  );
}
