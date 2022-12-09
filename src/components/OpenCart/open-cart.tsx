import { CartItemCard, CartTotal } from "components";
import { selectCartItems } from "features/cartSlice";
import { Variant } from "interfaces/Variant";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ItemList, OpenCartContainer } from "./open-cart-style";

export const OpenCart = () => {
  const cartItems = useSelector(selectCartItems);
  const [groupedItemsInCart, setGroupedItemsInCart] = useState([]);

  useEffect(() => {
    const groupedItems = cartItems.reduce((results: any, item: Variant) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInCart(groupedItems);
  }, [cartItems]);
  return (
    <OpenCartContainer>
      <ItemList>
        {Object.entries(groupedItemsInCart).map(([key, items]) => (
          <CartItemCard key={key} items={items} />
        ))}
      </ItemList>
      <CartTotal />
    </OpenCartContainer>
  );
};
