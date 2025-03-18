import { useInfiniteQuery } from "@tanstack/react-query";
import FileService from "../Services/FileService";
import { useSelector } from "react-redux";
import { RootState } from "../State/Store";
import { AuthResponse } from "../Types/Responses/AuthType";

function useFetch() {
  const authData:AuthResponse = useSelector((state:RootState)=> state.auth)
  console.log(authData);
  return useInfiniteQuery({
    queryKey: ["fetchMyFiles"],
    queryFn: async ({ pageParam = 1 }) => {
      return await FileService.getMyFiles(authData.jwt!,pageParam);
    },
    initialPageParam:1,
    getNextPageParam: (lastPage) =>{
        if(lastPage?.isLast){
            return undefined;
        }
        return lastPage.pageNumber ? lastPage.pageNumber+1 : undefined;
    },

  });
}

export default useFetch;
