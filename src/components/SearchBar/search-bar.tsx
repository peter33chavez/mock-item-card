import React from "react";
import {
  Search,
  SearchBarContainer,
  SearchInput,
  SearchResults,
} from "./search-bar.style";
import { IoMdClose } from "react-icons/io";
import { selectFilteredData } from "features/dataSlice";
import { useSelector } from "react-redux";
import { Variant } from "interfaces/Variant";
import { SearchResultsCard } from "components/SearchResultsCard/search-results-card";

export interface SearchBarProps {
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
  inputSearch: string;
  handleSearchClose: () => void;
}

export const SearchBar = ({
  setInputSearch,
  inputSearch,
  handleSearchClose,
}: SearchBarProps) => {
  const searchResults = useSelector((state) =>
    selectFilteredData(state, inputSearch)
  );
  return (
    <Search>
      <SearchBarContainer>
        <SearchInput
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <IoMdClose size={24} onClick={() => handleSearchClose()} />
      </SearchBarContainer>
      {inputSearch?.length > 0 && (
        <SearchResults>
          {searchResults?.map((result: Variant) => (
            <SearchResultsCard
              key={result.id}
              result={result}
              setInputSearch={setInputSearch}
            />
          ))}
        </SearchResults>
      )}
    </Search>
  );
};
