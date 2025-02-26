import { Input } from "@mui/joy";
import React from "react";

interface SearchCardProps{
  searchquery:string;
  setsearchquery:(value:string)=>void;
}

const SearchCard: React.FC<SearchCardProps> = ({searchquery,setsearchquery}) => {
const handleInput = (e:any) => {
    setsearchquery(e.target.value)
};

  return (
    <>
      <Input size="lg" placeholder="Search" onChange={handleInput} value={searchquery} />
    </>
  );
};

export default SearchCard;
