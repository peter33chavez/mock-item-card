import { ItemQuantity } from "components";
import { Variant } from "interfaces/Variant";
import React from "react";
import { ListItem } from "./cart-item-card.style";

export interface CartItemCardProps {
  items: Variant[];
}

export const CartItemCard = ({ items }: CartItemCardProps) => {
  return (
    <ListItem>
      <div>
        <h5>{items[0].name}</h5>
        <p>
          {items[0].description.length >= 60
            ? items[0].description.slice(0, 60) + "..."
            : items[0].description}
        </p>
      </div>
      <div>
        <ItemQuantity item={items[0]} quantity={items.length} />
        <p>${(items[0].price / 100).toFixed(2)}</p>
      </div>
    </ListItem>
  );
};
