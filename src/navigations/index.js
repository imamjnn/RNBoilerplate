// In App.js in a new project

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from 'screens/home'
import AboutScreen from 'screens/about'
import { fonts } from 'styles'
import { connect } from 'react-redux'

const Stack = createStackNavigator();

const RootNavigation = ({theme}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {fontFamily: fonts.medium},
          headerStyle: {height: 52, backgroundColor: theme.foreground},
          headerBackTitleStyle: {fontFamily: fonts.medium},
          headerPressColorAndroid: 'rgba(0, 0, 0, 0.20)',
          headerTintColor: theme.text
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  theme: state.LocalTheme.theme,
})

export default connect(mapStateToProps) (RootNavigation);