import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";

export default function Layout({ children, header }) {
    return (
        <View style={styles.container}>
            {(header) && <Header />}
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        height: '100%',
        alignItems: 'center'
    },
});