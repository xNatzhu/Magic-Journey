import itineraryModel from "../models/itinerary.model.js";

export const getItineraries = async (req, res)=>{
    try {
        const itinerarySearch = await itineraryModel.find().populate("city")
        if(!itineraryModel){
            res.status(404).json({msg:"No se encontro en la base de datos itenerarios"})
        }
        res.json(itinerarySearch);
    } catch (error) {
        res.status(500).json({msg:"No se pudo buscar los itenerarios"})
    }
}
export const getItinerary = async (req, res) => {
    try {
        const { id } = req.params;
        const itinerarySearch = await itineraryModel.findById(id).populate("city") // Puedes agregar .populate aquí si es necesario;
       return  res.json(itinerarySearch); // Enviar el itinerario encontrado como respuesta
        
    } catch (error) {
        res.status(500).json({ msg: "Hubo un problema al hacer la búsqueda del itinerario"});
        console.log(error);
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

export const removeItinerary = async(req, res)=>{
    try {
        const {id} = req.params
        const itinerarySearch = await itineraryModel.findByIdAndDelete(id)
        if(!itinerarySearch){
            res.json({msg:"No se encontro ningun id para borrar"})
        }
        return res.json({ msg: "Se borró correctamente" });
    } catch (error) {
        res.status(500).json({msg:"No se pudo borrar"})
    }
}

export const updateItinerary = async(req, res)=>{
    try {
        const {id} = req.params
        const itinerarySearch = await itineraryModel.findByIdAndUpdate(id, req.body, {
            new: true // Exigimos la actualización del dato que se cargó en el body
        });
        if(!itinerarySearch){
            res.json({msg:"No se encontro ningun id para actualizar"})
        }
        return res.json({ msg: "Se actualizo correctamente" });
    } catch (error) {
        res.status(500).json({msg:"No se pudo actualizar"})
    }
}


export const likeItinerary = async (req, res) => {
  const { userId, itineraryId } = req.body;
    console.log(userId);
    console.log(itineraryId);
  try {
    const itinerary = await itineraryModel.findById(itineraryId);

    if (!itinerary) {
      return res.status(404).json({ error: 'Itinerary not found.' });
    }

    const alreadyLiked = itinerary.likes.some((like) => like.user.equals(userId));
    if (!alreadyLiked) {
      itinerary.likes.push({ user: userId });
    } else {
      itinerary.likes = itinerary.likes.filter((like) => !like.user.equals(userId));
    }
    await itinerary.save();
    return res.json(itinerary)

  } catch (error) {
    console.error('Error in likeItinerary:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};


export const itineraryforcity = async (req, res) => {
    const { idCity } = req.params;

    try {
        const itinerarySearch = await itineraryModel.find({ city: idCity }).populate("city");
        if (itinerarySearch.length === 0) {
            return res.json({ msg: "No se encontraron itinerarios para esta ciudad" });
        }

        res.json(itinerarySearch);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Hubo un problema", error });
    }
}
