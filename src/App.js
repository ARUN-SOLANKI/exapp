import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View } from 'react-native'
import StackNavigator from './routes/StackNavigator'

function App() {
  return (
    <>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  )
}

export default App




