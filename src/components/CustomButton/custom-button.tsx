import { StyledButton, StyledLink } from "./custom-button.style";
import { FaAngleLeft } from "react-icons/fa";

interface CustomButtonProps {
  name: string;
  styletype?: string;
  itemId?: string;
  type: string;
  onClick?: () => void;
  fullwidth?: boolean;
}

//dynamically supports Select button on item-list page as well as the Back button on item-details page

export const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  styletype,
  itemId,
  type,
  onClick,
  fullwidth,
}: CustomButtonProps) => {
  return (
    <>
      {type === "link" ? (
        <StyledLink
          to={styletype !== "back" ? `/item/${itemId}` : "/"}
          styletype={styletype}
          fullwidth={fullwidth}
        >
          {styletype === "back" && <FaAngleLeft size={20} />}
          {name}
        </StyledLink>
      ) : (
        <StyledButton onClick={onClick} fullwidth={fullwidth}>
          {name}
        </StyledButton>
      )}
    </>
  );
};
