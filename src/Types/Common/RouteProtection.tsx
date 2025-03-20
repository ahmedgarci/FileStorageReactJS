import React from "react";
import { AuthResponse } from "../Responses/AuthType";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    user:AuthResponse|null,
    children:React.ReactNode
}

const ProtectedRoute = ({user,children}:ProtectedRouteProps)=>{
    if(! user?.jwt){
        return <Navigate to={"/"}/>
    }
    return <>{children}</>
}

export {ProtectedRoute}
