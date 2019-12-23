import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoadingScreen from '../screens/Loading';
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
    headerMode: 'none'
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
    headerMode: 'none'
  }
);
const PrimaryNav = createSwitchNavigator(
  {
    // Loading: LoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Auth'
  }
);

export default createAppContainer(PrimaryNav);
