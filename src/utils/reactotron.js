import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({name: 'Quse :: Mobile App'})
  .useReactNative()
  .use(reactotronRedux())
  .connect();

Reactotron.clear();

// Re-Bind the Console.Log
const _originalLog = console.log;

console.log = (...args) => {
  // always call the old one, because React Native does magic swizzling too
  _originalLog(...args);

  // send this off to Reactotron.
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

export default reactotron;
