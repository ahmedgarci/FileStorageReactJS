import { useState } from "react";
import Sidebar from "../Components/MainPage/Sidebar";
import AllFilesPage from "./AllFilesPage";
import FavoriteFilesPage from "./FavoriteFilesPage";

export default function Main() {
  const [activePage,setActivePage] = useState<string>("allFiles")
  console.log(activePage);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setActivePage={setActivePage} activePage={activePage} />

      <div className="flex-1 p-6">
      {activePage === "allFiles" && <AllFilesPage />}
      {activePage === "Favorites" && <FavoriteFilesPage />}
      </div>
    </div>
  );
}
