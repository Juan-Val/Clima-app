import React from 'react'
import { Text,Image,View,StyleSheet } from 'react-native'

const url = '//cdn.weatherapi.com/weather/64x64/day/113.png'

export const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Image style={styles.image} source={{uri: `http:${url}`}}/>
        <Text style={styles.clima}>Sunny</Text>
      </View>
      <View style={styles.degree}>
        <Text style={styles.city}>Pachuca De Soto</Text>
        <Text style={styles.temperature}>29°</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical:5,
    flexDirection: 'row',
  },
  clima:{
    alignSelf: 'center',
    fontSize:22,
    color: '#fff',
    marginTop: -20
  },
  image:{
    width: 100,
    height: 100,
  },
  degree:{
    alignItems: 'flex-end',
  },
  city:{
    marginBottom: -10,
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
  temperature:{
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
  },
})