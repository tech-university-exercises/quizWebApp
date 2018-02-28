import React from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './leadlist.css';

const populateLeaderBoard = props => props.topFive.map((eachEntry, index) => {
  let highClass = 'eachLeaderBoard';
  if (eachEntry.username === props.username) {
    highClass += ' highClass';
  }
  return (
    <div className={highClass}>
      <div className="leaderboard-rank">{index + 1}.</div>
      <div className="leaderboard-username">{eachEntry.username}</div>
      <div className="leaderboard-expand" />
      <div className="leaderboard-score">{eachEntry.score}</div>
    </div>);
});


const LeadList = props => (
  <div className="leader-listing">
    <div className="leaderboard-heading">Leaderboard</div>
    <div>{populateLeaderBoard(props)}</div>
  </div>
);

// LeadList.propTypes = {
//   value: PropTypes.string.isRequired,
//   redirectBack: PropTypes.func,
// };
//
// LeadList.defaultProps = {
//   redirectBack: '',
// };
export default LeadList;
