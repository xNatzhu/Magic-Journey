
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
        if(!findUser){
            return res.status(400).json({msg:"Dato ingresado incorrecto"})
        }

        const passCompare = await bcryptjs.compare(password, findUser.password); 
        if(!passCompare){
            return res.status(400).json({msg:"Dato ingresado incorrecto"})
        }

        //generete token

        res.status(200).json({
            status:200,
            msg: "Se ingreso correctamente",
            token:{
                token:req.token
            },
            user:{
                id:findUser._id,
                email:findUser.email,
                name:findUser.name,
                img: findUser.img,
                country:findUser.country,
                bio:findUser.bio,
                role:findUser.rol
            },
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un problema al ingresar a la cuenta"});
        
    }
}





