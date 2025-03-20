import DisplayFiles from "../Components/MainPage/DisplayFiles";
import UploadFileModal from "../Components/MainPage/UploadFileModal";
import useFetch from "../Hooks/useFetc";

export default function AllFilesPage(){
    const { isError, data, isLoading,fetchNextPage, hasNextPage, isFetchingNextPage } = useFetch()

    return(
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
          <button onClick={()=>fetchNextPage()} disabled={isFetchingNextPage || !hasNextPage}>
            LoadMore... 
          </button>
        </div>
      </div>
    )
}