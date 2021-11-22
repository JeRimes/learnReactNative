import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
function CustomImage() {
    return (
        <View>
            <Image
                source={
                    require('../img/cookie.jpg')
                }
                style={{ width: 200, height: 200 }}
            />
        </View>
    );
}
export default CustomImage;