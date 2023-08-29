import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    city:{
        type: mongoose.Schema.Types.ObjectId, // HACE REFERENCIA QUE NECESITAMOS EL ID QUE SE ENCUENTRA EN EL OTRO MODELO ESTAMOS REFERENCIANDO
        ref:"City", //la tabla donde se encuentra
    },
    img:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    like:{
        type:Number,
        required:true,
    },
})

export default mongoose.model("itinerary", itinerarySchema)