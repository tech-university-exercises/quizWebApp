import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import './render.css';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header title="Quizzy" />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
