import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../features/store';
import CountryList from '../countryList';

describe('home component', () => {
  it('testing if page matches', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CountryList />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
