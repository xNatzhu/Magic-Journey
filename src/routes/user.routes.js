import {Router} from "express";
import {validator} from "../middlewares/validator.js"
import { generateToken } from "../middlewares/token.js";
import signupSchema from "../joi_Schemas/sign_up.js";
import { signIn, signup } from "../controllers/user.controllers.js";
const router = Router();

router.post("/signup",validator(signupSchema), signup)
router.post("/signin",generateToken, signIn)



export default router