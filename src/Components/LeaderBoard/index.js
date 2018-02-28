import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import LeadList from '../LeadList';
import './leaderboard.css';

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
const LeaderBoard = props => (
  <div className="leaderboard-wrapper">
    <div className="leaderboard-top">
      <div className="leader-score-message">Your score</div>
      <div className="user-total-score">
        <div className="leader-score">{calculateScore(props)}</div>
        <div className="maximum-marks">/{props.allQuestionsArray.length}</div>
      </div>
    </div>
    <LeadList />
    <div className="Play-again">
      <button
        className="Play-again-button"
        onClick={() => {
        props.changeScreen(1);
      }}
      ><span>Play again</span>
      </button>
    </div>
  </div>
);

LeaderBoard.propTypes = {
  optionsMarked: PropTypes.object.isRequired,
  allQuestionsArray: PropTypes.array.isRequired,
  changeScreen: PropTypes.func.isRequired,
};

export default LeaderBoard;
