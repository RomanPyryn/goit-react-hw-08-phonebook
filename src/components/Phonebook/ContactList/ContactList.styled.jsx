import styled from "@emotion/styled";

export const ContactListUl = styled.ul`
    margin: 0;
    padding-left: 40px;
    font-size: 18px;
    font-weight: 500;
`;

export const ContactItem = styled.li`
    margin-bottom: 10px;
`;
export const ContactSpan = styled.span`
    margin-right: 10px;
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
        background-color: aliceblue;
    }
`;