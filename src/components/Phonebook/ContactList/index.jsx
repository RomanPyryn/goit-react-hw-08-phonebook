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
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    buttonName: PropTypes.string.isRequired,
    onBtnClick: PropTypes.func.isRequired,
};

export default ContactList;