import type { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
export const UserAuth=async(req:Request,res:Response,next:NextFunction)=>{
    const cookie=req.cookies;
    const token=cookie.token;
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    const validtoken=await jwt.verify(token,"secondBrain2827");
    //@ts-ignore
    const{id}=validtoken;
    const user=await User.findById(id);
    if(!user){
        return res.status(401).json({message:"Please login"});
    }else{
        //@ts-ignore
        req.user=user;
        next();
    }
}