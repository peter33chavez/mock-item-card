import axios from "axios";
import { ItemCard } from "components";
import { ItemInfo } from "interfaces/ItemInfo";
import {useState, useEffect} from "react";
import { ListContainer, Loading } from "./item-list.style";


const ITEMS_URL: string = "http://localhost:3001/items";

export const ItemList: React.FC = () => {
  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(false);
    axios.get(ITEMS_URL)
    .then(response => {
        console.log(response.data)
        setItems(response.data);
    })
    .catch(err => {
      console.log(err)
    }) 
    .finally(() => {
      setLoading(false)
    })   
    
  },[])
  return (
    <>
    {loading ? 
      (<Loading>
        <p>Loading...</p>
      </Loading>) : (<ListContainer>
      {items?.map( (item: ItemInfo )  => (
        <ItemCard key={item.id} itemDetails={item} /> 
      ))}
    </ListContainer>)
  }
    
    </>
  );
};
