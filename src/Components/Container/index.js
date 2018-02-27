import React from 'react';
import PropTypes from 'prop-types';
import LoginBox from '../LoginBox';
import Questions from '../QuestionScreen';
import './container.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showScreen: 1,
      numberOfQuestions: 0,
      optionsMarked: {},
      allQuestionsArray: [],
    };
  }
  componentDidMount() {
    fetch('/getQuestion').then(response => response.json()).then((response) => {
      this.setState({
        allQuestionsArray: response,
        numberOfQuestions: response.length,
      });
    });
  }
  render() {
    const setOptionsMarked = (newOptionsToBeMarked) => {
      this.setState({
        optionsMarked: newOptionsToBeMarked,
      });
    };

    const changeScreen = (screenNumber) => {
      this.setState({
        showScreen: screenNumber,
      });
    };
    if (this.state.showScreen === 1) {
      return (
        <div className="Container-wrapper">
          <LoginBox
            setOptionsMarked={setOptionsMarked}
            changeUsername={this.props.changeUsername}
            changeScreen={(screenNumber) => {
            changeScreen(screenNumber);
          }}
          />
        </div>
      );
    } else if (this.state.showScreen === 2) {
      return (
        <Questions
          username={this.state.username}
          allQuestionsArray={this.state.allQuestionsArray}
          optionsMarked={this.state.optionsMarked}
          changeScreen={(screenNumber) => {
          changeScreen(screenNumber);
        }}
        />
      );
    }
  }
}

Container.propTypes = {
  changeUsername: PropTypes.func.isRequired,
};
export default Container;
