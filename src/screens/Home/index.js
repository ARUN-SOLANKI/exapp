import { StyleSheet, Text, View } from 'react-native'
import Contacts from 'react-native-contacts';
import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    Contacts.checkPermission().then(permission => {
      if (permission === 'undefined') {
        Contacts.requestPermission().then(permission => {
        })
      }
      if (permission === 'authorized') {
        console.log("Authriztion....")
        Contacts.getAll().then((contacts) => console.log(contacts,"{}{}{"))
      }
      if (permission === 'denied') {
      }
    })

  }, [])
  
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})