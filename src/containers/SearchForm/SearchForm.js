import React, { Component } from 'react';

export default class SearchForm extends Component {
  state = {};

  render() {
    return (
      <div>
        This is the search form placeholder
        <input type="text" className="input-search" />
      </div>
    );
  }
}

// Get local state disabled search formw hen searching.
// ensure to test for this, checking local component state.

// Reset button to clear and search again.

// Get key strokes into redux state and send and.
// get api results and store them and output them into components.

// Create button to see readme component use browser router and test in jest.
