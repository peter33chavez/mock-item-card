import React from "react";
import { CartButton, Header, ItemCount, LogoContainer } from "./layout.style";
import { BsCart } from "react-icons/bs";
import companyLogo from "../../assets/companyLogo.svg";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header>
        <LogoContainer>
          <img src={companyLogo} alt="Company Logo" />
        </LogoContainer>

        <CartButton>
          <BsCart size={24} />
          <ItemCount>0</ItemCount>
        </CartButton>
      </Header>
      {children}
    </>
  );
};
