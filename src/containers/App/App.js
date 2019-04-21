import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import '../../global-styles/global.scss';
import classes from './App.module.scss';

class App extends Component {
  state = {
    person: 'testing',
  };

  testFunct = () => 'Add this';

  render() {
    return (
      <div className={classes.app}>
        {this.state.person} Sewhatatart! changing the snapshot to test json {this.testFunct()}
        <Footer name="footer" />
      </div>
    );
  }
}

export default App;
