import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardData from './src/hooks/CardData'
import NavigationLayout from './src/components/NavigationLayout';
import { Provider } from 'react-redux';
import store from './src/store/store';


const App = () => {
  // CardData()
  return (
    <Provider store={store}>
      <NavigationLayout />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})