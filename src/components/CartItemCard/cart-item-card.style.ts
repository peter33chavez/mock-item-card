import styled from "styled-components";

export const ListItem = styled.li`
  list-style-type: none;
  font-family: var(--primary-font);
  border-radius: 0.8rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  padding: 1rem;

  div {
    &:first-child {
      p {
        font-size: 13px;
        width: 80%;
      }
    }
    &:last-child {
      display: flex;
      justify-content: space-between;
      p {
        color: var(--primary-color);
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
`;
