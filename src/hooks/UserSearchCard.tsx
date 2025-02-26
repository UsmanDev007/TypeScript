import { useCallback, useState } from "react";
import { useGetProduct } from "./UseCardFetch"

export const useSearchCard=()=>{
   const {GetData}=useGetProduct();
   const [ShowSearchCard,SetShowSearchCard]=useState<string>("");
    const SearchProduct=useCallback(()=>{
        if(!GetData) return []
         return GetData.filter((item:any)=>{
            item.title?.toLowerCase().includes(ShowSearchCard.toLowerCase());
        })
    },[GetData,ShowSearchCard])
        

    return{
        ShowSearchCard,
        SetShowSearchCard,
        SearchProduct
    }

}