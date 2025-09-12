import mongoose from "mongoose";


const LinkSchema=new mongoose.Schema({
    hash: String,
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    }
})

const Link=mongoose.model("Link",LinkSchema);
export default Link;