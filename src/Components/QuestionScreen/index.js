import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import QuestionList from '../QuestionList';
import './questionscreen.css';

class QuestionScreen extends React.Component {
  render() {
    return (
      <div>
        <QuestionList
          optionsMarked={this.props.optionsMarked}
          allQuestionsArray={this.state.allQuestionsArray}
        />
        <div className="Score-calculate">Calculate</div>
      </div>
    );
  }
}

QuestionScreen.propTypes = {
  optionsMarked: PropTypes.object.isRequired,
  allQuestionsArray: PropTypes.array.isRequired,
};
export default QuestionScreen;
