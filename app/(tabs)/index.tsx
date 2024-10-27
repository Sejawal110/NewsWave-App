import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from '@/components/Navigations/HomeNavigator'

export default function index() {
  return (
  
    
    <NavigationContainer independent={true}>
      <HomeNavigator />
    </NavigationContainer>
  
  )
}

const styles = StyleSheet.create({
  
})