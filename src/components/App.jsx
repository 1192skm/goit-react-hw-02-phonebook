import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    // if (newContact.name !== this.state.contact.name) {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    // } else{alert(`${newContact.name} is already contact`);}
    this.reset();
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
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <span>Number</span>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
          <h2>Contacts</h2>
          <label>
            <span>Find contacts by name</span>
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.handleFilter}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </label>
          <ul>
            {findContacts.map(findContact => (
              <li key={findContact.id}>
                <span>
                  {findContact.name}: {findContact.number}
                </span>
                <button type="button">Delete</button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
