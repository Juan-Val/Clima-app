import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import SvgDrop from '../icons/drop'
import SvgWind from '../icons/wind'

export const Caracteristicas = () => {
  return (
    <View style={styles.contanedorCaracteristicas}>
        <View style={styles.caracteristicas}>
          <SvgDrop />
          <Text style={styles.textCaracteristicas}>51%</Text>
        </View>
        <View style={styles.caracteristicas}>
          <SvgWind />
          <Text style={styles.textCaracteristicas}>51mph</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  contanedorCaracteristicas:{
    paddingBottom: 15,
    paddingTop:10,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  caracteristicas: {
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#256bad',
    flexDirection: 'row',
    marginRight:10,
    paddingVertical:5,
    paddingHorizontal:15,
    width: 'auto',

  },
  textCaracteristicas: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },  
})
