import React from 'react';
import './loginbox.css';


const identifyUserAndRedirect = (props, username) => {
  if (username.trim() === '') {
    window.alert('Enter valid username');
  } else {
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify({ username }),
    }).then(response => response.json()).then((response) => {
      if (response.markedOptions) {
        props.setOptionsMarked(response.markedOptions);
      }
      props.changeUsername(username);
      props.changeScreen(2);
    });
  }
};

class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  render() {
    return (
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
                <input
                  type="text"
                  className="Username-inputField"
                  onChange={(event) => {
                  this.setState({
                    username: event.target.value,
                  }, () => {
                    console.log(this.state.username);
                  });
                }}
                />
              </div>
              <div className="LoginBox-button-wrapper">
                <button
                  className="LoginBox-login-button"
                  onClick={() => {
                    identifyUserAndRedirect(this.props, this.state.username);
                  }}
                >Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// LoginBox.propTypes = {
//   value: PropTypes.string.isRequired,
//   redirectBack: PropTypes.func,
// };
//
// LoginBox.defaultProps = {
//   redirectBack: '',
// };
export default LoginBox;
