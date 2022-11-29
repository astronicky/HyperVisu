import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import ActionButton from "./ActionButton";
import { useOrientation } from '../../hooks/useOrientation';
import { ACTION_ARROW_UP, ACTION_ARROW_DOWN, CHECKBOX_WHITE } from '../../Constant';

const handleClick = () => {
    console.log('switch button');
}

const SwitchButton = () => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    return (
        <View style={orientationStyle.container}>
            <ActionButton name={ACTION_ARROW_UP} style={orientationStyle[ACTION_ARROW_UP]} onClick={handleClick} />
            <Image source={CHECKBOX_WHITE}></Image>
            <ActionButton name={ACTION_ARROW_DOWN} style={orientationStyle[ACTION_ARROW_DOWN]} onClick={handleClick} />
        </View>
    );
};

const portrait = StyleSheet.create({
    [ACTION_ARROW_DOWN]: {
        width: 40,
        height: 40
    },
    [ACTION_ARROW_UP]: {
        width: 40,
        height: 40
    },
    container: {
        backgroundColor: '#F1580C',
        borderRadius: 30,
        padding: 25.3,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '45%'
    }
});

const landscape = StyleSheet.create({
    [ACTION_ARROW_DOWN]: {
        width: 50,
        height: 50
    },
    [ACTION_ARROW_UP]: {
        width: 50,
        height: 50
    },
    container: {
        backgroundColor: '#F1580C',
        borderRadius: 30,
        padding: 25.3,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '25%'
    }
});

export default SwitchButton;