import { createReducer } from "@reduxjs/toolkit";
import {get_city}  from "../actions/city.js"
//el estado inicial que va tener este estado
const initialStore = {
    city:[{
        name:"",
        img:"",
        country:"",
        description:""
    }]
}

const citiesReducer = createReducer(initialStore, (builder)=>{
//esta es un constructor que va relacionar acciones al reductor.
    //addCase es la accion que queremos añadir al reducer.  Es un metodo que recibe dos parametros

    // 1. Primero recibe un accion
    // 2. Que va realizar para modificar mi estado inicial

    return builder.addCase(get_city.fulfilled,(state,action)=>{
        const newState ={...state, city:action.payload.city}

        return newState
    })

})

export default citiesReducer