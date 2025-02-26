import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Product } from "../sections/home/HomeInterface";

export const useGetProduct = () => {
  const fetchProducts = async () => {
    const Product = await fetch(
      "https://dummyjson.com/carts"
    );
    const result = await Product.json();
    return result.carts;
  };
  const { isPending, data, isError, error } = useQuery({
    queryKey: ["carts"],
    queryFn: fetchProducts,
    staleTime:1000*60*5,//to make the data fresh for 5 minutes
  });
  const [GetData, SetGetData] = useState<Product[]>([]);

  useEffect(() => {
    if (data) {
      SetGetData(data);
    }
  }, [data]);
  return {
    GetData,
    SetGetData,
    isPending,
    data,
    isError,
    error,
  };
};
