import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('Search Form ', () => {
  const searchForm = shallow(<SearchForm />);

  it('renders properly', () => {
    expect(searchForm).toMatchSnapshot();
  });

  it('contains an input to enter a search command', () => {
    expect(searchForm.find('.input-search').exists()).toEqual(true);
  });
});
