import styled from "styled-components";

export const Card = styled.div`
  border-radius: 0.8rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  max-width: 280px;
  padding: 1rem;
`;
export const Details = styled.div`
  h3 {
    font-size: 16px;
    margin-bottom: 0.6rem;
  }
  p {
    font-size: 15px;
  }
`;
export const Price = styled.div`
  color: var(--primary-color);
  font-weight: bold;
  font-size: 24px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
