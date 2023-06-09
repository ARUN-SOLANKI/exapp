import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({text , style , textStyle}) => {
  return (
    <TouchableOpacity style={[styles.button,  style]}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#F20078',
    display:'flex',
    alignItems:'center',
    paddingVertical:12,
    borderRadius : 5
  },
  buttonText : {
    fontSize:20,
    fontWeight:'600',
    color:'#fff'
  }
})