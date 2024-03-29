import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = nextAuth({
    providers: [
        CredentialsProvider({
            name:"Email",
            credentials:{
                email:{ label:"Email", type:"email", placeholder:"Email",},
                password:{label:"Password",type:"password",placeholder:"Password",},
            },
            async authorize(credentials:any){

                return {
                    id:"user1"
                }
            },
        })
    ],
    secret: process.env.SECRET,
});
export const GET = handler;
export const POST = handler;