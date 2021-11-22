import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import UselessTextInput from './Components/Square'

export default function App() {
  return (
    <View style={styles.main}>
      <UselessTextInput></UselessTextInput>
    </View>
  );

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    marginTop: 30
  },

});
