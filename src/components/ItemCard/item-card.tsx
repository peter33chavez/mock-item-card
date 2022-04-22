import { VariantBlock } from "components";
import { CustomButton } from "components";
import { ItemDetailsProps } from "interfaces/ItemDetailsProps";
import { Card, Details, Title } from "./item-card.style";


export const ItemCard: React.FC<ItemDetailsProps> = ({itemDetails}: ItemDetailsProps) => {
  return (
    <Card>
      <Details>
        <Title>
          <h1>{itemDetails.name}</h1>
        </Title>
        <VariantBlock itemDetails={itemDetails}/>
      </Details>
      <CustomButton name="Select" styleType="select" />
    </Card>
  );
};
