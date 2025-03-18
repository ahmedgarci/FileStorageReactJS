import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthResponse } from "../Types/Responses/AuthType";

const initialState:AuthResponse={
    jwt:undefined,
    expiration:undefined,
    username:undefined
}

const authSlice = createSlice({
    name:"auth_slice",
    initialState:initialState,
    reducers:{
        SETAUTHENTICATION:(state,action:PayloadAction<AuthResponse>)=>{
            state.expiration = action.payload.expiration;
            state.jwt = action.payload.jwt;
            state.username = action.payload.username;
        },
        DELETEAUTHENTICATION:(state)=>{
            state.expiration = undefined;
            state.jwt = undefined;
            state.username= undefined;
        }
    }
})

export const {SETAUTHENTICATION,DELETEAUTHENTICATION} = authSlice.actions;
export default authSlice.reducer;