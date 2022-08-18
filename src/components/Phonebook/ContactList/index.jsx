import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchItems, removeItem } from '../../../redux/itemsApi';
import {
  ContactListUl,
  ContactItem,
  ContactInfoContainer,
  ContactBtn,
} from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(state => state.filter.value);
  const { contacts, isLoading, error } = useSelector(state => state.items);
  const dispatch = useDispatch();

  console.log(contacts);

  const deleteContact = (contactId, contactName) => {
    dispatch(removeItem(contactId));
    toast.info(`"${contactName}" deleted from your contacts!`);
  };

  const getfiltredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
                <span>{contact.phone}</span>
              </ContactInfoContainer>
              <ContactBtn
                type="button"
                onClick={() => deleteContact(contact.id, contact.name)}
                disabled={!contacts}
              />
            </ContactItem>
          ))}
        </ContactListUl>
      )}
    </>
  );
};

export default ContactList;
