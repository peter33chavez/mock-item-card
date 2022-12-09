import React, { useState } from "react";
import { CartButton, Header, ItemCount, LogoContainer } from "./layout.style";
import { BsCart } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import companyLogo from "../../assets/companyLogo.svg";
import { selectCartItems } from "features/cartSlice";
import { useSelector } from "react-redux";
import { OpenCart } from "components";

export const Layout = ({ children }: any) => {
  const cartItems = useSelector(selectCartItems);
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <Header>
        <LogoContainer to={"/"}>
          <img src={companyLogo} alt="Company Logo" />
        </LogoContainer>

        <CartButton onClick={() => setOpenCart(!openCart)}>
          {!openCart ? (
            <>
              <BsCart size={24} />

              {cartItems.length > 0 && (
                <ItemCount>{cartItems.length}</ItemCount>
              )}
            </>
          ) : (
            <IoMdClose size={24} />
          )}
        </CartButton>
      </Header>
      {openCart && <OpenCart />}
      {children}
    </>
  );
};
