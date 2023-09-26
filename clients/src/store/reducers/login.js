import { createReducer } from "@reduxjs/toolkit";
import { post_user } from "../actions/login";
//el estado inicial que va tener este estado
const initialStore = {
    user:[]
}
const userReducer = createReducer(initialStore, (builder)=>{
    return builder.addCase(post_user.fulfilled,(state,action)=>{
        const newState ={...state, user:action.payload.user}
        return newState
    })

})

export default userReducer