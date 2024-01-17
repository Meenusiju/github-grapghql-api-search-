import React from "react";
import { SearchIcon } from "../assets/SearchIcon";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <div className="flex items-center border rounded-md p-2 border-sky-700">
      <SearchIcon />
      <input
        className="flex-1 bg-transparent outline-none px-2"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
