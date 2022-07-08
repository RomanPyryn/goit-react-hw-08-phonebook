// import PropTypes from 'prop-types';
// import {  } from './ContactForm.styled'

const ContactForm = ({ onSubmitForm, inputName, inputNumber, buttonName }) => { 
    return (
        <form onSubmit={onSubmitForm}>
            <label htmlFor="">{inputName}
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
            </label>
            
            <label htmlFor="">{inputNumber}
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required />
            </label>
            
            <button type="submit">{buttonName}</button>
        </form>
        
         
        
    )
};

// ContactForm.propTypes = {
    
// };

export default ContactForm;