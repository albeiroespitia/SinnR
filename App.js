import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Components/FullViews/Home';

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen }
})

export default class App extends React.Component {
  render() {
    return (
        <AppNavigator>

        </AppNavigator>
    );
  }
}
