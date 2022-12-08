import { CustomButton } from "components";
import { addToCart } from "features/cartSlice";
import { Variant } from "interfaces/Variant";
import { useDispatch } from "react-redux";
import { Card, Container, Details, Price } from "./variant-card.style";

interface VariantCardProps {
  variantDetails: Variant;
}

export const VariantCard: React.FC<VariantCardProps> = ({
  variantDetails,
}: VariantCardProps) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    console.log(variantDetails);
    dispatch(addToCart(variantDetails));
  };

  return (
    <Card>
      <Details>
        <h3>{variantDetails.name}</h3>
        <p>{variantDetails.description}</p>
      </Details>
      <Container>
        <Price>
          <p>${(variantDetails.price / 100).toFixed(2)}</p>
        </Price>
        <CustomButton
          name="Add to Cart"
          type="button"
          onClick={addItemToCart}
        />
      </Container>
    </Card>
  );
};
