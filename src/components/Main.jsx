import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Days } from './Days'

export const Main = () => {
  const dias =[
    {day:1},
    {day: 2},
    {day:3},
    {day:4},
  ]
  return (
    <View style={styles.container}>
      {dias.map(dia => (
        <Days key={dia.day}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})
