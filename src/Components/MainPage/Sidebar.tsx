import { useSelector } from "react-redux";
import AuthService from "../../Services/AuthService";
import { AuthResponse } from "../../Types/Responses/AuthType";
import { Button } from "../UI/Button";
import { RootState } from "../../State/Store";
import { Navigate, useNavigate } from "react-router-dom";
import { SidebarProps } from "../../Types/Common/SideBarProps";
import { DELETEAUTHENTICATION } from "../../State/AuthSlice";

export default function Sidebar({setActivePage}:SidebarProps){
  const auth:AuthResponse = useSelector((state:RootState)=>state.auth) 
  const navigate = useNavigate()
  const HandleLogout =async ()=>{
    try {
      const response = await AuthService.Logout(auth.jwt!)
      DELETEAUTHENTICATION()
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  } 

    return(
        <div className="w-64 bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">FileDrive</h2>
            <ul className="flex flex-col gap-3">
              <Button style="mb-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer" func={()=>setActivePage("allFiles")} textToDisplay="📁 All Files" />
              <Button style="mb-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer" func={()=>setActivePage("Favorites")} textToDisplay="⭐ Favorites" />
              <Button
              func={HandleLogout}
              textToDisplay="⬅️  Logout"
               style="mb-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
               />
            </ul>
          </div>
    )
}