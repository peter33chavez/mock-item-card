import { CustomButtonProps } from "interfaces/CustomButtonProps";
import { Button } from "./custom-button.style";
import {FaAngleLeft} from "react-icons/fa";


export const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  styleType,
}: CustomButtonProps) => {
  
  return (

    <Button styleType={styleType} >{styleType === "back" && <FaAngleLeft size={20} />}{name}</Button>
  )
    
  };
