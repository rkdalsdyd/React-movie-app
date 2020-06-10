import React from 'react';
import Proptypes from 'prop-types';

class App extends React.Component {
  state = {
    count : 0,
  }

  Add = () => {
    this.setState(current => ({count : current.count + 1}));
  }

  Minus = () => {
    this.setState(current => ({count : current.count - 1}));
  }

  render() {
    return (
      <div>
        <h1>The number is {this.state.count} </h1>
        <button onClick={this.Add} >Add</button>
        <button onClick={this.Minus} >Minus</button>
      </div>
    );
  }
}

export default App;