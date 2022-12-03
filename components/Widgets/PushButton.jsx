import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useOrientation } from '../../hooks/useOrientation';

const backgroundImg = require('../../assets/images/room/ellipse.png');
const dimmerImg = require('../../assets/images/room/dimmer.png');
const width = 45;
const height = 45;
const innerWidth = width / 2;
const innerHeight = width / 2;
const borderWidth = width / 8;
const padding = width * 0.375;

const PushButton = () => {

    const [clickFlag, setClickFlag] = useState(false);
    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    useEffect(() => {

    }, []);

    return (
        <View style={portrait.container}>
            <View style={portrait.widgetTile}>
                <View style={portrait.mainImage}>
                    <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                    <Image source={dimmerImg} resizeMode="contain" style={{ width: 30, height: 30, position: 'absolute' }}></Image>  
                </View>
                <Text style={orientationStyle.widgetName}>Push Button</Text>
            </View>
            <View style={portrait.controllButton}>
                <Pressable onPressIn={() => setClickFlag(!clickFlag)} onPressOut={() => setClickFlag(!clickFlag)} style={portrait.pushButton}>
                    <View style={clickFlag ? {...portrait.bigCircle, borderColor: '#F1580C'} : {...portrait.bigCircle, borderColor: '#6A6A6B'}} >
                        <View style={clickFlag ? {backgroundColor: '#F1580C', ...portrait.smallCircle} : {backgroundColor: '#6A6A6B', ...portrait.smallCircle}} />
                    </View>
                </Pressable >
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
    },
    controllButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pushButton: {
        position: 'relative',
        width: width, 
        height: height, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: width / 2
    },
    bigCircle: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',  
        borderWidth: borderWidth * 0.7, 
        borderRadius: (height * 0.7) / 2, 
        padding: padding * 0.7, 
        width: width * 0.7, 
        height: height * 0.7
    },
    smallCircle: {
        borderRadius: innerWidth * 0.7 / 2, 
        width: innerWidth * 0.7, 
        height: innerHeight * 0.7
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

export default PushButton;