import styled from '@emotion/styled';

export const UserBox = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  font-weight: 600;
  padding-right: 20px;
  padding-left: 10px;
`;

export const LogoutBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #007bcd;
  background-color: #fff;
  border: 0.1px solid lightblue;
  padding: 2px 8px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: scale(1);

  &:hover,
  &:focus {
    background-color: aliceblue;
    color: red;

    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.44) 0px 3px 8px;
    transform: scale(0.95);

    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const SpinerBox = styled.div`
  display: flex;
  justify-content: center;
`;
