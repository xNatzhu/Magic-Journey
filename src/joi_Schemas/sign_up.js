import Joi from "joi";
import  JoiPwd  from "joi-password-complexity";
//validation
const signupSchema = Joi.object({
    name:Joi.string().required().min(3).max(25),
    password: JoiPwd(
        {
            min: 6,
            max: 26,
            lowerCase: 0,
            upperCase: 0,
            numeric: 1,
            symbol: 0,
            requirementCount: 2,
          }
    ),
    email: Joi.string().required().email(),
    img: Joi.string().uri(),
    rol:Joi.string(),
    bio: Joi.string()
})

export default signupSchema