import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './header.css';

const Header = props => (
  <header className="Header-container"><h2 className="Header-title">{props.title}</h2></header>
);

Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: '',
};
export default Header;
