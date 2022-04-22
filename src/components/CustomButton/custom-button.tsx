import { CustomButtonProps } from "interfaces/CustomButtonProps";
import styled from "styled-components";


export const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  type,
}: CustomButtonProps) => {
  return <Button>{name}</Button>
    
  };

const Button = styled.button`
    background: ${(type) => type === "select" ? "#46AD79" : "none" };
    `;
