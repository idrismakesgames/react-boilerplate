import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  const header = shallow(<Header />);

  it('renders properly', () => {
    expect(header).toMatchSnapshot();
  });

  it('displays footer text', () => {
    expect(header.find('h1').text()).toEqual('Welcome to my `Boilerplate Test Project`');
  });
});
