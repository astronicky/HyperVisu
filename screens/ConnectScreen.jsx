import React from "react";
import { View, StyleSheet } from "react-native";
import Layout from "../components/Layout/Layout";
import Logo from "../components/Common/Logo";
import MainButton from "../components/Common/MainButton";
import { LOGIN, CONNECT } from "../Constant";

export default function ConnectScreen({ navigation }) {
    return (
        <Layout>
            <View style={styles.container}>
                <Logo />
                <MainButton style={styles.mainButton} title={CONNECT} {...{ navigation, path: LOGIN }} />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainButton: {
        position: 'absolute',
        bottom: 80,
        width: '90%'
    }
});