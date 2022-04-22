import axios from "axios";
import { ItemCard } from "components";
import { ItemInfo } from "interfaces/ItemInfo";
import {useState, useEffect} from "react";
import { ListContainer } from "./item-list.style";



const ITEMS_URL = "http://localhost:3001/items";
const ITEM_BY_ID_URL = `http://localhost:3001/items/:id`;


export const ItemList: React.FC = () => {
  const [items, setItems] = useState<any>([]);
  useEffect(() => {
    axios.get(ITEMS_URL)
    .then(response => {
      console.log(response.data);
      setItems(response.data);
    })
  },[])
  return (
    <ListContainer>
      {items?.map( (item: ItemInfo )  => (
        <ItemCard key={item.id} itemDetails={item} /> 
      ))}
    </ListContainer>
  );
};
