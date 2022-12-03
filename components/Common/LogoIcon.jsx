import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const logoIconEllispe = require('../../assets/images/logo_icon_ellispe.png');
const logoIconRect = require('../../assets/images/logo_icon_rect.png');
const logoEllispe = require('../../assets/images/logo_ellispe.png');
const loggRect = require('../../assets/images/logo_rect.png');

export default function LogoIcon({ color, header }) {
    if (header) {
        return (
            <View style={styles.logoContainer}>
                <Image source={logoIconEllispe} style={styles.iconEllispe}></Image>
                <Image source={logoIconRect} style={styles.iconRect}></Image>
            </View>
        )
    } else {
        if (color === 'white') {
            return (
                <View style={styles.logoContainer}>
                    <Image source={logoEllispe} style={styles.ellispe}></Image>
                    <Image source={loggRect} style={styles.rect}></Image>
                </View>
            )
        } else {
            return (
                <View style={styles.logoContainer}>
                    <Image source={logoEllispe} style={styles.ellispe}></Image>
                    <Image source={loggRect} style={styles.rect}></Image>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    logoContainer:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconEllispe: {
        width: 50,
        height: 50,
    },
    iconRect: {
        position: 'absolute',
        width: 23,
        height: 16
    },
    ellispe: {
        width: 92,
        height: 92,
    },
    rect: {
        position: 'absolute',
        width: 42,
        height: 30
    }
});