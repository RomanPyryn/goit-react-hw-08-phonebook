import { useState, useEffect, useRef } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { Container, FormBox, ContactsBox } from "./Phonebook.styled"

export default function Phonebook() {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

    const isFirstRender = useRef(true);

    useEffect(() => { 
        const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

        console.log(parsedContacts);
        if (parsedContacts) {
            setContacts(parsedContacts);
        };
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        };
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const inputName = form.elements.name.value;
        const inputNamber = form.elements.number.value;

        if (contacts.find(contact => contact.name.toLowerCase() === inputName.toLocaleLowerCase())) {
            form.reset();
            return window.alert(`${inputName} is already in contacts.`);
        };

        const contactObj = {id: nanoid(), name: inputName, number: inputNamber};
        setContacts(prevState => [...prevState, contactObj]);
        form.reset();
    };

    const deleteContact = (contactId) => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
    };

    const changeFilter = (e) => { 
        setFilter(e.currentTarget.value)
    };

    const getfiltredContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()),);
    };
    
    return (
        <Container>
                <h1>Phonebook</h1>
                <FormBox>
                    <ContactForm
                        onSubmitForm={handleSubmit}
                        inputName={"Name"}
                        inputNumber={"Number"}
                        buttonName={"Add cotact"} />   
                </FormBox>
                    <h2>Contacts</h2>
                <ContactsBox>
                    <Filter inputName={"Find contacts by name"} value={filter} onChange={changeFilter} />
                    <ContactList contacts={getfiltredContacts()} buttonName={"Delete"} onBtnClick={deleteContact} />
                </ContactsBox>
            </Container>
    );
};