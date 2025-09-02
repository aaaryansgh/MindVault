import mongoose from "mongoose";

const URl="mongodb+srv://singharyan1817_db_user:LKrXBpKEvGfEcIT5@cluster0.6hma1cn.mongodb.net/secondBrainDB"

export const connectDB=async()=>{
    try{
        await mongoose.connect(URl);
    }catch(err){
        console.log(err);
    }
}
