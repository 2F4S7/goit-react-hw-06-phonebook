import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';
import actions from '../../redux/active-contacts';
import { connect } from 'react-redux';

const Filter = ({ value, onChange }) => {
  return (
    <label className={style.label}>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const mapStateToProps = ({ contacts: { filter } }) => ({
  value: filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target: { value } }) => dispatch(actions.filterContacts(value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default (mapStateToProps, mapDispatchToProps)(Fiter);
