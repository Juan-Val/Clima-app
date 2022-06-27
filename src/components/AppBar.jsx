import {  useState } from 'react';
import { StyleSheet,TextInput, TouchableWithoutFeedback , View } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import Constants from 'expo-constants';
import SvgSearch from '../icons/searchIcon';
import { fetchClima } from '../store/slices/functions';


export const AppBar = () => {

  // State de formulario
  const {control,handleSubmit,reset,formState:{error}} = useForm({
    defaultValues:{
      search:''
    }
  });

  
  const onSubmit = (data) => {  
    fetchClima(data.search);
  }

  return (
    <View style={styles.form}>
      <Controller
      control={control}
      rules={{required: true}}
      render={({field: {onChange,value}})=> (
          <TextInput placeholder='Buscar' style={styles.input} onChangeText={onChange}
        value={value}/>
      )}
      name='search'/>
       <TouchableWithoutFeedback  onPress={handleSubmit(onSubmit)}>
          <SvgSearch width={28} height={28}/>  
        </TouchableWithoutFeedback> 
    </View>
  )
}

const styles = StyleSheet.create({
  form:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight+10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 7,
  },
  input:{
    width: '90%',
    padding: 7,
    fontSize:18
  },
  button:{
    fontSize:18,
  }
})