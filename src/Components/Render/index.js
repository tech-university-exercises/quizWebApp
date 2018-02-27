import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Container from '../Container';
import './render.css';

class Main extends React.Component {
  render() {
    return (
      <div className="Container">
        <Header title="Quizzy" />
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
