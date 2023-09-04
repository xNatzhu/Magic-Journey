import { createReducer } from "@reduxjs/toolkit";
import { get_itinerary } from "../actions/itinerary";
//el estado inicial que va tener este estado
const initialStore = {
    itinerary:[{
        name:"",
        author:"",
        authorImg:"",
        city:"",
        img:"",
        description:"",
        price:"",
        like:""
    }]
}

const itineraryReducer = createReducer(initialStore, (builder)=>{
//esta es un constructor que va relacionar acciones al reductor.
    //addCase es la accion que queremos añadir al reducer.  Es un metodo que recibe dos parametros

    // 1. Primero recibe un accion
    // 2. Que va realizar para modificar mi estado inicial

    return builder.addCase(get_itinerary.fulfilled,(state,action)=>{
        const newState ={...state, itinerary:action.payload.itinerary}

        return newState
    })

})

export default itineraryReducer