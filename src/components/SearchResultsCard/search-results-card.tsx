import { Variant } from "interfaces/Variant";
import { ResultLink, SearchResult } from "./search-results-card.style";

export interface SearchResultsCardProps {
  result: Variant;
  setInputSearch?: any;
}

export const SearchResultsCard = ({
  result,
  setInputSearch,
}: SearchResultsCardProps) => {
  return (
    <ResultLink to={`/item/${result.id}`} onClick={() => setInputSearch("")}>
      <SearchResult>{result.name}</SearchResult>
    </ResultLink>
  );
};
