import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Container, FormBox, ContactsBox } from './Phonebook.styled';
import { setFilter } from 'redux/filter';
import { addItem, removeItem } from 'redux/items';

export default function Phonebook() {
  const filter = useSelector(state => state.filter.value);
  const contacts = useSelector(state => state.items.contacts);
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

//   useEffect(() => {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

//     if (parsedContacts) {
//       // setContacts(parsedContacts);
//     }
//   }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputName = form.elements.name.value;
    const inputNamber = form.elements.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === inputName.toLocaleLowerCase()
      )
    ) {
      form.reset();
      return window.alert(`${inputName} is already in contacts.`);
    }

    const contactObj = { id: nanoid(), name: inputName, number: inputNamber };
    dispatch(addItem(contactObj));
    form.reset();
  };

  const deleteContact = contactId => {
    dispatch(removeItem(contactId));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const getfiltredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <FormBox>
        <ContactForm
          onSubmitForm={handleSubmit}
          inputName={'Name'}
          inputNumber={'Number'}
          buttonName={'Add cotact'}
        />
      </FormBox>
      <h2>Contacts</h2>
      <ContactsBox>
        <Filter
          inputName={'Find contacts by name'}
          value={filter}
          onChange={changeFilter}
        />
        <ContactList
          contacts={getfiltredContacts()}
          buttonName={'Delete'}
          onBtnClick={deleteContact}
        />
      </ContactsBox>
    </Container>
  );
}
