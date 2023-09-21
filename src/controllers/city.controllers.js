import cityModel from "../models/city.model.js";
 
 export const getCitys = async(req, res)=>{
    try {
        const citySearch = await cityModel.find()
        res.json(citySearch)
        console.log(citySearch);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las ciudades" });
    }
}


export const getCityImgSlider = async (req, res) => {
    try {
        const citySearch = await cityModel.find();
        const countryObj = {};

        citySearch.forEach((city) => {
            const { country } = city;

            if (!countryObj[country]) {
                countryObj[country] = [];
            }
            countryObj[country].push(city);
        });

        res.json(countryObj); // Debes responder con countryObj en lugar de formattedCountryObj

        console.log(countryObj);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las ciudades" });
    }
}


export const getCity = async (req, res) => {
    try {
        const { id } = req.params;

        const citySearch = await cityModel.findById(id);
        if (!citySearch) {
            return res.status(404).json({ msg: "No se encontró id" });
        }
        return res.json(citySearch);

    } catch (error) {
        res.status(500).json({ error: "Error al obtener la ciudad" });
    }
};

export const addCity = async(req, res)=>{
    const {img, country, name, description} = req.body;
    try {
        const cityCreate = await cityModel.create({
                name,
                country,
                img,
                description
        })
        res.json(cityCreate)
 
    } catch (error) {
        res.status(500).json({ error: "Error al crear una ciudad" });
    }
}


export const removeCity = async(req, res)=>{
    const {id} = req.params;
    try {
        const cityDelete = await cityModel.findByIdAndDelete(id);

        if (!cityDelete) {
            return res.status(404).json({ msg: "No se encontró la ciudad" });
        }

        return res.json(cityDelete);
 
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar una ciudad" });
    }
}

export const updateCity = async(req, res)=>{
    const {id} = req.params;
    try {
        const cityUpdate = await cityModel.findByIdAndUpdate(id, req.body, {
            new: true // Exigimos la actualización del dato que se cargó en el body
        });;

        if (!cityUpdate) {
            return res.status(404).json({ msg: "No se encontró la ciudad" });
        }

        return res.json(cityDelete);
 
    } catch (error) {
        res.status(500).json({ error: "Error al editar una ciudad" });
    }
}





