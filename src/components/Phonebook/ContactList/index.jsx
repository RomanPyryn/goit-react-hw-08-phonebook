import PropTypes from 'prop-types';
import {
  ContactListUl,
  ContactItem,
  ContactInfoContainer,
  ContactBtn,
} from './ContactList.styled';

const ContactList = ({ contacts, buttonName, onBtnClick }) => {
  return (
    <ContactListUl>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <ContactInfoContainer>
            <img
              src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
              alt="contact-icon"
              width="15px"
              height="15px"
            />
            <span>{contact.name}</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/455/455705.png"
              alt="contact-icon"
              width="15px"
              height="15px"
            />
            <span>{contact.number}</span>
          </ContactInfoContainer>
          <ContactBtn type="button" onClick={() => onBtnClick(contact.id)}>
            {buttonName}
          </ContactBtn>
        </ContactItem>
      ))}
    </ContactListUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  buttonName: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default ContactList;
