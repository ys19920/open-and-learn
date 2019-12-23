import React from 'react';
// import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoadingScreen from '../screens/Loading';
import AuthScreen from '../screens/Auth';
import HomeScreen from '../screens/Home';
const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none'
  }
);

const AppStack = createStackNavigator(
  {
    App: HomeScreen
  },
  {
    initialRouteName: 'App',
    headerMode: 'none'
  }
);
const PrimaryNav = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(PrimaryNav);
