import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LogoIcon from "./LogoIcon";
import { LOGO_TITLE, LOGO_SUB_TITLE } from "../../Constant";

export default function Logo({ color }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.mainTitle}>{LOGO_TITLE}</Text>
                <Text style={styles.subTitle}>{LOGO_SUB_TITLE}</Text>
            </View>
            <LogoIcon {...{ color }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: 13
    },
    subTitle: {
        fontSize: 18,
        color: '#ffffff'
    },
    mainTitle: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});