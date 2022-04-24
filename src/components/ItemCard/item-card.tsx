import { VariantBlock } from "components";
import { CustomButton } from "components";
import { ItemDetailsProps } from "interfaces/ItemDetailsProps";
import {
  Card,
  CardContainer,
  CardImage,
  Details,
  OuterTitle,
  Title,
} from "./item-card.style";

export const ItemCard: React.FC<ItemDetailsProps> = ({
  itemDetails,
}: ItemDetailsProps) => {
  return (
    <CardContainer>
      <CardImage image={itemDetails.imageUrls[0].url}>
        <Card>
          <Details>
            <Title>
              <h1>{itemDetails.name}</h1>
            </Title>
            <VariantBlock itemDetails={itemDetails} />
          </Details>
          <CustomButton
            name="Select"
            styletype="select"
            itemId={itemDetails.id}
          />
        </Card>
      </CardImage>
      <OuterTitle>
        <h1>{itemDetails.name}</h1>
      </OuterTitle>
    </CardContainer>
  );
};
