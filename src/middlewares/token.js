import jwt from "jsonwebtoken"

export const generateToken = (req, res, next) =>{
    try {
        let secretKey = "ClaveDeUsuariosDeItinerarios";
        let token = jwt.sign({email:req.body.email}, secretKey);
        req.token = token
        next()
        
    } catch (error) {

        res.status(500).json({
            status:500,
            msg: "No se pudo realizar el token",
            error,
        });
    }
}