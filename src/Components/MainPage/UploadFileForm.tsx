import React, { useState } from "react";
import { Input } from "../UI/Input";
import FileService from "../../Services/FileService";
import { UploadFileRequest } from "../../Types/Requests/Files/UploadFileRequest";
import { AuthResponse } from "../../Types/Responses/AuthType";
import { useSelector } from "react-redux";
import { RootState } from "../../State/Store";
import { Button } from "../UI/Button";
import Loading from "../Common/Loading";

export default function UploadFileForm() {
    const [request,setRequest] = useState<UploadFileRequest>({form:undefined,title:undefined})
    const [loading,setIsLoading] = useState<boolean>(false)
    const [error,setError] = useState<string|null>(null)
    const [success,setSuccess] = useState<string|null>()
    
    const auth:AuthResponse = useSelector((state:RootState)=>state.auth)

    function inittFormData(e:React.ChangeEvent<HTMLInputElement>){
        const file = e.target.files?.[0];
        if(file === undefined){
            setError("no file was provided ")
            return;
        }
        const Formdata = new FormData();
        Formdata.append("file",file as Blob);
        setRequest({...request,form:Formdata})
    }

    const HandleUploadFile = async()=>{
        setError(null)
        setSuccess(null)
        setIsLoading(true)
        try {
            const response = await FileService.UploadNewFile(request,auth.jwt!)
            setSuccess("file uploaded successfully !")
        } catch (error:any) {
            setError(error.message)
        }finally{
            setIsLoading(false)
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
                <input type="file"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        inittFormData(e)
                    }}
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                {error && <p className="text-sm  text-red-500">aaaaaaaaaaaaaaaaaaaaaaa</p>}
                {success && <p className="text-sm text-green-500">{success}</p>}

                {loading ? <Loading /> :  
                     <Button
                     func={HandleUploadFile}
                     style="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
                     textToDisplay="upload" />
                }
               
            </div>

        </>
    )
}