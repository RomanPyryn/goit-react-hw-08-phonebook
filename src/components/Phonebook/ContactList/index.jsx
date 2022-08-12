import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from 'redux/items';
import {
  ContactListUl,
  ContactItem,
  ContactInfoContainer,
  ContactBtn,
} from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(state => state.filter.value);
  const contacts = useSelector(state => state.items.contacts);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(removeItem(contactId));
  };

  const getfiltredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ContactListUl>
      {getfiltredContacts().map(contact => (
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
          <ContactBtn type="button" onClick={() => deleteContact(contact.id)} />
        </ContactItem>
      ))}
    </ContactListUl>
  );
};

export default ContactList;
