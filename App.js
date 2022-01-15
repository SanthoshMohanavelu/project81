import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Button, TouchableOpacity, Image, BackgroundImage} from 'react-native'


export default class App extends Component {
  render() {
    return(
      <NavigationContainer >
      <DrawerNavigator />
      </NavigationContainer>
      
    )
  }
}
