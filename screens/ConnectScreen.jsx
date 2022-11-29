import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import Layout from "../components/Layout/Layout";
import Logo from "../components/Common/Logo";
import MainButton from "../components/Common/MainButton";
import { LOGIN, CONNECT } from "../Constant";

export default function ConnectScreen({ navigation }) {

    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }; 

    useEffect(() => {
        changeScreenOrientation();
    });

    return (
        <Layout>
            <View style={styles.container}>
                <Logo />
                <MainButton {...{ style: styles.mainButton, title: CONNECT, path: LOGIN, navigation }} />
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