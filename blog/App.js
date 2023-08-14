import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  intitialRouteName: 'Index',
  deffaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};