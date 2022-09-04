import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const EditBox = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 35px;
  background-color: aliceblue;
  border: 2px solid lightblue;
  border-radius: 6px;
`;

export const EditForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 250px;
  font-size: 22px;
  font-weight: 500;
`;

export const EditLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const EditInput = styled.input`
  outline: none;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid aliceblue;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const EditBtn = styled.button`
  cursor: pointer;
  width: 100px;
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

export const EditBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;

export const SpinerBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const EditContactsHeader = styled.h1`
  margin: 0 0 20px;
  text-align: center;
  color: #007bcd;
  text-shadow: 1px 1px 3px gray;
`;
