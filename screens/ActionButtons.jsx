import React from "react";
import { View, StyleSheet } from "react-native";
import Layout from "../components/Layout/Layout";
import ActionButton from "../components/Common/ActionButton";
import { ACTION_TURN_OFF } from "../Constant";

export default function ActionButtons({ navigation }) {
    return (
        <Layout header={true}>
            <View style={styles.container}>
                <ActionButton name={ACTION_TURN_OFF} style={styles[ACTION_TURN_OFF]} />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    [ACTION_TURN_OFF]: {
        width: 30,
        height: 30
    }
});