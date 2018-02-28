import React from 'react';
import PropTypes from 'prop-types';
import EachQuestion from '../EachQuestion';
import './questionlist.css';

class QuestionList extends React.Component {
  render() {
    const populateQuestion = () => this.props.allQuestionsArray
      .map((eachEntry, index) => (<EachQuestion
        username={this.props.username}
        setOptionsMarked={this.props.setOptionsMarked}
        wasChecked={this.props.optionsMarked[eachEntry.questionId]}
        index={index + 1}
        question={eachEntry}
      />));
    return (
      <div className="Question-list-wrapper">
        {populateQuestion()}
      </div>
    );
  }
}
QuestionList.propTypes = {
  allQuestionsArray: PropTypes.array.isRequired,
  optionsMarked: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  setOptionsMarked: PropTypes.func.isRequired,
};

export default QuestionList;
