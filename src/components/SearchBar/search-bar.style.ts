import styled from "styled-components";

export const Search = styled.div`
  position: relative;
`;

export const SearchResults = styled.div`
  position: absolute;
  z-index: 2;
  bottom: -598px;
  height: 600px;
  background: white;
  width: 100%;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 4px;
  padding: 0 0.5rem;
`;

export const SearchInput = styled.input`
  font-family: var(--primary-font);
  border: none;
  height: 40px;
  border-radius: 4px;
  width: 140px;
  &:focus {
    outline: none;
  }
  @media (min-width: 600px) {
    width: 375px;
  }
`;
