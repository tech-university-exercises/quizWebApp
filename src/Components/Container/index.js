import React from 'react';
import LoginBox from '../LoginBox';
import QuestionList from '../QuestionList';
import './container.css';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      showScreen: 1,
    };
  }
  render() {
    const changeScreen = (screenNumber) => {
      this.setState({
        showScreen: screenNumber,
      });
    };
    if (this.state.showScreen === 1) {
      return (
        <div className="Container-wrapper">
          <LoginBox changeScreen={(screenNumber) => {
            changeScreen(screenNumber);
          }}
          />
        </div>
      );
    } else if (this.state.showScreen === 2) {
      return (
        <QuestionList
          username={this.state.username}
          changeScreen={(screenNumber) => {
          changeScreen(screenNumber);
        }}
        />
      );
    }
  }
}

export default Container;
