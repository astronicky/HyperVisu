import React from "react";
import Layout from "../components/Layout";
import { Text, Button } from "react-native";

export default function LoginScreen({ navigation }) {
    return (
        <Layout>
            <Text>Login Page</Text>
            <Button title="Go to Connect page" onPress={() => navigation.navigate('Connect')} />
        </Layout>
    )
}