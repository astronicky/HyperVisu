import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import Layout from "../components/Layout/Layout";
import Logo from "../components/Common/Logo";
import MainButton from "../components/Common/MainButton";
import { LOGIN } from "../Constant";

export default function ConnectScreen({ navigation }) {
    return (
        <Layout header={true} footer={true}>
            <Text style={styles.bodyTitle}>Connect Page</Text>
            <Button title="Go to Login page" onPress={() => navigation.navigate(LOGIN)} />
            <Logo />
            <MainButton title={LOGIN} {...{ navigation, path: LOGIN }} />
        </Layout>
    )
}

const styles = StyleSheet.create({
    bodyTitle: {
        color: '#ffffff'
    }
});