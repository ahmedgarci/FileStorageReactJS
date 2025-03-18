import { useState } from "react";
import Sidebar from "../Components/MainPage/Sidebar";
import DisplayFiles from "../Components/MainPage/DisplayFiles";
import useFetch from "../Hooks/useFetc";
import UploadFileModal from "../Components/MainPage/UploadFileModal";

export default function Main() {
  const { isError, data, isLoading } = useFetch()
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Files</h2>
            <UploadFileModal/>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input
              type="text"
              placeholder="your file names"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-200">
              🔍
            </button>
          </div>

          <DisplayFiles content={data?.pages?.[0]?.content || []} />
        </div>
      </div>
    </div>
  );
}
