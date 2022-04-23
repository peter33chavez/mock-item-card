import { VariantCardProps } from "interfaces/VariantCardProps"
import { Card, Details, Price } from "./variant-card.style"




export const VariantCard : React.FC<VariantCardProps> = ({variantDetails}: VariantCardProps) => {
  return (
    <Card>
        {/* <Details>
            <h3>{variantDetails.name}</h3>
            <p>{variantDetails.description}</p>
        </Details>
        <Price>
            <p>${variantDetails.price}</p>
        </Price> */}
    </Card>
  )
}
