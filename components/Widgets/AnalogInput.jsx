import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useOrientation } from '../../hooks/useOrientation';
import * as Progress from 'react-native-progress';


const backgroundImg = require('../../assets/images/room/ellipse.png');
const analogueTopImg = require('../../assets/images/room/analogue-top.png');
const analoueDownImg = require('../../assets/images/room/analoue-down.png');

const AnalogInput = () => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    useEffect(() => {

    }, []);

    return (
        <View style={portrait.container}>
            <View style={portrait.topContainer}>
                <View style={portrait.widgetTile}>
                    <View style={portrait.mainImage}>
                        <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                        <Image source={analogueTopImg} resizeMode="contain" style={{ top: 10, width: 20, height: 20, position: 'absolute' }}></Image>
                        <Image source={analoueDownImg} resizeMode="contain" style={{ top: 27, width: 20, height: 10, position: 'absolute' }}></Image>  
                    </View>
                    <View>
                        <Text style={orientationStyle.widgetName}>Analogue Value Display</Text>
                        <Text style={{ paddingLeft: 5, fonSize: 12, fontWeight: '300', color: '#FFFFFF', opacity: 0.6 }}>30%</Text>
                    </View>    
                </View>
            </View>
            <View style={{ paddingVertical: 20, paddingHorizontal: 15 }}>
                <Progress.Bar 
                    progress={0.3} 
                    color="#F1580C" 
                    unfilledColor="#979797" 
                    borderWidth={0} 
                    width={null} 
                    height={2}
                />
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
    },
    topContainer: {
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
    }
});

export default AnalogInput;