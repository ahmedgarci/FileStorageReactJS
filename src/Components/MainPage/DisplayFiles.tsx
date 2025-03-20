import { useSelector } from "react-redux";
import FavoriteFilesService from "../../Services/FavoriteFilesService";
import { AuthResponse } from "../../Types/Responses/AuthType";
import { FilePageResponse } from "../../Types/Responses/FilesResponse";
import { Button } from "../UI/Button";
import { RootState } from "../../State/Store";
import { FileText, File } from "lucide-react";

export default function DisplayFiles({content}: FilePageResponse) {
  const auth: AuthResponse = useSelector((state: RootState) => state.auth);

  const addFileToMyFavorite = async (id: number) => {
    try {
      const response = await FavoriteFilesService.AddToFavorite(id, auth.jwt!);
    } catch (error) {
      alert("Oops, an error occurred! Please try again.");
    }
  };

  const HandleReadFile = (filePath: string) => {
    console.log(filePath);
    window.open(filePath, "_blank");
  };

  if (!content || content.length === 0) {
    return <p>You haven't uploaded any files yet.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {content.map((file, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md relative">
          <Button 
            func={() => addFileToMyFavorite(file.id)}
            style="absolute top-0 right-0"
            textToDisplay="⭐"
          />         
            <File className="w-12 h-12 text-blue-500 mx-auto cursor-pointer" onClick={() => {
    console.log("FileText clicked");
    HandleReadFile(file.path);
  }} />
          <h3 className="mt-2 text-center font-semibold">{file.title}</h3>
        </div>
      ))}
    </div>
  );
}
