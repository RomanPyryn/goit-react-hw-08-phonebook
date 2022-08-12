import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Container, FormBox, ContactsBox } from './Phonebook.styled';

export default function Phonebook() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormBox>
        <ContactForm />
      </FormBox>
      <h2>Contacts</h2>
      <ContactsBox>
        <Filter />
        <ContactList />
      </ContactsBox>
    </Container>
  );
}
