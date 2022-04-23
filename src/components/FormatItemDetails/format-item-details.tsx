import { VariantCard } from "components";
import { ItemDetailsProps } from "interfaces/ItemDetailsProps"
import { Description, Details, ImageContainer, ItemDetailsContainer, Variants } from "./format-item-details.style"


export const FormatItemDetails: React.FC<ItemDetailsProps> = ({itemDetails}: ItemDetailsProps) => {
    console.log(itemDetails);
  return (
    <ItemDetailsContainer>
      {/* <ImageContainer>
        <img src={itemDetails.imageUrls[0].url} alt="Item Image" />
      </ImageContainer> */}
      {/* <Details>
          <Description>
              <h1>{itemDetails.name}</h1>
              <p>{itemDetails.description}</p>
          </Description>
          <Variants>
              {itemDetails.variants.map((variant: any, idx: number) => (
                  <VariantCard key={idx} variantDetails={variant} /> 
              ))}
          </Variants>
      </Details> */}
    </ItemDetailsContainer>
  );
};
