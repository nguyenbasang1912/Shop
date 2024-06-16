/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/configs/i18n/i18n.config'
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
