import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        default:"none"
    },
    img:{
        type:String,
        default:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
    },
    email:{
        type:String,
        required:true,
        unique: true, // Establece el campo 'email' como único
    },
    password:{
        type:String,
        required:true,
    },
    rol:{
        type:String,
        default:"ROLE_USER"
    },
    bio:{
        type:String,
        default:"",
    },
},{
    timestamps:true
})

export default mongoose.model("user", userSchema)