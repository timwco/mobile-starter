/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// Only runs for dev
if (window.__DEV__) {
  import('./src/utils/reactotron');
}

// Prevents the Yellow Boxes from appearing. 
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
