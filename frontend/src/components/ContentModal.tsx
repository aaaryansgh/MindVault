import { useRef, useState } from "react";
import { Crossicon } from "../Icons/Crossicon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
enum contentType{
    Youtube="youtube",
    Tweet="tweet"
}

export function ContentModal({open,onClose}){
    const titleRef=useRef<HTMLInputElement>(null);
    const linkRef=useRef<HTMLInputElement>(null);
    const [type,setType]=useState(contentType.Youtube)
    const [isAdded,setAdded]=useState(false);
    async function addContent(){
        const title=titleRef.current?.value;
        const link=linkRef.current?.value;
        const response=await axios.post(`${BACKEND_URL}/api/v1/content`,{
            type,
            title,
            link
        },{withCredentials:true})
        if(response){
            setAdded(true);
        }

    }
    return <div>
        {open&&<div className="w-screen h-screen bg-slate-500 opacity-95 fixed top-0 left-0  flex justify-center">
                <div className="flex flex-col justify-center py-2">
                    <span className="bg-white opacity-100 text-black p-4 rounded">
                        <div className="mb-2 flex justify-end cursor-pointer" onClick={onClose}><Crossicon /></div>
                        <div className="flex flex-col gap-1">
                            <Input ref={titleRef} placeholder={"Title"} />
                            <Input ref={linkRef} placeholder={"Link"}/>
                        </div>
                        <div className=" flex gap-1">
                            <Button size="md" text="youtube" variant={type===contentType.Youtube?"ternary":"secondary"} onClick={()=>{setType(contentType.Youtube)}} />
                            <Button size="md" text="tweet" variant={type===contentType.Tweet?"ternary":"secondary"} onClick={()=>{setType(contentType.Tweet)}} />
                        </div>
                        {isAdded&&<div className="flex justify-center"><Button size="md" variant="success" text="Content Added!"/></div>}
                        {!isAdded&&<div className="flex justify-center"><Button size="md" variant="primary" text="Submit" onClick={addContent}/></div>}
                    </span>
                </div>
            </div>}
    </div>
}
