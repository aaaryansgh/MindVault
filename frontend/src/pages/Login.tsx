import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signin(){
    const usernameRef=useRef<HTMLInputElement>(null);
    const passwordref=useRef<HTMLInputElement>(null);
    console.log(usernameRef);
    const navigate=useNavigate();
    async function signin(){
        const username=usernameRef.current?.value;
        const password=usernameRef.current?.value;
        const response=await axios.post(`${BACKEND_URL}/api/v1/login`,{
                username,
                password
        },{withCredentials:true})
        if(response){
            navigate("/dashboard");
        }
    }
    
    return(
        <div className="h-screen w-screen bg-black flex justify-center items-center">
            <div className="bg-white rounded min-w-48 p-8 flex flex-col gap-2">
                <Input ref={usernameRef} placeholder="username" />
                <Input ref={passwordref} placeholder="password" />
                <div className="flex justify-center">
                    <Button onClick={signin} variant="primary" text="Signin" size="md" />
                </div>
            </div>
        </div>
    )
}