
import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async(req, res)=>{
    try {
        const {name, country, email, password, img} = req.body
        const hashPassword = bcryptjs.hashSync(password, 12);
        const createUser = userModel.create({
            name, 
            country, 
            email, 
            img,
            password: hashPassword,
        })
        res.status(200).json(createUser);
    } catch (error) {
        res.status(500).json({ msg: "Hubo un problema al crear la cuenta"});
        console.log(error);
    }
}