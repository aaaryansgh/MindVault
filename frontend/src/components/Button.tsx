import type { ReactElement } from "react";

type Variants="primary"|"secondary";
interface ButtonProps{
    variant:Variants;
    size:"sm"|"md"|"lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    onClick:()=>void;
}

const variantStyle={
    primary:"bg-purple-700 text-white",
    secondary:"bg-purple-300 text-white"
}
const sizeStyle={
    sm:"py-1 px-2 text-sm",
    md:"py-2 px-4 text-md",
    lg:"py-4 px-6 text-lg"
}
const defaultStyle="rounded-md p-2 m-3 cursor-pointer flex"
export const Button=(props:ButtonProps)=>{
    return <button className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]}`}>
        {props.startIcon?<div className="py-1 px-1">{props.startIcon}</div>:null}{props.text}
        </button>
}

<Button variant="primary" size="md" onClick={()=>{}} text={"asd"}/>