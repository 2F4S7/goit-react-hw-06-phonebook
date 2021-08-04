import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import style from './ContactList.module.css';
import { connect } from 'react-redux';

const ContactList = ({ contacts }) => {
  return (
    <ul className={style.form}>
      {contacts.map(contact => {
        const { id, name, number } = contact;

        return <ContactItem key={id} name={name} number={number} id={id} />;
      })}
    </ul>
  );
};

const filterContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(ContactList);
