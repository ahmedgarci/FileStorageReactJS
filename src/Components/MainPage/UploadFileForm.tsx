import React, { useState } from "react";
import { Input } from "../UI/Input";
import FileService from "../../Services/FileService";
import { UploadFileRequest } from "../../Types/Requests/Files/UploadFileRequest";
import { AuthResponse } from "../../Types/Responses/AuthType";
import { useSelector } from "react-redux";
import { RootState } from "../../State/Store";
import { Button } from "../UI/Button";

export default function UploadFileForm() {
    const [request,setRequest] = useState<UploadFileRequest>({form:undefined,title:undefined})
    const [loading,setIsLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>()
    const auth:AuthResponse = useSelector((state:RootState)=>state.auth)
    function inittFormData(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e);
  //      const file;
        const Formdata = new FormData();
  //      Formdata.append("file",file) 
        setRequest({...request,form:Formdata})
    }

    const HandleUploadFile = (e:React.ChangeEvent<HTMLInputElement>)=>{
        inittFormData(e)
        try {
           const response = FileService.UploadNewFile(request,auth.jwt!)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
                <h2 className="text-xl font-semibold">Upload new File</h2>
                <hr/>
            <div className="flex flex-col items-center gap-4 mt-6" >
                <Input
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>setRequest({...request,title:e.target.value})}
                    style="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    textToDisplay="File title"
                />
                <Input
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>setRequest({...request,title:e.target.value})}
                    style="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    textToDisplay="File title"
                />
                
                <Button
                    style="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
                    textToDisplay="upload" />
            </div>
            
        </>
    )


}