import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import svg from '../../icons/sports-car.svg';
import png from '../../images/sports-car.png';
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
        <img src={svg} alt="triangle with all three sides equal" height="87px" width="100px" />
        <img src={png} alt="triangle with all three sides equal" height="87px" width="100px" />
      </div>
    );
  }
}

export default App;
