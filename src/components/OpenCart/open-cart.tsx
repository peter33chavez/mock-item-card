import { CartItemCard } from "components";
import { selectCartItems } from "features/cartSlice";
import { Variant } from "interfaces/Variant";
import React from "react";
import { useSelector } from "react-redux";
import { ItemList, OpenCartContainer } from "./open-cart-style";

export const OpenCart = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <OpenCartContainer>
      <ItemList>
        {cartItems.map((item: Variant) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </ItemList>
    </OpenCartContainer>
  );
};
