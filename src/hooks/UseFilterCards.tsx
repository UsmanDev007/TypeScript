import { useEffect, useState } from "react";
import { useGetProduct } from "./UseCardFetch";
export const UserFilterCards = () => {
  const { GetData } = useGetProduct();
  const [filtercard, setfiltercard] = useState<any[]>([]);

  useEffect(() => {
    if (GetData) {
      setfiltercard(GetData);
    }
  }, [GetData]);

  const PriceRangeFilter = (min: number, max: number) => {
    if (!GetData) return;
    const filtered = GetData.map((cart: any) => ({
      products: cart.products.filter((product: any) => {
        return product.price >= min && product.price <= max;
      }),
    })).filter((cart: any) => cart.products.length > 0);
    setfiltercard(filtered);
  };

  const resetfilter = () => {
    setfiltercard(GetData || []);
  };

  return {
    filtercard,
    PriceRangeFilter,
    resetfilter,
  };
};
