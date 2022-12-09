import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchResult = styled.div`
  border-radius: 0.8rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  padding: 1rem;
`;
export const ResultLink = styled(Link)`
  font-family: var(--primary-font);
  color: black;
  text-decoration: none;
`;
