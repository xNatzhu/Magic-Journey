import { createReducer } from "@reduxjs/toolkit";
import { post_user } from "../actions/login";
//el estado inicial que va tener este estado
const initialStore = {
    user:{
        token: {
            token: ""
        },
        user: {
            id: "",
            email: "",
            name: "",
            img: "",
            country: "",
            bio: "",
            role: ""
        }
    }
}
const userReducer = createReducer(initialStore, (builder)=>{
    return builder.addCase(post_user.fulfilled,(state,action)=>{
        const newState ={...state, user:action.payload}
        return newState
    })

})


export default userReducer