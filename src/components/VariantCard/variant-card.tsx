import { Variant } from "interfaces/Variant"
import { Card, Details, Price } from "./variant-card.style"

interface VariantCardProps {
  variantDetails: Variant,
}

export const VariantCard : React.FC<VariantCardProps> = ({variantDetails}: VariantCardProps) => {
  return (
    <Card>
      <Details>
          <h3>{variantDetails.name}</h3>
          <p>{variantDetails.description}</p>
      </Details>
      <Price>
          <p>${(variantDetails.price / 100).toFixed(2)}</p> 
      </Price>
    </Card>
  )
}
