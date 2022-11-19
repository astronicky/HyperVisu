import React from "react";
import { Text, Button } from "react-native";
import Layout from "../components/Layout/Layout";

export default function ConnectScreen({ navigation }) {
    return (
        <Layout header={true} footer={true}>
            <Text>Connect Page</Text>
            <Button title="Go to Login page" onPress={() => navigation.navigate('Login')} />
        </Layout>
    )
}