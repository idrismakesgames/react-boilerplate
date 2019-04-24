import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  const footer = shallow(<Footer />);

  it('renders properly', () => {
    expect(footer).toMatchSnapshot();
  });

  it('displays footer text', () => {
    expect(footer.find('.footer').text()).toEqual('Footer');
  });
});
