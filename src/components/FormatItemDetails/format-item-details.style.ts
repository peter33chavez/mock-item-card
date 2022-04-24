import styled from "styled-components";

export const ItemDetailsContainer = styled.div`
    display: flex;
    gap: 0 3rem;
    padding: 3rem;
    @media (max-width: 1170px) {
        align-items: center;
        flex-direction: column;
    }
`;
export const ImageContainer = styled.div`
     min-width: 350px;
     width: 50vw;
    img{
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