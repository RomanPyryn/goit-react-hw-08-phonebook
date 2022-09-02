import { TailSpin } from 'react-loader-spinner';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchItems, removeItem } from '../../../redux/itemsApi';
import ContactEdit from '../ContactEdit';
import {
  ContactListUl,
  ContactItem,
  ContactInfoContainer,
  ContactEditBtn,
  ContactDeleteBtn,
  SpinerBox,
} from './ContactList.styled';
import { useState } from 'react';

const ContactList = () => {
  const filter = useSelector(state => state.filter.value);
  const { contacts, isLoading, error } = useSelector(state => state.items);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [contactID, setcontactID] = useState('');

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

  const toggleModal = () => {
        setShowModal(!showModal);
  };
  
  const getContactId = e => {
        setcontactID(e.currentTarget.value);
        toggleModal();
    }

  return (
    <>
      {error && <p>{error}</p>}
      {!contacts ? (
        <SpinerBox>
          <TailSpin color="#000" height={25} width={25} />
        </SpinerBox>
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
                <span>{contact.number}</span>
              </ContactInfoContainer>
              <ContactEditBtn
                type="button"
                value={contact.id}
                onClick={getContactId}
                disabled={isLoading}
              />
              <ContactDeleteBtn
                type="button"
                onClick={() => deleteContact(contact.id, contact.name)}
                disabled={isLoading}
              />
            </ContactItem>
          ))}
        </ContactListUl>
      )}
      {showModal && <ContactEdit onClose={toggleModal} contactId={contactID} />}
    </>
  );
};

export default ContactList;
