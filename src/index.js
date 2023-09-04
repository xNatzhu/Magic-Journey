import {app, port} from "./app.js";
import createCities from "./config/cityCollections.js";
import createItinerary from "./config/itineraryColletions.js";
import {connectDB} from "./db.js"

connectDB()
//createCities()  //- Linea comentada ya que esta generado el mockdata de colecion 
//createItinerary() // Creacion de coleccion de itinerarios mockdata.
app.listen(port, console.log("Se esta escuchando"))