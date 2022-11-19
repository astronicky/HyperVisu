import React from "react";
import { View, StyleSheet } from "react-native";

export default function LogoIcon({ color }) {
    if (color === 'white') {
        return (
            <View style={styles.iconOutLineWhite}>
                <View style={styles.iconInnerLineWhite} />
            </View>
        )
    } else {
        return (
            <View style={styles.iconOutLine}>
                <View style={styles.iconInnerLine} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconOutLine: {
        borderColor: '#F1580C',
        borderWidth: 2,
        width: 92,
        height: 92,
        borderRadius: 92 / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconOutLineWhite: {
        borderColor: '#ffffff',
        borderWidth: 2,
        width: 92,
        height: 92,
        borderRadius: 92 / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconInnerLine: {
        borderColor: '#F1580C',
        borderWidth: 6,
        width: 42,
        height: 30,
        borderRadius: 10
    },
    iconInnerLineWhite: {
        borderColor: '#ffffff',
        borderWidth: 6,
        width: 42,
        height: 30,
        borderRadius: 10
    }
});