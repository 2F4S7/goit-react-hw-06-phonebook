import React from 'react';
import ContactForm from './components/ContactForm';
import Btn from './header/btn';
import Top from './components/Section/Top';
import Bottom from './components/Section/Bottom';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
// import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <Btn title="React Home Work Phonebook 06" />
      <Top title="Phonebook">
        <ContactForm />
      </Top>

      <Bottom title="Contacts">
        <Filter />
        <ContactList />
      </Bottom>
    </div>
  );
};

export default App;
