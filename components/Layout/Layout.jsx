import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, header, footer }) {
    return (
        <View style={styles.container}>
            {(header) && <Header />}
            {children}
            {(footer) && <Footer />}
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