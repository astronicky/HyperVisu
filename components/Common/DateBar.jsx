import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import moment from 'moment';
import { useOrientation } from '../../hooks/useOrientation';

const width = 30;
const height = 30;
const fontSize = width * 0.5;
const DataBar = ( { flagButton , handleClick} ) => {
    
    const [currentDate, setCurrentDate] = useState();
    const [clickFlag, setClickFlag] = useState();
    const orientation = useOrientation();

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(moment().format('ddd, D MMM YYYY | hh:mm A'));
        }, 1000);
    }, []);
    
    return (
        <View style={portrait.container}>
            <Text style={orientation === 'PORTRAIT' ? portrait.dateText : landscape.dateText}>{currentDate}</Text>
            {flagButton &&  
            <View style={portrait.plusButtonContainer}>
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick(true)}>
                    <View style={clickFlag ? {...portrait.buttonColor, backgroundColor: '#4CD964'} : {...portrait.buttonColor, backgroundColor: '#2F2F31'}}>
                        <Text style={{ color: '#ffffff', fontSize: fontSize }}>+</Text>
                    </View>
                </Pressable>
            </View>}
        </View>
    )
};

const portrait = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
        opacity: 0.7
    },
    plusButtonContainer: {
        width: width, 
        height: height, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonColor:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: height / 2, 
        width: width, 
        height: height
    }
});

const landscape = StyleSheet.create({
    dateText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 22,
        opacity: 0.7
    }
});

export default DataBar;

