import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { fromLeft, fromBottom } from 'react-navigation-transitions';

import AuthScreen from '../screens/Auth';
import HomeScreen from '../screens/Home';
import ReportScreen from '../screens/Report';
import SettingScreen from '../screens/Settings';

const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    transitionConfig: () => fromLeft(2000)
  }
);

const AppStack = createStackNavigator(
  {
    App: HomeScreen,
    Report: ReportScreen,
    Setting: SettingScreen
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
    transitionConfig: () => fromLeft(2000)
  }
);
const PrimaryNav = createSwitchNavigator(
  {
    // Loading: LoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'App'
  }
);

export default createAppContainer(PrimaryNav);
