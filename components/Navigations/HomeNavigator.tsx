// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import ReadNews from '../Screens/ReadNews';


const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
        options={{headerShown: false}}
         name="Home" 
         component={HomeScreen} />
         <Stack.Screen 
         options={{headerShown: false}}
         name='Read-News'
          component={ReadNews} />
         
      </Stack.Navigator>
     )
}

export default HomeNavigator;