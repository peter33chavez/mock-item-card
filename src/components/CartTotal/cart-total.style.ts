import styled from "styled-components";

export const CartTotalContainer = styled.div`
  box-shadow: 0px -4px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  font-family: var(--primary-font);
  font-size: 20px;
  font-weight: bold;
  justify-content: space-between;
  padding: 2rem;
  span {
    &:last-child {
      color: var(--primary-color);
    }
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 1rem;
`;
