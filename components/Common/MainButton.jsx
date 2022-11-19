import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

export default function MainButton({ title, path, navigation, style }) {
    return (
        <View {...{ style }}>
            <Pressable style={styles.button} onPress={() => navigation.navigate(path)}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        backgroundColor: '#F1580C',
    },
    text: {
        color: 'white',
        paddingTop: 13,
        paddingBottom: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#FFFFFF'
    },
});