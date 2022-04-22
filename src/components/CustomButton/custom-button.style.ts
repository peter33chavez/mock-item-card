import styled from "styled-components";

type Props = {
    styleType: string
}

export const Button = styled.button<Props>`
    background: ${(Props) => Props.styleType === "select" ? "var(--primary-color)" : "none" };
    border-radius: 5px;
    border: none;
    color: ${(Props) => Props.styleType === "select" ? "white" : "#0000EE " };
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    padding: 1rem 0 1rem 0;
    text-transform: ${(Props) => Props.styleType === "select" && "uppercase"};
    width: ${(Props) => Props.styleType === "select" && "100%"};

`