import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureStore from '../../../store';

import HomeScreen from './'

test('renders correctly', () => {
    const tree = renderer.create(<Provider store={configureStore}><HomeScreen /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});