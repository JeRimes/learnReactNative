import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
function CustomImage() {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <Image
                source={
                    require('../img/cookie.jpg')
                }
                style={{ width: 200, height: 200 }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
    },
});

export default CustomImage;