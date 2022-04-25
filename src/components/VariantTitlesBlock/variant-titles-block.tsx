import {
  VariantItem,
  VariantItemTitle,
  Variants,
} from "./variant-titles-block.style";
import { ItemDetailsProps } from "interfaces/ItemDetailsProps";

export const VariantBlock: React.FC<ItemDetailsProps> = ({
  itemDetails,
}: ItemDetailsProps) => {
  return (
    <Variants>
      {itemDetails.variants.slice(0, 4).map((variant: any, idx: number) => (
        <VariantItem key={variant.id}>
          <VariantItemTitle>
            Item {idx + 1} - {variant.name}
          </VariantItemTitle>
        </VariantItem>
      ))}
      {itemDetails.variants.length > 4 && (
        <VariantItem>
          <VariantItemTitle>
            ... plus {itemDetails.variants.slice(4).length} more
          </VariantItemTitle>
        </VariantItem>
      )}
    </Variants>
  );
};
