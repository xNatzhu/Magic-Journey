import {app, port} from "./app.js";
import createCities from "./config/cityCollections.js";
import {connectDB} from "./db.js"

connectDB()
//createCities()  - Linea comentada ya que esta generado el mockdata de colecion 
app.listen(port, console.log("Se esta escuchando"))