import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { Container, FormBox } from "./Phonebook.styled"

class Phonebook extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const inputName = form.elements.name.value;
        const inputNamber = form.elements.number.value;

        if (this.state.contacts.find(contact => contact.name.toLowerCase() === inputName.toLocaleLowerCase())) {
            form.reset();
            return window.alert(`${inputName} is already in contacts.`);
        };

        const contactObj = {id: nanoid(), name: inputName, number: inputNamber};
        this.setState(({ contacts }) => ({ contacts: [...contacts, contactObj] }));
        form.reset();
    };

    deleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId)
        }));
    };

    changeFilter = (e) => { 
        this.setState({filter: e.currentTarget.value})
    };

    getfiltredContacts = () => {
        const { filter, contacts } = this.state;
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()),);
    };

    render() {
        
        const filtredContacts = this.getfiltredContacts();

        return (    
            <Container>
                <h1>Phonebook</h1>
                <FormBox>
                    <ContactForm
                        onSubmitForm={this.handleSubmit}
                        inputName={"Name"}
                        inputNumber={"Number"}
                        buttonName={"Add cotact"} />   
                </FormBox>
                <div>
                    <h2>Contacts</h2>
                    <Filter inputName={"Find contacts by name"} value={this.state.filter} onChange={this.changeFilter} />
                    <ContactList contacts={filtredContacts} buttonName={"Delete"} onBtnClick={this.deleteContact} />
                </div>
            </Container>
        );}
}

export default Phonebook;