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
    return builder.addCase(get_itinerary.fulfilled, (state, action) => {
        state.itinerary = action.payload; 
      });      

})

export default itineraryReducer