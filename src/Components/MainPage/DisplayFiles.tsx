import { FilePageResponse } from "../../Types/Responses/FilesResponse";


export default function DisplayFiles({content}:FilePageResponse){
    if(!content || content.length === 0){
        return <p>u didnt uploaded any file yet</p>
    }
    return(
      
      <div className="grid grid-cols-3 gap-4">
      {content.map((file, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
          <img src={file.path} alt={file.path} className="rounded-md" />
          <h3 className="mt-2 text-center font-semibold">{file.title}</h3>
        </div>
      ))}
    </div>
       
    )
}