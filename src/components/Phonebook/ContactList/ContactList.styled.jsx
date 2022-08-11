import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
  margin: 0;
  padding-left: 5px;
  font-size: 18px;
  font-weight: 500;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
  }

  span {
    width: 140px;
    margin-right: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ContactBtn = styled.button`
  cursor: pointer;
  width: 50px;
  padding: 2px;
  border: 1px solid aliceblue;
  border-radius: 2px;
  outline: none;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    background-color: #ff0033;
    border: 1px solid #ff0033;
    color: #fff;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.44) 0px 3px 8px;
  }
`;
