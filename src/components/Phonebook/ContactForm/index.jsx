import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { addItem } from '../../../redux/itemsApi';
// import { addItem } from 'redux/items';
import {
  PhonebookContainer,
  PhonebookForm,
  PhonebookLabel,
  PhonebookBtn,
  PhonebookInput,
} from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(state => state.items.contacts);
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
const contactObj = { id: nanoid(), name: inputName, phone: inputNamber }
    // const contactObj = JSON.stringify({ id: nanoid(), name: inputName, phone: inputNamber });
    console.log(contactObj);

    const addContact = contactObj => {
      dispatch(addItem(contactObj));
      toast.success(`"${inputName}" added to your contacts!`);
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

        <PhonebookBtn type="submit">+Add Contact</PhonebookBtn>
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
