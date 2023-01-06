import React from "react";
import LogoIcon from "../Common/LogoIcon";
import LogoTitle from "../Common/LogoTitle";
import { View, StyleSheet } from "react-native";

export default function Header({ children }) {
    return (
        <View style={styles.container}>
            <LogoIcon color={'white'} header />
            <LogoTitle color={'white'} header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        paddingBottom: 6,
        paddingHorizontal: 17,
        borderWidth: 2,
        borderBottomColor: '#F1580C',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',    
        justifyContent: 'space-between'
    },
    headerTitle: {
        color: '#ffffff'
    }
});