import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LOGO_TITLE, LOGO_SUB_TITLE } from "../../Constant";

export default function LogoTitle({ color, header }) {
    if (header) {
        return (
            <View style={styles.containerHeader}>
                <Text style={styles.mainTitleHeader}>{LOGO_TITLE}</Text>
                <Text style={styles.subTitleHeader}>{LOGO_SUB_TITLE}</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.mainTitle}>{LOGO_TITLE}</Text>
                <Text style={color === 'white' ? styles.subTitleWhite : styles.subTitle}>{LOGO_SUB_TITLE}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: 13
    },
    subTitle: {
        fontSize: 18,
        color: '#F1580C'
    },
    subTitleWhite: {
        fontSize: 18,
        color: '#ffffff'
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    mainTitleHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    subTitleHeader: {
        fontSize: 10,
        color: '#ffffff'
    },
    containerHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
});