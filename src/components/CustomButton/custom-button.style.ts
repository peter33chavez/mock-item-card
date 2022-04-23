import styled from "styled-components";
import {Link} from "react-router-dom";

type Props = {
    styletype: string
}

export const Button = styled(Link)<Props>`
    align-items: center;
    background: ${(Props) => Props.styletype === "select" ? "var(--primary-color)" : "none" };
    border-radius: 5px;
    color: ${(Props) => Props.styletype === "select" ? "white" : "#0000EE " };
    display: ${(Props) => Props.styletype === "back" && "flex"};
    font-size: 12px;
    font-weight: 400;
    gap: 5px;
    letter-spacing: 1px;
    margin-left: ${(Props) => Props.styletype === "back" && "2rem"};
    padding: 1rem 0 1rem 0;
    text-align: center;
    text-decoration: none;
    text-transform: ${(Props) => Props.styletype === "select" && "uppercase"};
    

`