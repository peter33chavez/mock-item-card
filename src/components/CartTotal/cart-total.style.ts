import styled from "styled-components";

export const CartTotalContainer = styled.div`
  box-shadow: 0px -4px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 20px;
  font-family: var(--primary-font);
  span {
    &:last-child {
      color: var(--primary-color);
    }
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 1rem;
`;
