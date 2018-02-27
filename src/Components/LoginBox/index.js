import React from 'react';
// import ReactDOM from 'react-dom';
import './loginbox.css';

const LoginBox = () => (
  <div className="LoginBox-wrapper">
    <div className="LoginBox-welcome">
      <div className="LoginBox-welcome-message">Welcome</div>
      <div className="LoginBox-welcome-message">to</div>
      <div className="LoginBox-welcome-appName">Quizzy</div>
    </div>
    <div className="LoginBox-login">
      <div className="LoginBox-form">
        <div className="LoginBox-title">Login</div>
        <div className="LoginBox-inputArea">
          <div className="Username-message">Username</div>
          <div className="Username-message Username-inputField-wrapper">
            <input type="text" className="Username-inputField" />
          </div>
          <div className="LoginBox-button-wrapper">
            <button className="LoginBox-login-button">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// LoginBox.propTypes = {
//   value: PropTypes.string.isRequired,
//   redirectBack: PropTypes.func,
// };
//
// LoginBox.defaultProps = {
//   redirectBack: '',
// };
export default LoginBox;
