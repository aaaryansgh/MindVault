import mongoose from "mongoose";
const ContentSchema=new mongoose.Schema(
    {
        type:{
            type:String,
        },
        title:{
            type:String,
        },
        link:{
            type:String,
        },
        tags:[{
            type:mongoose.Types.ObjectId,
            ref:"Tags"
        }],
        userId:{
            type:mongoose.Types.ObjectId,
            ref:"User"
        }
    }
)
const Content=mongoose.model("Content",ContentSchema);
export default Content;