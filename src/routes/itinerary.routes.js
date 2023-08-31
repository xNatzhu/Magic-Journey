import {Router} from "express";
import { addItinerary, getItineraries } from "../controllers/itinerary.controllers.js";
const router = Router();

router.get("/itinerary", getItineraries) 
router.post("/itinerary", addItinerary) // creacion de itenerario
//router.delete("/itinerary/:id", removeCity) // eliminacion de un itenerario
//router.put("/itinerary/:id", updateCity) // actualizacion de un itenerario

export default router