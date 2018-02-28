import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './header.css';

const showUserName = (username) => {
  if (username === null || username === '') { return ''; }
  return `Hello ${username}`;
};
const Header = props => (
  <header className="Main-Header-container">
    <div className="Main-Header-title">{props.title}</div>
    <div className="Main-Header-expand" />
    <div className="Main-Header-username">{showUserName(props.username)}</div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string.isRequired,
};
Header.defaultProps = {
  title: '',
};
export default Header;
