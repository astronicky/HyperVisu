import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Header({ children }) {
    return (
        <View style={styles.container}>
            <Text>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10
    },
});