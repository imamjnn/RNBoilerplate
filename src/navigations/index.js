// In App.js in a new project

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from 'screens/home'
import AboutScreen from 'screens/about'
import { fonts } from 'styles'

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {fontFamily: fonts.medium},
          headerStyle: {height: 52, backgroundColor: 'white'},
          headerBackTitleStyle: {fontFamily: fonts.medium},
          headerPressColorAndroid: 'rgba(0, 0, 0, 0.20)',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;