import styled from "styled-components";

export const ItemDetailsContainer = styled.div`
  display: flex;
  gap: 0 3rem;
  padding: 0 3rem 3rem 3rem;
  @media (max-width: 1170px) {
    align-items: center;
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  min-width: 350px;
  width: 60vw;
  img {
    width: 100%;
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 55vw;
  @media (max-width: 1170px) {
    margin-top: 2rem;
    max-width: 90vw;
  }
`;
export const Description = styled.div`
  h1 {
    margin-bottom: 1rem;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`;
export const Variants = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1rem;
  @media (max-width: 1170px) {
    justify-content: center;
  }
`;
