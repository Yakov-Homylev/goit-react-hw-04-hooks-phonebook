import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 4px;
  margin: 0px;
`;

export const Item = styled.li`
  padding: 4px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const NumberSpan = styled.span`
  font-weight: 600;
  margin-left: 4px;
  margin-right: 4px;
`;

export const DeleteButton = styled.button`
  padding: 4px;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  cursor: pointer;

  :hover {
    background-color: skyblue;
  }
`;

export const Notification = styled.p`
  color: red;
  font-weight: 700;
`;
