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
          username={this.props.username}
          setOptionsMarked={this.props.setOptionsMarked}
          optionsMarked={this.props.optionsMarked}
          allQuestionsArray={this.props.allQuestionsArray}
        />
        <div className="Score-calculate">Calculate</div>
      </div>
    );
  }
}

QuestionScreen.propTypes = {
  optionsMarked: PropTypes.object,
  allQuestionsArray: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};
QuestionScreen.defaultProps = {
  optionsMarked: {},
};
export default QuestionScreen;
