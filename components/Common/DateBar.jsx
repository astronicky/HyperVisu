import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import ActionButton from './ActionButton';
import { ACTION_CIRECLE_PLUS } from '../../Constant';
import { useOrientation } from '../../hooks/useOrientation';

const DataBar = ( { flagButton , handleClick} ) => {
    
    const [currentDate, setCurrentDate] = useState();
    const orientation = useOrientation();

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(moment().format('ddd, D MMM YYYY | hh:mm A'));
        }, 1000);
    }, []);
    
    return (
        <View style={portrait.container}>
            <Text style={orientation === 'PORTRAIT' ? portrait.dateText : landscape.dateText}>{currentDate}</Text>
            {flagButton && <ActionButton name={ACTION_CIRECLE_PLUS} style={portrait[ACTION_CIRECLE_PLUS]} onClick={handleClick}/>}  
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
    [ACTION_CIRECLE_PLUS]: {
        width: 30,
        height: 30
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

