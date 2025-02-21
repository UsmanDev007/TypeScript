import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Product } from "../sections/home/HomeInterface";

export const useGetProduct = () => {
  const fetchProducts = async () => {
    const Product = await fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    );
    const result = await Product.json();
    return result.data.data;
  };
  const { isPending, data, isError, error } = useQuery({
    queryKey: ["men-watches"],
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
