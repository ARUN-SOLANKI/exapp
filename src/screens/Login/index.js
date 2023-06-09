import { ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import background from '../../assets/App.jpeg'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Login = ({navigation}) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>
          Login
        </Text>
        <View>
          <Input label="NAME" placeholder="name" />
          <Input label="PASSWORD" placeholder="password" style={styles.passwordInput} />
          <View style={styles.loginButtonContainer}>
            <Button text='login' style={styles.loginButton} onPress={()=>navigation.navigate('main')} />
            <TouchableOpacity>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.newAcctext} onPress={()=>navigation.navigate('signup')}>Create a New Account</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 10,

  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center'
  },
  loginButton: {
    paddingHorizontal: 60
  },
  loginButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  passwordInput: {
    marginTop: 10
  },
  forgetText: {
    fontSize: 16,
    color: '#fff'
  },
  newAcctext: {
    fontSize: 18,
    color: '#F20078',
    textAlign: 'center'
  }
});