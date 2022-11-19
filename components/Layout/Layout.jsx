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
        marginTop: 50,
        color: '#ffffff',
        backgroud: '#000000'
    },
});