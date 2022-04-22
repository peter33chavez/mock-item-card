import { VariantBlock } from "components";
import { CustomButton } from "components";
import { ItemDetailsProps } from "interfaces/ItemDetailsProps";
import { Card, Title } from "./item-card.style";


export const ItemCard: React.FC<ItemDetailsProps> = ({itemDetails}: ItemDetailsProps) => {
  return (
    <Card>
      <Title>
        <h1>{itemDetails.name}</h1>
      </Title>
      <VariantBlock itemDetails={itemDetails}/>
      <CustomButton name="Select" type="select" />
    </Card>
  );
};
