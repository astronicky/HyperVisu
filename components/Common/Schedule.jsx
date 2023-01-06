import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from "./ActionButton";
import { ACTION_REC_SWITCH_BUTTON } from '../../Constant';

const Schedule = ( { title, setDate, setTime }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.scheduleText}>{title}</Text>
                <ActionButton name={ACTION_REC_SWITCH_BUTTON} style={styles[ACTION_REC_SWITCH_BUTTON]} />
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
    [ACTION_REC_SWITCH_BUTTON]: {
        width: 42,
        height: 30,
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
    }
});

export default Schedule;

