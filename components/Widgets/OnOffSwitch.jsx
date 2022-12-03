import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useOrientation } from '../../hooks/useOrientation';
import { CLOSE } from '../../Constant';

const backgroundImg = require('../../assets/images/room/ellipse.png');
const lampImg = require('../../assets/images/room/lamp.png');
const width = 41;
const height = 36;
const padding = height / 10;
const borderRadius = height * 0.2;

const OnOffSwitch = () => {

    const [clickFlag, setClickFlag] = useState();
    const [isVisibleMolal, setIsVisibleModal] = useState(false);
    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    useEffect(() => {

    }, []);

    return (
        <View style={portrait.container}>
            <View style={portrait.topContainer}>
                <Pressable onPress={() => setIsVisibleModal(!isVisibleMolal)} style={portrait.widgetTile}>
                    <View style={portrait.mainImage}>
                        <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                        <Image source={lampImg} resizeMode="contain" style={{ width: 25, height: 25, position: 'absolute' }}></Image>  
                    </View>
                    <View>
                        <Text style={orientationStyle.widgetName}>On/Off Switch</Text>
                    </View>    
                </Pressable>
                <View style={portrait.controllButton}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag)}} style={portrait.buttonContainer}>
                        <View style={clickFlag ? portrait.buttonOn : portrait.buttonOff} >
                            <View style={portrait.buttonSwitch} />
                        </View>
                    </Pressable>
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
    },
    controllButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 8
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

const landscape = StyleSheet.create({
    widgetName: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 20
    }
});

export default OnOffSwitch;