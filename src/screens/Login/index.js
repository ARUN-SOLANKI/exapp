import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import background from '../../assets/App.jpeg'

const Login = () => {
  return (
    <ImageBackground source={background} style={{flex :1}}>
    <SafeAreaView style={styles.container}>
    <Text style={styles.header}>
      Login
    </Text>
    </SafeAreaView>
  </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems:'center',
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    color:'#fff'
  },
});