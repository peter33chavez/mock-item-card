import { ItemCard } from "components";
import { useFetch } from "hooks/useFetch";
import { ItemInfo } from "interfaces/ItemInfo";
import { ListContainer, Loading } from "./item-list.style";

const ITEMS_URL: string = "http://localhost:3001/items";

export const ItemList: React.FC = () => {
  
  const {data, loading} = useFetch(ITEMS_URL);
  
  return (
    <>
      {loading ? (
        <Loading>
          <p>Loading...</p>
        </Loading>
      ) 
      : (
        <ListContainer>
          {data?.map( (item: ItemInfo )  => (
            <ItemCard key={item.id} itemDetails={item} /> 
          ))}
        </ListContainer>
      )}
    </>
  );
};
