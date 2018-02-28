import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import QuestionList from '../QuestionList';
import './questionscreen.css';

class QuestionScreen extends React.Component {
  render() {
    const calculateScore = (props) => {
      let score = 0;
      props.allQuestionsArray.map((eachEntry) => {
        if (props.optionsMarked[eachEntry.questionId] === eachEntry.correct) {
          score += 1;
        }
        return score;
      });
      return score;
    };

    return (
      <div className="QuestionScreen-list-and-button">
        <QuestionList
          username={this.props.username}
          setOptionsMarked={this.props.setOptionsMarked}
          optionsMarked={this.props.optionsMarked}
          allQuestionsArray={this.props.allQuestionsArray}
        />
        <div className="Score-calculate">
          <button
            className="Calculate-button"
            onClick={() => {
            fetch('/scores', {
              method: 'POST',
              body: JSON.stringify({
                username: this.props.username,
                optionsMarked: this.props.optionsMarked,
                score: calculateScore(this.props),
                maxMarks: this.props.allQuestionsArray.length,
              }),
            }).then(() => {
              this.props.changeScreen(3);
            });
          }}
          ><span>Calculate</span>
          </button>
        </div>
      </div>
    );
  }
}

QuestionScreen.propTypes = {
  optionsMarked: PropTypes.object,
  allQuestionsArray: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  changeScreen: PropTypes.func.isRequired,
  setOptionsMarked: PropTypes.func.isRequired,
};
QuestionScreen.defaultProps = {
  optionsMarked: {},
};
export default QuestionScreen;
