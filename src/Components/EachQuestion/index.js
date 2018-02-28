import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './eachQuestion.css';

const optionSelectionMade = (event, props) => {
  console.log(event.target.value, event.target.name, props.username);
  fetch('/question', {
    method: 'POST',
    body: JSON.stringify({
      username: props.username,
      questionId: event.target.name,
      option: event.target.value,
    }),
  }).then(response => response.json()).then((response) => {
    props.setOptionsMarked(response);
  });
};

const populateOptions = (props) => {
  const optionsDivArray = [];
  for (const option in props.question.options) {
    // console.log(props.question.options[option]);
    optionsDivArray.push(<div className="EachQuestion-radio">
      <input
        type="radio"
        checked={props.wasChecked === props.question.options[option]}
        onChange={(event) => { optionSelectionMade(event, props); }}
        name={props.question.questionId}
        value={props.question.options[option]}
      /> {props.question.options[option]}
                         </div>);
  }
  return optionsDivArray;
};
const EachQuestion = props => (
  <div className="EachQuestion-wrapper">
    <div className="EachQuestion-title">Question {props.index}</div>
    <div className="EachQuestion-question">{props.question.question}</div>
    <div className="EachQuestion-options">{populateOptions(props)}</div>
  </div>
);

EachQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  wasChecked: PropTypes.string.isRequired,
};
export default EachQuestion;
