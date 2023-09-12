
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
        res.status(201).json({
            status:201,
            msg: "La cuenta se creo correctamente",
            response:createUser
        });


    } catch (error) {
        res.status(500).json({ msg: "Hubo un problema al crear la cuenta"});
        console.log(error);
    }
}

export const signIn = async (req, res)=>{
    try {
        const {email, password } = req.body

        const findUser = await userModel.findOne({email})
        console.log("Probando",findUser);
        
        if(!findUser){
            return res.status(400).json({msg:"Dato ingresado incorrecto"})
        }

        const passCompare = await bcryptjs.compare(password, findUser.password); 

        if(!passCompare){
            return res.status(400).json({msg:"Dato ingresado incorrecto"})
        }

        console.log("comparacion", passCompare);
        return res.send("Ingreso correctamente")


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un problema al ingresar a la cuenta"});
        
    }
}





