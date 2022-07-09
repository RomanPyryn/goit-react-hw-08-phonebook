import PropTypes from 'prop-types';
import { ContactListUl, ContactItem, ContactSpan, ContactBtn } from './ContactList.styled'

const ContactList = ({ contacts, buttonName, onBtnClick }) => { 
    return (
        <ContactListUl>
            {contacts.map(contact => (<ContactItem key={contact.id}>
                <ContactSpan>{contact.name}</ContactSpan>
                <ContactSpan>{contact.number}</ContactSpan>
                <ContactBtn type="button" onClick={() => onBtnClick(contact.id)} >{buttonName}</ContactBtn>
            </ContactItem>))}
        </ContactListUl>
        
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.string,
    })),
    buttonName: PropTypes.string.isRequired,
    onBtnClick: PropTypes.func,
};

export default ContactList;