import styled from "styled-components";


export const OpenCartContainer = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  width: 375px;
  background: var(--nav-background-color);
  box-shadow: -8px 10px 15px -3px rgba(0,0,0,0.1);
  z-index: 2;
`;

export const ItemList = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 70vh;
  overflow: scroll;
`;

