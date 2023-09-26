import {configureStore} from "@reduxjs/toolkit";
import citiesReducer from "./reducers/city.js";
import itineraryReducer from "./reducers/itinerary.js";
import userReducer from "./reducers/login.js";
// store -> almacen donde van estar nuestros estados

export const store = configureStore({
    //el configure store va almacenar un objeto en la cual va tener lo siguiente:
    //reducer: este estado va estar controlando mis estados
    reducer:{
        citiesReducer,
        itineraryReducer,
        userReducer
    }
    //ya con esto ya estaria configurado para que va implementar

});