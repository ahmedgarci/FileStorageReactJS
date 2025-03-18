
interface FileResponse{
    path:string,
    mimeType:string,
    title:string
}

interface FilePageResponse{
    content:FileResponse[],
    pageNumber?:number,
    isLast?:boolean
}

export type {FileResponse,FilePageResponse}