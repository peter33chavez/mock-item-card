import { CustomButtonProps } from "interfaces/CustomButtonProps";
import { Button } from "./custom-button.style";
import {FaAngleLeft} from "react-icons/fa";


export const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  styletype,
  itemId,
}: CustomButtonProps) => {
  
  return (
    <>
    {styletype !== "back" ? (<Button to={`/item/${itemId}`} styletype={styletype}>  {name}</Button>): (

    <Button to={"/"} styletype={styletype}> <FaAngleLeft size={20} /> {name}</Button>
    )}
    </>

  )
  };
