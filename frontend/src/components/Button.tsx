import type { ReactElement } from "react";

type Variants="primary"|"secondary"|"ternary"|"success";
interface ButtonProps{
    variant:Variants;
    size:"sm"|"md"|"lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    onClick?:()=>void;
    loading?:boolean;
    onChange?:()=>void;
}

const variantStyle={
    primary:"bg-pink-900 text-white",
    secondary:"bg-gray-50 text-black",
    ternary:"bg-black text-white",
    success:"bg-green-700 text-white"
}
const sizeStyle={
    sm:"py-1 px-2 text-sm",
    md:"py-2 px-4 text-md",
    lg:"py-4 px-6 text-lg"
}
const defaultStyle="rounded-md p-2 m-3 cursor-pointer flex items-center"
export const Button=(props:ButtonProps)=>{
    return <button onClick={props.onClick} className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]} ${props.loading?" opacity-45":""}`} disabled={props.loading}>
        {props.startIcon?<div className="px-2 bg-gree" >{props.startIcon}</div>:null}{props.text}
        </button>
}
