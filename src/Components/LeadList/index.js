import React from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './leadlist.css';

const populateLeaderBoard = () => (
  <div className="eachLeaderBoard">
    <div className="leaderboard-rank">1.</div>
    <div className="leaderboard-username">Anmol</div>
    <div className="leaderboard-expand" />
    <div className="leaderboard-score">score</div>
  </div>);


const LeadList = () => (
  <div className="leader-listing">
    <div className="leaderboard-heading">Leaderboard</div>
    <div>{populateLeaderBoard()}</div>
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
