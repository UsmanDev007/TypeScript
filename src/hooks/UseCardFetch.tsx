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
  });
  const [GetData, SetGetData] = useState<Product[]>([]);

  useEffect(() => {
    if (data) {
      SetGetData(data);
      console.log(data)
    }
  }, [data]);
  return {
    GetData,
    isPending,
    data,
    isError,
    error,
  };
};
