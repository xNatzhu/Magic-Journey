import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Natzu:Control2011@cluster0.6azh3bk.mongodb.net/"); //Conexion de DB;
        console.log("CONEXION DB EXITOSA"); //test
    } catch (error) {
        throw new Error("An error occurred while connecting to the database.");
    }
}

export { connectDB }
