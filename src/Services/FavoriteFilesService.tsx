import axios from "axios"
import { AddToFavoriteRequest } from "../Types/Requests/FavoriteFiles/AddToFavoriteRequest"

class FavoriteFileService{
    private JavaBasePath:string = "http://localhost:8090/api/v1/favorite"    
    async AddToFavorite(request:number,token:string):Promise<void>{
        let a:AddToFavoriteRequest = {fileId:17}

        try {
        const response = await  axios.post(`${this.JavaBasePath}/add`,a,{headers:{"Authorization":`Bearer ${token}`,"Content-Type": "application/json",}})
        console.log(response);
        } catch (error:any) {
            console.log(error);
            throw Error(error.message)
        }
    }
    async removeFromFavorite(request:AddToFavoriteRequest,token:string):Promise<void>{
        try {
        const response = await axios.post(`${this.JavaBasePath}/delete`,request,{headers:{"Authorization":`Bearer ${token}`,"Content-Type": "application/json"}})
        console.log(response);
        } catch (error:any) {
            throw Error(error.message)
        }
    } 

    async getUserAllFavoriteFiles(token:string):Promise<void>{
        try {
        const response = await axios.get(`${this.JavaBasePath}/delete`,{headers:{"Authorization":`Bearer ${token}`}})
        console.log(response);
        } catch (error:any) {
            throw Error(error.message)
        }
    } 




}

export default new FavoriteFileService()