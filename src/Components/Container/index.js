import React from 'react';
import LoginBox from '../LoginBox';
import './container.css';

class Container extends React.Component {
  render() {
    return (
      <div className="Container-wrapper">
        <LoginBox />
      </div>
    );
  }
}

export default Container;
