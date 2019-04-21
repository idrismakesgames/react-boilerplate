import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  describe('Footer', () => {
    it('is contained within the `App` component', () => {
      expect(app.find('Footer').exists()).toEqual(true);
    });

    it('contains the correct prop name', () => {
      expect(app.find('Footer')).toHaveProp('name', 'footer');
    });
  });
});
