import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
export const SquarePink = () => {
    return (
        <View style={styles.squarePink}></View>
    );
}

export const SquareRed = () => {
    return (
        <View style={styles.squareRed}></View>
    );
}

const styles = StyleSheet.create({
    squarePink: {
        backgroundColor: 'pink',
        width: 200,
        height: 100,
        marginTop: 10,
        marginBottom: 10
    },
    squareRed: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
        marginRight: 10,
    },
});