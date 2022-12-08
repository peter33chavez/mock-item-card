import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  styletype?: string;
};

export const StyledLink = styled(Link)<Props>`
  align-items: center;
  background: ${(Props) =>
    Props.styletype === "select" ? "var(--primary-color)" : "none"};
  border-radius: 5px;
  color: ${(Props) => (Props.styletype === "select" ? "white" : "#0000EE ")};
  display: ${(Props) => Props.styletype === "back" && "flex"};
  font-size: 12px;
  font-weight: 400;
  gap: 5px;
  letter-spacing: 1px;
  margin-left: ${(Props) => Props.styletype === "back" && "2.5rem"};
  padding: 1rem 0.5rem 1rem 0.5rem;
  text-align: center;
  text-decoration: none;
  text-transform: ${(Props) => Props.styletype === "select" && "uppercase"};
  :hover {
    text-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
  }
`;
export const StyledButton = styled.button`
  cursor: pointer;
  align-items: center;
  background: var(--primary-color);
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 12px;
  font-weight: 400;
  gap: 5px;
  letter-spacing: 1px;
  padding: 1rem 0.5rem 1rem 0.5rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  :hover {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    scale: 1.02;
    background: #53bc87;
  }
`;
