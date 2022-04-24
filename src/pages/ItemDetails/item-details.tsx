import { Header, ItemContainer, Loading } from "./item-details.style"
import { useParams } from "react-router-dom";
import { CustomButton, FormatItemDetails } from "components";
import { useFetch } from "hooks/useFetch";

export const ItemDetails: React.FC = () => {
  const {id} = useParams();
  const ITEM_BY_ID_URL: string = `http://localhost:3001/items/${id}`; 

  const {data, loading } = useFetch(ITEM_BY_ID_URL);
  console.log(data)

  return (
    <>
    {loading ? (
      <Loading>
        <p>Loading...</p>
      </Loading>
    ) : data && (
      
      <ItemContainer>
        <Header>
          <CustomButton styletype="back" name="Back to Marketplace" />
        </Header>
        <FormatItemDetails itemDetails={data} /> 
      </ItemContainer>
    )}
    </>
  )
}

