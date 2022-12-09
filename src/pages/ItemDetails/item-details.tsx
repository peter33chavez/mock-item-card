import { ItemContainer, Loading } from "./item-details.style";
import { useParams } from "react-router-dom";
import { CustomButton, FormatItemDetails } from "components";
import { useFetch } from "hooks/useFetch";

export const ItemDetails: React.FC = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(
    `${process.env.REACT_APP_API_ENDPOINT}/${id}`
  );

  return (
    <>
      {loading ? (
        <Loading>
          <p>Loading...</p>
        </Loading>
      ) : (
        data && (
          <ItemContainer>
            <CustomButton
              styletype="back"
              name="Back to Marketplace"
              type="link"
            />

            <FormatItemDetails itemDetails={data} />
          </ItemContainer>
        )
      )}
    </>
  );
};
