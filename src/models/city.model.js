import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
})

export default mongoose.model("City", citySchema)