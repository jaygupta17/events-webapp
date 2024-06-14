// import React from "react";
// import PhoneLogin from "../_components/phone-form";
// import { getLoggedInUser } from "@/appwrite/config";
// import { redirect } from "next/navigation";
// export default async function RootLayout({
//    otp
// }: Readonly<{
//   otp : React.ReactNode
// }>) {

//     const user = await getLoggedInUser()
//     if (user) {
//         console.log(user);
//         redirect("/profile")
//     }
//   return (
//     <html lang="en">
//       <body>
//       <div className="h-screen w-screen flex justify-center items-center flex-col bg-neutral-800">
//             <PhoneLogin/>
            
//         </div>
//       </body>
//     </html>
//   );
// }
