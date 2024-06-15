import type { Metadata } from "next";
import "../globals.css";
import { getLoggedInUser } from "@/appwrite/config";
import { redirect } from "next/navigation";
import { Header } from "../_components/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  );
}
