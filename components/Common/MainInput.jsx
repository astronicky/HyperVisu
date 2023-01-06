import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function MainInput({ secureTextEntry, placeholder, label }) {
    return (
        <View style={styles.container}>
            <Text style={styles.inputLabelStyle}>{(label) && label}</Text>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={styles.input.placeholderTextColor} secureTextEntry={(secureTextEntry) && secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#2F2F31',
        placeholderTextColor: '#8E8E93',
        borderColor: '#8E8E93',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputLabelStyle: {
        fontSize: 17,
        lineHeight: 22,
        color: '#ffffff',
        marginRight: 8,
        flex: 0.5
    },
    input: {
        backgroundColor: '#2F2F31',
        fontSize: 17,
        lineHeight: 22,
        color: '#ffffff',
        placeholderTextColor: '#8E8E93',
        flex: 1
    },
});