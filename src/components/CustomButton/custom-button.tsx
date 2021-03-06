import { Button } from "./custom-button.style";
import { FaAngleLeft } from "react-icons/fa";

interface CustomButtonProps {
  name: string;
  styletype: string;
  itemId?: string;
}

//dynamically supports Select button on item-list page as well as the Back button on item-details page

export const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  styletype,
  itemId,
}: CustomButtonProps) => {
  return (
    <>
      {styletype !== "back" ? (
        <Button to={`/item/${itemId}`} styletype={styletype}>
          {name}
        </Button>
      ) : (
        <Button to={"/"} styletype={styletype}>
          <FaAngleLeft size={20} /> {name}
        </Button>
      )}
    </>
  );
};
