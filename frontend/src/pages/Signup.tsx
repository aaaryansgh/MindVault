import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
export function Signup(){
    const usernameRef=useRef<HTMLInputElement>(null);
    const passwordref=useRef<HTMLInputElement>(null);
    console.log(usernameRef);
    const navigate=useNavigate();
    async function singup(){
        const username=usernameRef.current?.value;
        const password=usernameRef.current?.value;
        const response=await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                username,
                password
        })
        if(response){
            navigate("/login");
        }
    }
    return(
        <div className="h-screen w-screen bg-black flex justify-center items-center">
            <div className="bg-white rounded min-w-48 p-8 flex flex-col gap-2">
                <Input ref={usernameRef} placeholder="username" />
                <Input ref={passwordref} placeholder="password" />
                <div className="flex justify-center">
                    <Button loading={false} variant="primary" text="Signup" size="md" onClick={singup} />
                </div>
            </div>
        </div>
    )
}