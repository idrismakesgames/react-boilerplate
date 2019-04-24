import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  describe('Header ', () => {
    it('is contained within the `App` component, with a name prop', () => {
      expect(app.find('Header').exists()).toEqual(true);
      expect(app.find('Header')).toHaveProp('name', 'header');
    });
  });

  describe('Search Form ', () => {
    it('is contained within the `App` component, with a name prop', () => {
      expect(app.find('SearchForm').exists()).toEqual(true);
    });
  });

  describe('Footer ', () => {
    it('is contained within the `App` component, with a name prop', () => {
      expect(app.find('Footer').exists()).toEqual(true);
      expect(app.find('Footer')).toHaveProp('name', 'footer');
    });
  });
});
