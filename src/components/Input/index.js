import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, TextInput } from 'react-native-paper'

const Input = ({label, placeholder , labelStyle , inputStyle , style }) => {
  return (
    <View style={style}>
     {label && <Text style={[styles.label , labelStyle]}>{label}</Text>}
      <TextInput placeholder={placeholder} style={[styles.textinput , inputStyle]} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  label :{
    color :'#efefef',
    fontSize:14,
    marginBottom:5
  },
  textinput:{
    borderRadius:5
  }
})