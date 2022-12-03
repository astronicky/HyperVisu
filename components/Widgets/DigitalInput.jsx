import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useOrientation } from '../../hooks/useOrientation';

const backgroundImg = require('../../assets/images/room/ellipse.png');
const lampHeaderImg = require('../../assets/images/room/desk-lamp-header.png');
const lampLegImg = require('../../assets/images/room/desk-lamp-leg.png');

const DigitalInput = () => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    useEffect(() => {

    }, []);

    return (
        <View style={portrait.container}>
            <View style={portrait.widgetTile}>
                <View style={portrait.mainImage}>
                    <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                    <Image source={lampHeaderImg} resizeMode="contain" style={{ top: 10, width: 18, height: 18, position: 'absolute' }}></Image>
                    <Image source={lampLegImg} resizeMode="contain" style={{ top: 27, width: 10, height: 10, position: 'absolute' }}></Image>  
                </View>
                <View>
                    <Text style={orientationStyle.widgetName}>Status Display</Text>
                    <Text style={{ paddingLeft: 5, fonSize: 12, fontWeight: '300', color: '#FFFFFF', opacity: 0.6 }}>On</Text>
                </View>                
            </View>
        </View>
    )
};

const portrait = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 9,
        backgroundColor: '#2F2F31',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    widgetTile: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    mainImage: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    widgetName: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 15
    }
});

const landscape = StyleSheet.create({
    widgetName: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 20
    },
});

export default DigitalInput;