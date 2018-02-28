import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Container from '../Container';
import './render.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'anmol',
    };
  }
  render() {
    const changeUsername = (newUsername) => {
      this.setState({
        username: newUsername,
      });
    };
    return (
      <div className="Container">
        <Header title="Quizzy" username={this.state.username} />
        <Container username={this.state.username} changeUsername={changeUsername} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
