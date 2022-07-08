import styled from "@emotion/styled";

export const PhonebookForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 150px;
    padding: 10px;
    font-size: 22px;
    font-weight: 500;
`;

export const PhonebookLabel = styled.label`
    display: inline-flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const PhonebookInput = styled.input`
    outline: none;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const PhonebookBtn = styled.button`
    width: 100px;
    padding: 5px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    outline: none;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;