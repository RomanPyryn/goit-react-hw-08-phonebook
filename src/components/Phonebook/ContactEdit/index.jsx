import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { editItem } from '../../../redux/itemsApi';
import {
  Overlay,
  EditBox,
  EditForm,
  EditLabel,
  EditBtn,
  EditInput,
  EditBtnBox,
  SpinerBox,
  EditContactsHeader,
} from './ContactEdit.styled';
import { useState } from 'react';

const modalRoot = document.querySelector('#modal-root');

const ContactEdit = ({ onClose, contactId }) => {
  const { contacts, isLoading, isSuccess } = useSelector(state => state.items);
  const dispatch = useDispatch();

  const contactName = contacts.find(contact => contact.id === contactId).name;
  const contactNumber = contacts.find(contact => contact.id === contactId).number;

  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const editedContact = { name, number };
    await dispatch(editItem(editedContact, contactId));
    if (isSuccess) {
      onClose();
    }
  };

  // dispatch(editItem(contactObj, contactId));

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <EditBox>
        <EditContactsHeader>Edit contact</EditContactsHeader>
        <EditForm onSubmit={handleSubmit}>
          <EditLabel htmlFor="">
            Name
            <EditInput
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </EditLabel>

          <EditLabel htmlFor="">
            Number
            <EditInput
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </EditLabel>

          <EditBtnBox>
            <EditBtn type="submit" disabled={isLoading}>
              {isLoading ? (
                <SpinerBox>
                  <TailSpin color="#007bcd" height={16} width={16} />
                </SpinerBox>
              ) : (
                'Edit'
              )}
            </EditBtn>
            <EditBtn type="button" disabled={isLoading} onClick={onClose}>
              Close
            </EditBtn>
          </EditBtnBox>
        </EditForm>
      </EditBox>
    </Overlay>,
    modalRoot
  );
};

ContactEdit.propTypes = {
  onClose: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default ContactEdit;
