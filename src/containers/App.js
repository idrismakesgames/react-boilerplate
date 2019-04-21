import React, { Component } from 'react';
import '../global-styles/global.scss';
import classes from './App.module.scss';

class App extends Component {
  state = {
    person: 'testing',
  };

  testFunct = () => 'Add this';

  render() {
    return (
      <div className={classes.app}>
        {this.state.person} Sewhatatart! {this.testFunct()}
      </div>
    );
  }
}

export default App;
