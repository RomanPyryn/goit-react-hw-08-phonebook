import PropTypes from 'prop-types';
import {
  PhonebookContainer,
  PhonebookForm,
  PhonebookLabel,
  PhonebookBtn,
  PhonebookInput,
} from './ContactForm.styled';

const ContactForm = ({ onSubmitForm, inputName, inputNumber, buttonName }) => {
  return (
    <PhonebookContainer>
      <PhonebookForm onSubmit={onSubmitForm}>
        <PhonebookLabel htmlFor="">
          {inputName}
          <PhonebookInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </PhonebookLabel>

        <PhonebookLabel htmlFor="">
          {inputNumber}
          <PhonebookInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </PhonebookLabel>

        <PhonebookBtn type="submit">{buttonName}</PhonebookBtn>
      </PhonebookForm>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1485/1485097.png"
        alt="Phonebook"
        width="125px"
      />
    </PhonebookContainer>
  );
};

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
  inputNumber: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default ContactForm;
