import React, { useState } from "react";
import { View, Text, Pressable ,StyleSheet } from 'react-native';

const width = 41;
const height = 30;
const padding = height / 10;
const borderRadius = height * 0.2;

const ScheduleItem = ( { title, setDate, setTime }) => {

    const [clickFlag, setClickFlag] = useState();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.scheduleText}>{title}</Text>
                <Pressable onPress={() => { setClickFlag(!clickFlag)}} style={styles.buttonContainer}>
                    <View style={clickFlag ? styles.buttonOn : styles.buttonOff} >
                        <View style={styles.buttonSwitch} />
                    </View>
                </Pressable>
            </View>
            <Text style={styles.dateText}>{setDate}</Text>
            <Text style={styles.timeText}>{setTime}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 29,
        paddingRight: 10.3,
        paddingBottom: 5,
        backgroundColor: '#1D1D1E',
        borderRadius: 10,
        marginBottom: 16
    },
    scheduleText: {
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19
    },
    dateText: {
        color: '#F1580C',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    timeText: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 41,
        letterSpacing: 0.41,
        color: '#FFFFFF'
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
        backgroundColor: '#F1580C', 
        borderRadius: borderRadius, 
        padding: padding, 
        width: width, 
        height: height
    },
    buttonOff: {
        flexDirection: 'row', 
        backgroundColor: '#6A6A6B', 
        borderRadius: borderRadius, 
        padding: padding, 
        width: width, 
        height: height
    },
    buttonSwitch: {
        flex: 0.5, 
        backgroundColor: '#ffffff', 
        borderRadius: height * 0.8 * 0.2
    }
});

export default ScheduleItem;

