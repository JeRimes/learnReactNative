import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text, FlatList, TouchableOpacity } from "react-native";


const UselessTextInput = () => {
    const [text, setText] = useState("");

    const [pays, setPays] = useState([]);

    const addTip = (value) => {
        if (pays == null) {
            var item = { id: '1', title: value, stroke: false };
            return setPays([item]);
        }
        var item = { id: (pays.length + 1).toString(), title: value, stroke: false };
        setPays([...pays, item]);
    }
    const pressHandler = (id) => {
        var tab = pays;
        console.log(tab);
        if (tab[id - 1] != null) {
            if (tab[id - 1].stroke == false) {
                tab[id - 1].stroke = true;
            }
            else {
                tab[id - 1].stroke = false;
            }
            setPays([...pays]);
        }

    }


    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setText(val)}
                value={text}
            />
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
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text style={item.stroke ? styles.stroke : styles.item}>{item.title}</Text>
                    </TouchableOpacity>
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
        backgroundColor: "green",
        color: 'white',
        padding: 10
    },
    stroke: {
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: "red",
        color: 'white',
        padding: 10,
        textDecorationLine: 'line-through'
    }
});

export default UselessTextInput;
