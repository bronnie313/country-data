import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../features/store';
import Modal from '../Modal';

describe('home component', () => {
  it('testing if page matches', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Modal />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
