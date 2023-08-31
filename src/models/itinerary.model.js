import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
        default: 'Agustin Saravia'
    },
    authorImg:{
        type:String,
        required:true,
        default: 'https://avatars.githubusercontent.com/u/87948201?v=4'
    },
    city:{
        type: mongoose.Schema.Types.ObjectId, // HACE REFERENCIA QUE NECESITAMOS EL ID QUE SE ENCUENTRA EN EL OTRO MODELO ESTAMOS REFERENCIANDO
        ref:"City", //la tabla donde se encuentra
    },
    img:{
        type:String,
        required:true,
        default:"none"
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
        default: 0
    },
},{
    timestamps: true
})

export default mongoose.model("itinerary", itinerarySchema)