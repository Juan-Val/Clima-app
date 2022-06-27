import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Caracteristicas } from './Caracteristicas'

export const Days = () => {
  const url = '//cdn.weatherapi.com/weather/64x64/day/113.png'
  return (
    <View style={styles.day}>
     <View style={styles.header}>
        <Image style={styles.image} source={{uri: `http:${url}`}}/>
        <Text style={styles.clima}>Sunny</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.degree}>
        <Text style={styles.city}>Pachuca De Soto</Text>
        <Text style={styles.temperature}>29°</Text>
      </View> 
        <Caracteristicas/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  day: {
    backgroundColor: '#fcfcfc',
    borderRadius: 5,
    flexDirection: 'row',
    margin: '2%',
    padding: '2%',
    shadowColor: "#2e2e2e",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
    width: '100%',
  },
  header: {
    flexDirection: 'column',
  },  
  image: {
    width: 60,
    height: 60,
  },
  clima:{
    alignSelf: 'center',
    color: '#000',
    fontSize: 16
  },
  container:{
    flexDirection: 'column',
    alignItems: 'center',
  },  
  degree: {
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    flex: 1,
  },
  city: {
    fontSize: 16,
    marginRight: 8
  },
  temperature:{
    fontSize: 16,
  }
})