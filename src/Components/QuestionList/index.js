import React from 'react';
import PropTypes from 'prop-types';
import EachQuestion from '../EachQuestion';
import './questionlist.css';

class QuestionList extends React.Component {
  render() {
    const populateQuestion = () => this.props.allQuestionsArray
      .map(eachEntry => <EachQuestion question={eachEntry} />);
    return (
      <div>
        {populateQuestion()}
      </div>
    );
  }
}
QuestionList.propTypes = {
  allQuestionsArray: PropTypes.array.isRequired,
};
export default QuestionList;
