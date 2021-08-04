import React from 'react';
import ContactForm from './components/ContactForm';
import Top from './components/Section/Top';
import Bottom from './components/Section/Bottom';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  return (
    <>
      <Top title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Top>

      <Bottom title="Contacts">
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactList contacts={filteredContacts} onClick={deleteContact} />
      </Bottom>
    </>
  );
};

export default App;

// formSubmitHandler = contact => {
//   const { contacts } = this.state;
//   const { name } = contact;
//   const names = contacts.map(item => item.name);

//   names.includes(name)
//     ? alert(`${name} is already in contacts`)
//     : this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
// };

// onChangeFilter = event => {
//   const filterValue = event.target.value;

//   this.setState({ filter: filterValue });
// };

// filterContacts = () => {
//   const { contacts, filter } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   console.log(parsedContacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevState) {
//   if (this.state.contacts !== prevState.contact) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }
