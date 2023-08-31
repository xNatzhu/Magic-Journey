import {Router} from "express";
import { addItinerary, getItineraries, getItinerary, removeItinerary, updateItinerary } from "../controllers/itinerary.controllers.js";
const router = Router();

router.get("/itinerary", getItineraries) // listado de itenerarios
router.get("/itinerary/:id", getItinerary) // 
router.post("/itinerary", addItinerary) // creacion de itenerario
router.delete("/itinerary/:id", removeItinerary) // eliminacion de un itenerario
router.put("/itinerary/:id", updateItinerary) // actualizacion de un itenerario

export default router