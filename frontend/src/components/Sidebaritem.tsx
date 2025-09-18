import type { ReactElement } from "react";

interface Sidebarprops{
    text:string,
    icn:ReactElement
}
export function Sidebaritem(props:Sidebarprops){
    return(
        <div className="flex cursor-pointer hover:bg-pink-800 rounded w-53 transition-all duration-200">
            <div className="p-1.5 mt-0.5">{props.icn}</div>
            <div className="p-1.5">{props.text}</div>
        </div>
    )
}