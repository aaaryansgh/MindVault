import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import {connectDB} from './db/db.js';
import User from './models/User.js';
import { UserAuth } from './middleware/auth.js';
import Content from './models/Content.js';
import cookieParser from 'cookie-parser';
import Link from './models/Link.js';
import { random } from './utils.js';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));


app.post("/api/v1/signup",async(req,res)=>{
    const{username,password}=req.body;
    //hash the password using bcrypt
    try{
        const user=await new User({
        username,
        password
    })
    await user.save();
    res.status(200).json({message:"User signed up successfully"});
    
    }catch(err){
        res.status(411).json({message:"User already exists"});
    }  
})

app.post("/api/v1/login",async(req,res)=>{
    const{username,password}=req.body;
    try{
        const user=await User.findOne({username});
        if(!user){
            return res.status(401).json({message:"User not found"});
        }
        if(user.password!==password){
            return res.status(401).json({message:"Invalid credentials"});
        }
        const token=jwt.sign({id:user._id},"secondBrain2827",{expiresIn:"7d"})
        res.cookie("token",token);
        res.status(200).json({message:"User logged in successfully",token});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
})

app.post("/api/v1/content",UserAuth,async(req,res)=>{
    const{title,link,type}=req.body;
    //@ts-ignore
    const user=req.user;
    const contents=await new Content({
        type,
        title,
        link,
        userId:user._id,
        tags:[]
    })
    await contents.save();
    res.status(200).json({message:"Content added successfully"});

})
app.get("/api/v1/content",UserAuth,async(req,res)=>{
    //@ts-ignore
    const {user}=req;
    try{
        const content=await Content.find({
        userId:user._id
    }).populate("userId","username")
    res.status(200).json({content});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
})
app.delete("/api/v1/content/:id",UserAuth,async(req,res)=>{
    const{id}=req.params;
    await Content.findByIdAndDelete(id);
    res.status(200).json({message:"Content deleted successfully"});
})

app.post("/api/v1/brain/share",UserAuth,async(req,res)=>{
    const{share}=req.body;
    //@ts-ignore
    const user=req.user;
    let hash=null;
    if(share){
        const existingLink=await Link.findOne({
            userId:user._id
        })
        if(existingLink){
            res.json({hash:existingLink.hash})
            return;
        }
        hash=random(15);
        await Link.create({
            userId:user._id,
            hash:hash
        })
    }else{
       await Link.deleteOne({userId:user})
       res.json({message:"link has been removed"})
    }
    res.json({message:"share/"+hash})

})
app.get("/api/v1/brain/:shareLink",async(req,res)=>{
    //@ts-ignore
    const hash=req.params.shareLink;
    const link=await Link.findOne({hash:hash});
    if(!link){
        res.status(411).json({message:"Incorrect link"});
    }
    const content=await Content.find({
        userId:link?.userId
    })
    const user=await User.findOne({
        _id:link?.userId
    })
    res.json({
        username:user?.username,
        contents:content
    })
})

connectDB().then(()=>{
    app.listen(3000,()=>{console.log("Server is running on port 3000");
    })
    console.log("DB connected successfully");
})