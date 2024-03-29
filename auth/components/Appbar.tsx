"use client";
import { signIn, signOut } from "next-auth/react";

import { useRouter } from "next/navigation";
export function Appbar(){
    const router = useRouter();
    return(
        <div>
            <button onClick={()=>{signIn()}}>Signin</button>
            <button onClick={()=>{signOut()}}>Signout</button>
        </div>
    )
}