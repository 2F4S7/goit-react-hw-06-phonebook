import React from 'react';
import ContactForm from './components/ContactForm';
import Section from './components/Section';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;
