import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomeImage from './Components/CustomeImage'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <CustomeImage />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 50,
  }
});
