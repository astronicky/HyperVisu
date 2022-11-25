import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import ActionButton from "./ActionButton";
import { ACTION_ARROW_UP, ACTION_ARROW_DOWN, CHECKBOX_WHITE } from '../../Constant';

const handleClick = () => {
    console.log('switch button');
}

const SwitchButton = ({ style }) => {
    return (
        <View style={styles.container}>
            <ActionButton name={ACTION_ARROW_UP} style={styles[ACTION_ARROW_UP]} onClick={handleClick} />
            <Image source={CHECKBOX_WHITE}></Image>
            <ActionButton name={ACTION_ARROW_DOWN} style={styles[ACTION_ARROW_DOWN]} onClick={handleClick} />
        </View>
    );
};

const styles = StyleSheet.create({
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

export default SwitchButton;