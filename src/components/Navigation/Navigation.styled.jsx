import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 55px;
  padding: 0 50px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px;
`;

export const NavigationLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: inherit;
  border: 0.1px solid lightblue;
  padding: 2px 8px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: scale(1);

  &:hover,
  &:focus {
    background-color: aliceblue;

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

  &.active {
    color: #007bcd;
  }
`;

export const NavHeader = styled.h1`
  margin: 0;
  text-shadow: 2px 2px 3px #007bcd;
`;
