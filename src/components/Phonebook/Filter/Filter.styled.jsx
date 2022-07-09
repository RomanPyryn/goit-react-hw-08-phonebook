import styled from "@emotion/styled";

export const FilterBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    font-size: 22px;
    font-weight: 500;
`;

export const FilterLabel = styled.label`
    display: inline-flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

export const FilterInput = styled.input`
    outline: none;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid aliceblue;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;