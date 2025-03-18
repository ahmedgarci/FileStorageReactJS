import axios from "axios"
import { RegisterRequest } from "../Types/Requests/Auth/RegisterRequest";
import { AuthRequest } from "../Types/Requests/Auth/AuthRequest";
import { AuthResponse } from "../Types/Responses/AuthType";

class AuthService{

    static JavaBasePath:string = "http://localhost:8090/api/v1/authentication"

    async Register(user:RegisterRequest):Promise<void>{
        try{
            const response = await axios.post(`${AuthService.JavaBasePath}/register`,user)
            console.log(response);
        }catch(e){
            console.log(e);
            throw new Error("error occured while registring the user ")            
        }
    }

    async Authenticate(user:AuthRequest):Promise<AuthResponse>{
        try{
            const response = await axios.post(`${AuthService.JavaBasePath}/authenticate`,user,{withCredentials:true})
            console.log(response.data);
            return {
                jwt:response.data,
                expiration: new Date(),
                username:"ahmed garci"
            }
        }catch(e){
            console.log(e);
            throw new Error("error occured while registring the user ")            
        }
    }

    async Logout(token:string):Promise<void>{
        try{
            const response = await axios.post(`${AuthService.JavaBasePath}/logout`,null,{headers:{"Authorization":`Bearer ${token}`}})
            console.log(response.data);
        }catch(e){
            console.log(e);
            throw new Error("error occured while registring the user ")            
        }
    }
}

export default new AuthService();