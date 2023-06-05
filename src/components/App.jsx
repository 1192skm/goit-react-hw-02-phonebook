import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.some(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already contact`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const normFilter = this.state.filter.toLocaleLowerCase();
    const findContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
    return (
      <div className={css.container}>
        <h1 className={css.title}>
          Phone<span className={css.accent}>book</span>
        </h1>
        <ContactForm onSubmit={this.addContact} />

        <h2 className={css.subtitle}>Contacts</h2>
        <Filter onFilter={this.handleFilter} state={this.state.filter} />
        <ContactList
          findContacts={findContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
