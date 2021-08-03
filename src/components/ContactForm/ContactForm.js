import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/active-contacts';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = this.state;
    const names = this.props.connect.map(contact => contact.name);

    names.includes(name)
      ? alert(`${name} has already been added to contacts`)
      : this.props.onSubmit({ ...this.state });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>

        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ contact: { items } }) => ({
  contacts: items,
});
const mapDispatchToProps = dispatch => ({
  onSubmit: contact => {
    return dispatch(actions.addContact(contact));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
