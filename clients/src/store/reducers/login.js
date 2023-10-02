import { createReducer } from "@reduxjs/toolkit";
import { post_user } from "../actions/login";
import { loginOut } from "../actions/loginOut";
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
    return builder
    
    .addCase(post_user.fulfilled,(state,action)=>{
        const newState ={...state, user:action.payload}
        return newState
    })

    .addCase(loginOut, (state) => {
        return initialStore;
      });

})


export default userReducer