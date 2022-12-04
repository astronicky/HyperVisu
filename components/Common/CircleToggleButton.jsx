import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
const width = 52;
const height =32;
padding = height / 10;

const CircleToggleButton = ({ title, onShowModal }) => {

    const [clickFlag, setClickFlag] = useState();

    return (
        <Pressable onPress={() => (onShowModal) && onShowModal(true)}>
            <View style={styles.container}>
                <View><Text style={styles.titleText}>{title}</Text></View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag) }}>
                        <View style={clickFlag ? styles.buttonOn : styles.buttonOff}>
                            <View style={styles.switch} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 21,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 21,
        backgroundColor: '#2F2F31',
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: {
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        lineHeight: 17
    },
    buttonContainer: {
        width: width, 
        height: height, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonOn: {
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        backgroundColor: '#4CD964',
        borderRadius: height / 2, 
        padding: padding, 
        width: width, 
        height: height
    },
    buttonOff: {
        flexDirection: 'row', 
        backgroundColor: '#6A6A6B', 
        borderRadius: height / 2, 
        padding: padding, 
        width: width, height: height
    },
    switch: {
        flex: 0.5, 
        backgroundColor: '#ffffff', 
        borderRadius: (height * 0.8) / 2
    }
});

export default CircleToggleButton;