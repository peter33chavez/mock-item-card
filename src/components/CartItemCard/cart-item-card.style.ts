import styled from "styled-components";

export const ListItem = styled.li`
  border-radius: 0.8rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  font-family: var(--primary-font);
  gap: 1rem;
  justify-content: space-between;
  list-style-type: none;
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
