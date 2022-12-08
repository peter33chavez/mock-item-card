import React from "react";
import { CartButton, Header, ItemCount, LogoContainer } from "./layout.style";
import { BsCart } from "react-icons/bs";
import companyLogo from "../../assets/companyLogo.svg";
import { selectCartItems, selectCartTotal } from "features/cartSlice";
import { useSelector } from "react-redux";

export const Layout = ({ children }: any) => {
  const cartItems = useSelector(selectCartItems);
  return (
    <>
      <Header>
        <LogoContainer>
          <img src={companyLogo} alt="Company Logo" />
        </LogoContainer>

        <CartButton>
          <BsCart size={24} />
          <ItemCount>{cartItems.length}</ItemCount>
        </CartButton>
      </Header>
      {children}
    </>
  );
};
