import { Input } from "@mui/joy";
import React from "react";

interface SearchCardProps {
  ShowSearchCard: string;
  SetShowSearchCard: (value: string) => void;
}

const SearchCard: React.FC<SearchCardProps> = ({ ShowSearchCard, SetShowSearchCard }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetShowSearchCard(e.target.value);

  };

  return (
    <Input size="lg" placeholder="Search" value={ShowSearchCard} onChange={handleInput} />
  );
};

export default SearchCard;
