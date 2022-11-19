import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Header({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10
    },
    headerTitle: {
        color: '#ffffff'
    }
});