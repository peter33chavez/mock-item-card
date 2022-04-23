import styled from "styled-components";

export const Card = styled.div`
    max-width: 280px;
    border-radius: .8rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`
export const Details = styled.div`
    h3{
        margin-bottom: .6rem;
        font-size: 16px;
    }
    p{
        font-size: 15px;
    }
`
export const Price = styled.div`
    color: var(--primary-color);
    font-weight: bold;
    font-size: 24px;
`
