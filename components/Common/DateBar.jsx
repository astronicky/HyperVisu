import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment';
import ActionButton from './ActionButton';
import { ACTION_CIRECLE_PLUS } from '../../Constant';

const DataBar = ( { flagButton , handleClick} ) => {
    
    const [currentDate, setCurrentDate] = useState();

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(moment().format('ddd, D MMM YYYY | hh:mm A'));
        }, 1000);
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>{currentDate}</Text>
            {flagButton && <ActionButton name={ACTION_CIRECLE_PLUS} style={styles[ACTION_CIRECLE_PLUS]} onClick={handleClick}/>}  
        </View>
    )
};

const styles = StyleSheet.create({
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

export default DataBar;

