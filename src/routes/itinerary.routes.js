import {Router} from "express";

const router = Router();

router.get("/itinerary", getCitys) // listado de eventos
router.get("/itinerary/:id", getCity) //evento especifico por medio de id
router.post("/itinerary", addCity) // creacion de evento
router.delete("/itinerary/:id", removeCity) // eliminacion de un evento
router.put("/itinerary/:id", updateCity) // actualizacion de un evento

export default router