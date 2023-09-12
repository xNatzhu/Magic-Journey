import {Router} from "express";
import {validator} from "../middlewares/validator.js"
import signupSchema from "../joi_Schemas/sign_up.js";
import { signup } from "../controllers/user.controllers.js";
const router = Router();

router.post("/signup",validator(signupSchema), signup)



export default router