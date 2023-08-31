import itineraryModel from "../models/itinerary.model.js";

export const getItineraries = async (req, res)=>{
    try {
        const itinerarySearch = await itineraryModel.find()
        if(!itineraryModel){
            res.status(404).json({msg:"No se encontro en la base de datos itenerarios"})
        }
        res.json(itinerarySearch);
    } catch (error) {
        res.status(500).json({msg:"No se pudo buscar los itenerarios"})
    }
}


export const addItinerary = async(req,res) =>{
    try {
        const {name, author, authorImg, city, img, description, price, like} = req.body
        const itineraryCreate = await itineraryModel.create({
            name, author, authorImg, city, img, description, price, like
        })
        res.json(itineraryCreate);
    } catch (error) {
        res.status(500).json({msg:"No se pudo crear el Itinerario"})
    }
}