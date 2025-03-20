import { useEffect } from "react"
import FavoriteFilesService from "../Services/FavoriteFilesService"
import { AuthResponse } from "../Types/Responses/AuthType"
import { useSelector } from "react-redux"
import { RootState } from "../State/Store"


export default function FavoriteFilesPage(){
    const auth:AuthResponse = useSelector((state:RootState)=>state.auth);
    useEffect(()=>{
        const getData = async()=>{
        const response =     await FavoriteFilesService.getUserAllFavoriteFiles(auth.jwt!)
        console.log(response);
        }
        getData()
    },[])
    return(
        <div>
            aaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
    )
}