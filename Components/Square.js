import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text, FlatList, TouchableOpacity } from "react-native";


const UselessTextInput = () => {
    const [text, setText] = useState("");

    const [pays, setPays, onPress] = useState([]);

    const addTip = (value) => {
        var item = { id: (pays.length + 1).toString(), title: value, stroke: false };
        setPays([...pays, item]);
    }
    // const Item = ({ item, onPress, backgroundColor, textColor }) => (
    //     <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    //         <Text style={styles.item}>{item.title}</Text>
    //     </TouchableOpacity>
    // );
    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    // const color = item.id === selectedId ? 'white' : 'black';
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setText(val)}
                value={text}
            />
            <Text>{text}</Text>
            <Button
                onPress={() =>
                    addTip(text)
                }
                title="Ajouter"
                color="#841584"
            />
            <FlatList
                data={pays}
                renderItem={({ item }) =>
                    <Text style={styles.item}>{item.title}</Text>
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: "red",
        color: 'white',
        padding: 10
    }
});

export default UselessTextInput;
