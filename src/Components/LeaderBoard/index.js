import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import LeadList from '../LeadList';
import './leaderboard.css';

class LeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      topFive: [],
    };
  }
  componentDidMount() {
    fetch(`/scores?username=${this.props.username}`).then(response => response.json())
      .then((response) => {
        if (response.score) {
          this.setState({
            score: response.score,
          });
        }
      });
    fetch('/highScore').then(response => response.json()).then((response) => {
      this.setState({
        topFive: response,
      });
    });
  }
  render() {
    return (
      <div className="leaderboard-wrapper">
        <div className="leaderboard-top">
          <div className="leader-score-message">Your score</div>
          <div className="user-total-score">
            <div className="leader-score">{this.state.score}</div>
            <div className="maximum-marks">/{this.props.allQuestionsArray.length}</div>
          </div>
        </div>
        <LeadList topFive={this.state.topFive} username={this.props.username} />
        <div className="Play-again">
          <button
            className="Play-again-button"
            onClick={() => {
              this.props.changeUsername('');
            this.props.changeScreen(1);
          }}
          ><span>Play again</span>
          </button>
        </div>
      </div>
    );
  }
}

LeaderBoard.propTypes = {
  optionsMarked: PropTypes.object.isRequired,
  allQuestionsArray: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  changeScreen: PropTypes.func.isRequired,
  changeUsername: PropTypes.func.isRequired,
};

export default LeaderBoard;
