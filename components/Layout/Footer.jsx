import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        left: 0,
        bottom: 0
    },
});