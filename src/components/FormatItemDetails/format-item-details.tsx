import { VariantCard } from "components";
import { ItemDetailsProps } from "interfaces/ItemDetailsProps";
import { Description, Details, ImageContainer, ItemDetailsContainer, Variants } from "./format-item-details.style"



export const FormatItemDetails: React.FC<ItemDetailsProps> = ({itemDetails}: ItemDetailsProps) => {
    const {imageUrls, variants, name, description } = itemDetails;
  return (
    <ItemDetailsContainer>
      <ImageContainer>
        <img src={imageUrls[0].url} alt="Item Image" />
      </ImageContainer>
      <Details>
          <Description>
              <h1>{name}</h1>
              <p>{description}</p>
          </Description>
          <Variants>
              {variants.map((variant: any, idx: number) => (
                  <VariantCard key={idx} variantDetails={variant} /> 
              ))}
          </Variants>
      </Details>
    </ItemDetailsContainer>
  );
};
