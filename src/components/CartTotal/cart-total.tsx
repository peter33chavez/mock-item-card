import { CustomButton } from "components";
import { selectCartTotal } from "features/cartSlice";
import React from "react";
import { useSelector } from "react-redux";
import { ButtonContainer, CartTotalContainer } from "./cart-total.style";

export const CartTotal = () => {
  const cartTotal = useSelector(selectCartTotal);
  return (
    <>
      <CartTotalContainer>
        <span>Total:</span>
        <span>${(cartTotal / 100).toFixed(2)}</span>
      </CartTotalContainer>
      <ButtonContainer>
        <CustomButton name="Checkout" type="button" fullwidth={true} />
      </ButtonContainer>
    </>
  );
};
