import styled from "styled-components";

export const ItemDetailsContainer = styled.div`
    display: flex;
    padding: 3rem;
    gap: 0 3rem;
    @media (max-width: 1170px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const ImageContainer = styled.div`
     width: 50vw;
     min-width: 350px;
    img{
        width: 100%;
    }
    `;
export const Details = styled.div`
    max-width: 55vw;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (max-width: 1170px) {
        max-width: 90vw;
        margin-top: 2rem;   
    }
`;
export const Description = styled.div`
    h1{
        margin-bottom: 1rem;
    }
`;
export const Variants = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1rem;
    @media (max-width: 1170px) {
        justify-content: center ;
    }

`;