import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../../global-styles/global.scss';
import classes from './App.module.scss';

class App extends Component {
  state = {
    person: 'testing',
  };

  testFunct = () => 'Search Below';

  render() {
    return (
      <div className={classes.app} person={this.state.person}>
        <Header name="header" />
        {this.testFunct()}
        <SearchForm name="search" />
        <Footer name="footer" />
      </div>
    );
  }
}

export default App;
