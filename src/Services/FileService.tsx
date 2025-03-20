import axios from "axios";
import { FilePageResponse } from "../Types/Responses/FilesResponse";
import { UploadFileRequest } from "../Types/Requests/Files/UploadFileRequest";
import { deleteExistingFileRequest } from "../Types/Requests/Files/DeleteExistingFileRequest";

class FileService{
    private JavaEndpoint:string = "http://localhost:8090/api/v1/file";
    // TO ADD PAGE PARAM
    async getMyFiles(token:string,pageNumber:number):Promise<FilePageResponse>{
        try {
        const response =  await axios.get(`${this.JavaEndpoint}/all?pageNumber=${pageNumber}`,{headers:{"Authorization":`Bearer ${token}`}})   
        console.log(response)
        return response.data        
        } catch (error:any) {
            console.log(error)
            throw new Error(error.message);
        }
    }
    
    async UploadNewFile(request:FormData,token:string):Promise<void>{
        try {
            const response =  await axios.post(`${this.JavaEndpoint}/upload`,request,{headers:{"Authorization":`Bearer ${token}`}})   
            console.log(response)
            } catch (error:any) {
                console.log(error)
                throw new Error(error.message);
            }
    }

    async deleteExistingFile(request:deleteExistingFileRequest,token:string):Promise<void>{
        try {
            const response =  await axios.post(`${this.JavaEndpoint}/delete`,request,{headers:{"Authorization":`Bearer ${token}`}})   
            console.log(response)
            } catch (error:any) {
                console.log(error)
                throw new Error(error.message);
            }
    }

}
export default new FileService();