import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SquarePink, SquareRed } from './Components/Square'

export default function App() {
  return (
    <View style={styles.main}>
      <SquarePink />
      <View style={styles.squareRedFlex}>
        <SquareRed />
      </View>
      <SquarePink />
      <View style={styles.squareRedFlex}>
        <SquareRed />
        <SquareRed />
      </View>
      <SquarePink />
      <View style={styles.squareRedFlex}>
        <SquareRed />
        <SquareRed />
        <SquareRed />
      </View>
      <SquarePink />
    </View>
  );

}

const styles = StyleSheet.create({

  squareRedFlex: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around'
  },

});
