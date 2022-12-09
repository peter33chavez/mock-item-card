import { ItemCard } from "components";
import { useFetch } from "hooks/useFetch";
import { ItemInfo } from "interfaces/ItemInfo";
import { ListContainer, Loading } from "./item-list.style";

export const ItemList: React.FC = () => {
  const { data, loading } = useFetch(`${process.env.REACT_APP_API_ENDPOINT}`);

  return (
    <>
      {loading ? (
        <Loading>
          <p>Loading...</p>
        </Loading>
      ) : (
        <ListContainer>
          {data?.map((item: ItemInfo) => (
            <ItemCard key={item.id} itemDetails={item} />
          ))}
        </ListContainer>
      )}
    </>
  );
};
