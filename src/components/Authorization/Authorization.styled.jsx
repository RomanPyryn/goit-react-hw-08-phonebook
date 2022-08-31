import styled from '@emotion/styled';

export const AuthBox = styled.div`
  width: 350px;
  margin: 30px auto 0;
  background-color: aliceblue;
  border: 2px solid lightblue;
  border-radius: 6px;
`;

export const AuthHeader = styled.h1`
  margin-bottom: 35px;
  text-align: center;
  color: #007bcd;
  text-shadow: 1px 1px 3px #2c2c2c;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 18px;
  font-weight: 500;
`;

export const AuthLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const AuthInput = styled.input`
  outline: none;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid aliceblue;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const AuthBtn = styled.button`
  cursor: pointer;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  padding: 5px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: scale(1);

  &:hover,
  &:focus {
    background-color: lightgoldenrodyellow;

    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.44) 0px 3px 8px;
    transform: scale(0.95);

    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
