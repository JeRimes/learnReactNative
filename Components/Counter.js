import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>You clicked me {count} times</Text>
            <Button
                onPress={() => { setCount(count + 1) }} title="Increment"
            />
            <Button
                onPress={() => { setCount(count - 1) }} title="Decrease"
            />
            <Button
                onPress={() => { setCount(0) }} title="Reset"
            />

        </View>
    );
}
export default Counter;