import 'react-native-gesture-handler';
import { AppRegistry, Platform } from 'react-native';
import { enableScreens } from 'react-native-screens';
import App from './src/App';
import { name as appName } from './app.json';

console.disableYellowBox = true;
enableScreens(true);

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
}
