import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
  margin: 0;
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
  }

  span {
    width: 150px;
    margin-right: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ContactBtn = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/6861/6861362.png');
  background-size: cover;
  border: none;
  background-color: transparent;
  outline: none;

  &:hover,
  &:focus {
    transform: scale(1.1);

    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:active {
    transform: scale(0.95);

    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
