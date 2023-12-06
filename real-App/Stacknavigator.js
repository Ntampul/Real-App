import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import loginscreen from './Screens/Loginscreen';
import RegisterSreen from './Screens/RegisterSreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const stacknavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={loginscreen} option= {{ hearderShown: false}}/>
      <Stack.Screen name="Register" component={RegisterSreen} option= {{ hearderShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default stacknavigator

const styles = StyleSheet.create({})