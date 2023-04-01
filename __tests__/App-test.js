/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import App from '../src/App';

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

it('renders correctly', () => {
  renderer.create(AppRegistry.registerComponent(appName, () => App));
});
