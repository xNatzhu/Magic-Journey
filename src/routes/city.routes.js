import {Router} from "express";
import { addCity, getCity, getCitys, removeCity, updateCity} from "../controllers/city.controllers.js";

const router = Router();

router.get("/citys", getCitys) // listado de ciudades
router.get("/city/:id", getCity) //ciudad especifica por medio de id
router.post("/create-city", addCity) // creacion de ciudades
router.delete("/city/:id", removeCity) // elimina una ciudad
router.put("/city/:id", updateCity) // actualiza una ciudad

export default router


