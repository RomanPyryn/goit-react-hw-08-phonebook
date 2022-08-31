import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import {
  Container,
  FormBox,
  ContactsHeader,
  ContactsBox,
} from './Phonebook.styled';

export default function Phonebook() {
  return (
    <Container>
      <FormBox>
        <ContactForm />
      </FormBox>
      <ContactsHeader>Contacts</ContactsHeader>
      <ContactsBox>
        <Filter />
        <ContactList />
      </ContactsBox>
    </Container>
  );
}
