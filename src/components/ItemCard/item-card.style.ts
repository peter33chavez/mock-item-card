import styled from "styled-components";

type ImageBackgroundProps = {
    image: string,
}

export const CardContainer = styled.div`
    font-family: var(--primary-font);
`
export const CardImage = styled.div<ImageBackgroundProps>`
    width: 100%;
    height: 100%;
    background-image: url(${(ImageBackgroundProps) => ImageBackgroundProps.image});
    background-size: cover;
    border-radius: .8rem;
    
`;
export const Card = styled.div`
    opacity: 0;
    background: rgba(255, 255, 255, 0.7);
    border-radius: .8rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    
    gap: 1rem;
    height: 260px;
    justify-content: space-between;
    padding: 1rem;
    width: 260px;
    :hover{
        opacity: 1;
        transition: all .2s ease-in;
    }
`;
export const Title = styled.div`
    h1{
        font-weight: 700;
        font-size: 17px;
    }
`;
export const Details = styled.div``

export const OuterTitle = styled.div`
    text-align: center;
    padding-top: 1rem;
    h1{
        font-size: 15px;
    }
`;
