import React from 'react';
import ContactForm from './components/ContactForm';
import Top from './components/Section/Top';
import Bot from './components/Section/Bot';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div>
      <Top title="Phonebook">
        <ContactForm />
      </Top>

      <Bot title="Contacts">
        <Filter />
        <ContactList />
      </Bot>
    </div>
  );
};

export default App;
