import { QuantityBtn } from "components/QuantityBtn/quantity-btn";
import { addToCart, removeFromCart } from "features/cartSlice";
import { Variant } from "interfaces/Variant";
import { useDispatch } from "react-redux";
import { QuantityContainer } from "./item-quantity.style";

export interface ItemQuantityProps {
  item: Variant;
  quantity: number;
}

export const ItemQuantity = ({ item, quantity }: ItemQuantityProps) => {
  const dispatch = useDispatch();

  const decrementItemQuantity = () => {
    dispatch(removeFromCart(item.id));
  };
  const incrementItemQuantity = () => {
    dispatch(addToCart(item));
  };
  return (
    <QuantityContainer>
      <QuantityBtn btnText="-" onClick={decrementItemQuantity} />
      <span>{quantity}</span>
      <QuantityBtn btnText="+" onClick={incrementItemQuantity} />
    </QuantityContainer>
  );
};
