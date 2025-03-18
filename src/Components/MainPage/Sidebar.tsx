import { useSelector } from "react-redux";
import AuthService from "../../Services/AuthService";
import { AuthResponse } from "../../Types/Responses/AuthType";
import { Button } from "../UI/Button";
import { RootState } from "../../State/Store";

export default function Sidebar(){
  const auth:AuthResponse = useSelector((state:RootState)=>state.auth) 
  const HandleLogout =async ()=>{
    try {
      const response = await AuthService.Logout(auth.jwt!)    
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  } 

    return(
        <div className="w-64 bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">FileDrive</h2>
            <ul>
              <li className="mb-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">📁 All Files</li>
              <li className="mb-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">⭐ Favorites</li>
              <Button
              func={HandleLogout}
              textToDisplay="⬅️  Logout"
               style="mb-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
               
               />
            </ul>
          </div>
    )
}