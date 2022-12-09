import { Link } from "react-router-dom";
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
export const LogoContainer = styled(Link)`
  cursor: pointer;
  position: relative;
  width: 70px;
  img {
    width: 100%;
  }
`;

export const ItemCount = styled.div`
  position: absolute;
  top: 20px;
  right: -5px;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  background: #d61212;
  color: white;
`;
