import { useMemo, useState } from "react";
import { UserFilterCards } from "./UseFilterCards";

export const useSearchCard = () => {
  const { filtercard, PriceRangeFilter, resetfilter } = UserFilterCards();
  const [ShowSearchCard, SetShowSearchCard] = useState<string>("");

  const combinedData = useMemo(() => {
    if (!filtercard) return [];

    let data = filtercard;

    if (ShowSearchCard.trim() !== "") {
      data = data
        .map((cart: any) => ({
          ...cart,
          products: cart.products.filter((product: any) =>
            product.title.toLowerCase().includes(ShowSearchCard.toLowerCase())
          ),
        }))
        .filter((cart: any) => cart.products.length > 0);
    }

    return data;
  }, [filtercard, ShowSearchCard]);

  return {
    ShowSearchCard,
    SetShowSearchCard,
    combinedData,
    PriceRangeFilter,
    resetfilter,
  };
};
