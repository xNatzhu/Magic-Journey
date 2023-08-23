import express from "express";
import morgan from "morgan";
import cityRouter from "./routes/city.routes.js"
import cors from "cors";

export const app = express()
export const port = 3000
app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(morgan("dev")) 
app.use(express.json()); 


app.use("/api", cityRouter)
