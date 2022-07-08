import PropTypes from 'prop-types';
// import {  } from './ContactList.styled'

const ContactList = ({ contacts, buttonName, onBtnClick }) => { 
    return (
        <ul>
            {contacts.map(contact => (<li key={contact.id}>
                <span>{contact.name}</span>
                <span>{contact.number}</span>
                <button type="button" onClick={() => onBtnClick(contact.id)} >{buttonName}</button>
            </li>))}
        </ul>
        
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