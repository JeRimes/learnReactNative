import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomeImage from './Components/CustomeImage'

export default function App() {
  return (

    <View style={styles.main}>
      <CustomeImage />
      <Text style={styles.footer}>footer</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: 'grey',
    textAlign: 'center',
    padding: 10
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

});
