import React from "react";
import { View, StyleSheet } from "react-native";
import LogoIcon from "./LogoIcon";
import LogoTitle from "./LogoTitle";

export default function Logo({ color }) {
    return (
        <View style={styles.container}>
            <LogoTitle {...{ color }} />
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
    }
});