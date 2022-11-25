import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment';
import { ELLIPSE_BLACK } from '../../Constant';

const DataBar = ( {flagButton} ) => {

    const [currentDate, setCurrentDate] = useState();

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(moment().format('ddd, D MMM YYYY | hh:mm A'));
        }, 1000);
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>{currentDate}</Text>
            {flagButton && <View style={styles.plusButton}>
                <Image source={ELLIPSE_BLACK} style={{ width: 30, height: 30 }}></Image>
                <Text style={styles.plusText}>+</Text>
            </View>}  
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
    plusButton: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusText: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500'
    }
});

export default DataBar;

