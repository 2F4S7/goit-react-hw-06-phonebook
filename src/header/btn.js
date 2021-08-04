import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './btn.module.css';

const Btn = ({ title, button }) => {
  return (
    <header className={styles.head}>
      <h1 className={styles.title}>{title}</h1>
      <Button
        className={styles.button}
        href="https://github.com/2F4S7/goit-react-hw-06-phonebook"
        target="_blank"
        variant="dark"
        key={button}
      >
        Github Repository
      </Button>{' '}
    </header>
  );
};

export default Btn;

Btn.defaultProps = {
  title: '',
};

Btn.propTypes = {
  title: PropTypes.string,
};
