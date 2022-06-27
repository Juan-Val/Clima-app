import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import { Caracteristicas } from './Caracteristicas'
import { Header } from './Header'

export const Card = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Caracteristicas />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#37ace3'
  },
})