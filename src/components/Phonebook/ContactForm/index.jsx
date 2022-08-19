import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { TailSpin } from 'react-loader-spinner';
import { addItem } from '../../../redux/itemsApi';
import {
  PhonebookContainer,
  PhonebookForm,
  PhonebookLabel,
  PhonebookBtn,
  PhonebookInput,
  SpinerBox,
} from './ContactForm.styled';

const ContactForm = () => {
  const { contacts, isLoading } = useSelector(state => state.items);
  const dispatch = useDispatch();

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
      return toast.warn(`"${inputName}" is already in contacts.`);
    }
    const contactObj = { id: nanoid(), name: inputName, phone: inputNamber };

    const addContact = contactObj => {
      dispatch(addItem(contactObj));
      form.reset();
    };
    addContact(contactObj);
  };

  return (
    <PhonebookContainer>
      <PhonebookForm onSubmit={handleSubmit}>
        <PhonebookLabel htmlFor="">
          Name
          <PhonebookInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </PhonebookLabel>

        <PhonebookLabel htmlFor="">
          Number
          <PhonebookInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </PhonebookLabel>

        <PhonebookBtn type="submit" disabled={isLoading}>
          {isLoading ? (
            <SpinerBox>
              <TailSpin color="#000" height={16} width={16} />
            </SpinerBox>
          ) : (
            '+Add Contact'
          )}
        </PhonebookBtn>
      </PhonebookForm>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1485/1485097.png"
        alt="Phonebook"
        width="125px"
      />
    </PhonebookContainer>
  );
};

export default ContactForm;
