import styled from '@emotion/styled';

export const PhonebookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 175px;
  font-size: 22px;
  font-weight: 500;
`;

export const PhonebookLabel = styled.label`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const PhonebookInput = styled.input`
  outline: none;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid aliceblue;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const PhonebookBtn = styled.button`
  cursor: pointer;
  width: 100px;
  padding: 5px;
  border: none;
  border-radius: 2px;
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
