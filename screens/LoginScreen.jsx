import React from "react";
import Layout from "../components/Layout/Layout";
import { Text, Button, StyleSheet } from "react-native";
import { CONNECT } from "../Constant";

export default function LoginScreen({ navigation }) {
    return (
        <Layout header={true} footer={true}>
            <Text style={styles.bodyTitle}>Login Page</Text>
            <Button title="Go to Connect page" onPress={() => navigation.navigate(CONNECT)} />
        </Layout>
    )
}

const styles = StyleSheet.create({
    bodyTitle: {
        color: '#ffffff'
    }
});