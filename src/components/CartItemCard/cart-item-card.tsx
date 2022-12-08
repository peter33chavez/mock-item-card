import { Variant } from "interfaces/Variant";
import React from "react";
import { ListItem } from "./cart-item-card.style";

export interface CartItemCardProps {
  item: Variant;
}

export const CartItemCard = ({ item }: CartItemCardProps) => {
  return <ListItem key={item.id}>{item.name}</ListItem>;
};
