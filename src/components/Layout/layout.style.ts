import styled from "styled-components";

export const Header = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background: var(--nav-background-color);
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  z-index: 10;
`;
export const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
`;
export const LogoContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 70px;
  img {
    width: 100%;
  }
`;

export const ItemCount = styled.div`
  position: absolute;
  top: 28px;
  right: 4px;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 9px;
  font-weight: bold;
`;
