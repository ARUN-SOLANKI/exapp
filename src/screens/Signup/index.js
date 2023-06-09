import { ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import background from '../../assets/App.jpeg'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Signup = () => {
  return (
    <ImageBackground source={background} style={styles.background}>
    <SafeAreaView style={styles.container}>
    <Text style={styles.header}>
      Sign Up
    </Text>
    <View>
      <Input label="NAME" placeholder="name"  />
      <Input label="PASSWORD" placeholder="password" style={styles.passwordInput} />
      <View style={styles.loginButtonContainer}>
        <Button text='Sign Up' style={styles.loginButton} />
      </View>
    </View>

    <View>
      <Text style={styles.newAcctext}>I Already have an Account</Text>
    </View>
    </SafeAreaView>
  </ImageBackground>
  )
}

export default Signup

const styles = StyleSheet.create({
  background :{
    flex :1, 
    paddingHorizontal:10,
   
  },
  container: {
    flex:1,
    justifyContent:'space-between',
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    color:'#fff',
    textAlign :'center'
  },
  loginButton:{
    paddingHorizontal:60
  },
  loginButtonContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems :'center',
    justifyContent: 'space-between',
    marginTop:10
  },
  passwordInput:{
    marginTop:10
  },
  forgetText:{
    fontSize:16,
    color:'#fff'
  },
  newAcctext:{
    fontSize:18,
    color:'#F20078',
    textAlign :'center'
  }
});